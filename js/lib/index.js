window.onload = function(){
    populateDays();
    populateMonths();
    populateYears();
    loadLocalStorage();
};

day.addEventListener("change", () => {
    month.removeAttribute("disabled");
});

month.addEventListener("change", () => {
    year.removeAttribute("disabled");
});

function verifyEmail(email) {
    if(!email.value.includes(".com")) {
        email.value = "";
        localStorage.removeItem("email");
        alert("Please input a valid email address!");
    }
}