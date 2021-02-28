const  { src, dest, parallel, series, watch } = require('gulp');
const fileInclude = require('gulp-file-include');  // include HTML file
const sass = require('gulp-sass'); // compiler SASS
const concat = require('gulp-concat'); // concat CSS file
const rename = require('gulp-rename'); // rename file, + suffix 'min'
const autoprefixer = require('gulp-autoprefixer'); // add prefix CSS
const cleanCss = require('gulp-clean-css') // minimization css
const uglify = require('gulp-uglify-es').default; // minimization js
const sourceMaps = require('gulp-sourcemaps') // add file with debugging code
const browserSync = require('browser-sync').create(); // auto reloaded browser
const imagemin = require('gulp-imagemin') // minimization image
const svgSprite = require('gulp-svg-sprite'); // create SVG sprite
const fontsWoff = require('gulp-ttf2woff'); // converts to format woff
const fontsWoff2 = require('gulp-ttf2woff2'); // converts to format woff2

/* === work in html === */
const html = () => {
    return src(["./src/index.html"])
    .pipe(fileInclude({
        prefix: '@',
        basepath: '@file'
    }))
    .pipe(dest('./build'))
    .pipe(browserSync.stream());
};
/* === / work in html === */



/* === work in style === */
const styles = () => {
    return src("./src/sass-components/**/*.scss")
    .pipe(sourceMaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    .pipe(concat('style.css'))
    .pipe(rename({
        suffix: '.min'
    }))
    .pipe(cleanCss({
        level: 2
    }))
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./build/css'))
    .pipe(browserSync.stream());
}
/* === / work in style === */



/* === work in js === */
const scripts = () => {
    return src(["./src/js-components/**/*.js",
                /* === "add URL plugins", === */
])
    .pipe(sourceMaps.init())
    .pipe(concat('script.js'))
    .pipe(rename({
        suffix: '.min'
    })) 
    .pipe(uglify())
    .pipe(sourceMaps.write('.'))
    .pipe(dest('./build/js/'))
    .pipe(browserSync.stream());
}
/* === / work in js === */



/* === work in image === */
const image = () => {
    return src('./src/media/image/**')
    .pipe(imagemin())
    .pipe(dest('./build/image/'))
}
/* === / work in media === */



/* === work in svg === */
const svg = () => {
    return src("./src/media/svg/**.svg")
    .pipe(svgSprite({
        mode: {
            stack: {
                sprite: "../sprite.svg"
            }
        }
    }))
    .pipe(dest("./build/image"))
}
/* === /  work in svg === */



/* === work in fonts ===  */
const fonts = () => {
    src('./src/fonts/**.ttf')
    .pipe(fontsWoff())
    .pipe(dest('./build/fonts/'))
    return src("./src/fonts/**.ttf")
    .pipe(fontsWoff2())
    .pipe(dest('./build/fonts/'))
}
/* === /  work in fonts ===  */



/* === work watching file ===  */
const watching = () => {
    browserSync.init({
        server: {
            baseDir: "./build"
        }
    });
    watch("./src/**/*.html", html);
    watch("./src/sass-components/**.scss", styles);
    watch("./src/js-components/**.js", scripts);
    watch(["./src/media/image/**.png", "./src/media/image/**.jpg", "./src/media/image/**.jpeg"], image);
    watch("./src/media/svg/**.svg", svg);
    watch("./src/fonts/**.ttf", fonts);
};
/* === / work watching file === */



/* === work compil prod version ===  */
const mainApp = () => {
    src("./build/index.html")
    .pipe(dest("./main/"))
    src("./build/css/style.min.css")
    .pipe(dest("./main/style/"))
    return src("./build/js/script.min.js")
    .pipe(dest("./main/js/"))
}
/* === / work compil prod version ===  */

/* === tasks === */
exports.html = html;
exports.styles = styles
exports.scripts = scripts;
exports.image = image;
exports.svg = svg;
exports.fonts = fonts; 

exports.start = series(html, fonts, styles, scripts, image, svg );
// === Start project creation
// === Enter "gulp start"

exports.watching = watching;  
// === Server start and file watching
// === Enter "gulp watching"

exports.mainApp = mainApp;
// === Create main version
// === Enter "gulp mainApp"

/* === /  tasks === */

