/* === tabs === */
const menuTabsButton = document.querySelectorAll(".tabs__button")
const menuTabsItem = document.querySelectorAll(".menu__tabs-item")
const mobileOpenButton = document.querySelector(".tabs__open-mobile")
const mobileTansItem = document.querySelector(".tabs__button-mobile")


menuTabsButton.forEach(function(item) {
    item.addEventListener("click", () => {
        let currentButton = item;
        let currentTabsId = currentButton.getAttribute("data-tab")
        let currentTabsContent = document.querySelector(currentTabsId)




        // delete class active buttons
        menuTabsButton.forEach( function(item) {
            item.classList.remove("tabs__button--active")
        })
        // delete class active item 
        menuTabsItem.forEach(function(item) {
            item.classList.remove("menu__tabs-item--active")
        })

        // add class active
        currentButton.classList.add("tabs__button--active");
        currentTabsContent.classList.add("menu__tabs-item--active")
    })
})

/* === / tabs === */   

/* === mobile tabs === */
mobileOpenButton.addEventListener("click", function() {
    let mobileTansItem = document.querySelector(".tabs__button-mobile")
    mobileTansItem.classList.toggle("sssssssssssss")
})
/* === / mobile tabs === */




