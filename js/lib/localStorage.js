//necessary variables used throughout the project
let fullname = $("#full-name");
let nickname = $("#nickname");
let email = $("#email");
let phone = $("#phone");
let age = $("#age");
let linkdin = $("#linkdin-link");
let github = $("#github-link");
let teamName = $("#teamName");
let institution = $("#institution");
let graduation = $("#graduation");

$(".form1").addEventListener("submit", (event) => {
    event.preventDefault();
});

//saves the data from the input fields to browser local storage
function saveToLocalStorage(field) {
    if(field.value != "") localStorage.setItem(field.name, field.value);
}

//saves age data to local storage
function saveAgeToLS() {
    localStorage.setItem("age", age.value);
}

//saves the checkbox state (checked or not) to local storage
function saveCheckboxToLS(checkbox) {
    localStorage.setItem(checkbox.name, checkbox.checked);
}

//calls functions on button click
$(".continue-btn").addEventListener("click", () => {
    ageCalculator();
    saveAgeToLS();
});

//loads all local storage information on every window load (called in index.js)
function loadLocalStorage(){
    let inputs = document.querySelectorAll("input");
    let selects = document.querySelectorAll("select");
    let termsCheck = $("#terms-check");

    inputs.forEach((input) => {
        input.value = localStorage.getItem(input.name);
    });

    selects.forEach((select) => {
        if(!localStorage.getItem(select.name)){
            return;
        }else {
            select.value = localStorage.getItem(select.name);
        }        
    })

    termsCheck.checked = JSON.parse(localStorage.getItem("terms-check"))
}