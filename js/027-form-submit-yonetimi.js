// FORM SUBMIT:



let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event){
    event.preventDefault()// default işlemi engelledikk...
    console.log("islem gerçekleşti")
}


/*
let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // default islemi engelledik...
    console.log("islem gerceklesti")
}*/