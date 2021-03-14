/* === mobile menu === */
let mobileBtn = document.querySelector(".nav__mobile");

mobileBtn.addEventListener("click", (e) => {
    /* mobileBtn.classList.toggle("nav__mobile-active") */
    if (mobileBtn.classList.toggle("nav__mobile--active")) {
        document.querySelector('.menu__mobile').classList.add("menu__mobile--active")
        document.querySelector('body').style.overflow ="hidden"
    } else {
        document.querySelector('.menu__mobile').classList.remove("menu__mobile--active")
        document.querySelector('body').style.overflow ="auto"
    }
})

/* === / mobile menu === */