let fullname = $("#full-name");
let nickname = $("#nickname");
let email = $("#email");
let phone = $("#phone");
let age = $("#age");

$(".form").addEventListener("submit", (event) => {
    event.preventDefault();
});

function saveToLocalStorage(field) {
    if(field.value != "") localStorage.setItem(field.name, field.value);
}

function saveAgeToLS() {
    localStorage.setItem("age", age.value);
}

$(".continue-btn").addEventListener("click", saveAgeToLS);

const loadLocalStorage = () => {
    fullname.value = localStorage.getItem("fullname");
    nickname.value = localStorage.getItem("nickname");
    email.value = localStorage.getItem("email");
    phone.value = localStorage.getItem("phone");
    day.value = localStorage.getItem("dobDay");
    month.value = localStorage.getItem("dobMonth");
    year.value = localStorage.getItem("dobYear");
    age.value = localStorage.getItem("age");
}