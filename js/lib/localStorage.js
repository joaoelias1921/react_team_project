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

function saveToLocalStorage(field) {
    if(field.value != "") localStorage.setItem(field.name, field.value);
}

function saveAgeToLS() {
    localStorage.setItem("age", age.value);
}

function saveCheckboxToLS(checkbox) {
    localStorage.setItem(checkbox.name, checkbox.checked);
}

$(".continue-btn").addEventListener("click", () => {
    ageCalculator();
    saveAgeToLS();
});

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