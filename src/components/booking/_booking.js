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


let b1 = document.querySelector(".form__button--booking")
let db = {}
b1.addEventListener("click", () => {
    let elements = document.getElementById("myForm").elements;
    console.log(elements)
    let obj ={};
    console.log(obj)
    for(let i = 0 ; i < elements.length ; i++){
        let item = elements.item(i);
        obj[item.name] = item.value;
        db = obj;
}}) 
console.log(db)

/*  === / getting form data === */