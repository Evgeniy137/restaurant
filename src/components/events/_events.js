const eventsImage = document.querySelector('.events__corporate-image')

let eventsContainerImage =document.querySelector(".events__corporate")

eventsImage.addEventListener("mouseover", () => {
    
    eventsContainerImage.classList.add("events__corporate--active")
})

eventsImage.addEventListener("mouseout", () => {
    eventsContainerImage.classList.remove("events__corporate--active")
})

