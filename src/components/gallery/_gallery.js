const swiperGallery = new Swiper('.swiper-gallery', {
    slidesPerView: 4,
    spaceBetween: 0,
    slidesPerGroup: 4,
    loop: true,
    loopFillGroupWithBlank: true,
})


const swiperGalleryPopup = new Swiper('.gallery__popup-slider', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
    effect: 'flip',
    grabCursor: true,
    pagination: {
        el: '.swiper-pagination',
    },
})



const gallerySlideImage = document.querySelectorAll(".swiper-slide");
const galleryPopupSlider = document.querySelector(".gallery__popup-wrapper");
const gallaryPopupButton = document.querySelector(".gallery__popup-button");

gallerySlideImage.forEach(function(item) {
    item.addEventListener("click", function() {
        galleryPopupSlider.classList.toggle("gallery__popup-wrapper--active")
    })
}) 

gallaryPopupButton.addEventListener("click", function(item) {
    galleryPopupSlider.classList.toggle("gallery__popup-wrapper--active")
})