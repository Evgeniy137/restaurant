/* === mobile menu === */
let mobileBtn = document.querySelector(".nav__mobile");

mobileBtn.addEventListener("click", (e) => {
    if (mobileBtn.classList.toggle("nav__mobile--active")) {
        document.querySelector('.menu__mobile').classList.add("menu__mobile--active")
        document.querySelector('body').style.overflow ="hidden"
    } else {
        document.querySelector('.menu__mobile').classList.remove("menu__mobile--active")
        document.querySelector('body').style.overflow ="auto"
    }
})
/* === / mobile menu === */


/* === btn down === */
const linkBtnDown = document.querySelector('.link-down')

linkBtnDown.addEventListener('click', function (e) {
    e.preventDefault()

    const scrollPoint = linkBtnDown.getAttribute('href')

    document.querySelector(scrollPoint).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
})
/* === / btn down === */