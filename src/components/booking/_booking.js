/* === library for date and time input === */
const fp = flatpickr("#date", {

    dateFormat: "Y-m-d"
})
const fpe = flatpickr("#time", {

    enableTime: true,
    noCalendar: true,
    dateFormat: "H:i",
    time_24hr: true
});
/* === / library for date and time input === */

/*  === getting form data === */
let buttonOpenPopup = document.querySelector(".form__button--booking") // open popup
let bookingPopupWrapper = document.querySelector(".booking-popup") // overlay with popup
let formData = {} // object with data form
let buttonClosePopup = document.querySelector(".booking-popup__close") // close popup
let popupContainer = document.querySelector(".booking-popup__key"); // container with add properties

// open popup and ad property
buttonOpenPopup.addEventListener("click", (e) => {
    e.preventDefault()
    let elements = document.getElementById("form-booking").elements; // add elements with form

    for (let i = 0; i < elements.length; i++) {
        let item = elements.item(i);
        formData[item.name] = item.value;
    }




    // form validate
    let nameValidRegular = /аб*/g;
    let gg = formData.Name;
    let arr;
    function valid() {
        arr = nameValidRegular.exec(gg);
        console.log(arr)
    }
    valid()
    if (arr == null) {
        console.log(arr)
        return false;
    }
        
    





    popupContainer.insertAdjacentHTML('afterbegin',
    `
    <ul class="booking-popup__key--property">
        <li>${formData.Name}</li>
        <li>${formData.Email}</li>
        <li>${formData.Phone}</li>
        <li>${formData.People}</li>
        <li>${formData.Date}</li>
        <li>${formData.Time}</li>
    </ul>
    `
    )
    bookingPopupWrapper.style.display = "block"; // open popup

    
})

// close popup and del property
buttonClosePopup.addEventListener("click", () => {
    bookingPopupWrapper.style.display = "none";
    let delProperty = document.querySelector('.booking-popup__key--property').remove()
})


