const eventsCorporateImage = document.querySelector(".events__corporate-image")
const eventsWeddnesImage = document.querySelector(".events__weddnes-image")

const eventsCorporateWrapper = document.querySelector(".events__corporate")
const eventsWeddnesWrapper = document.querySelector(".events__weddnes")

eventsCorporateImage.addEventListener("mouseover", function() {
    eventsCorporateWrapper.classList.add("corporate__hover-active")
})
eventsCorporateImage.addEventListener("mouseout", function() {
    eventsCorporateWrapper.classList.remove("corporate__hover-active")
})


eventsWeddnesImage.addEventListener("mouseover", function() {
    eventsWeddnesWrapper.classList.add("weddnes__hover-active")
})
eventsWeddnesImage.addEventListener("mouseout", function() {
    eventsWeddnesWrapper.classList.remove("weddnes__hover-active")
})