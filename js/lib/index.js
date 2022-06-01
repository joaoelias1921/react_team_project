window.onload = function(){
    populateDays();
    populateMonths();
    populateYears();
    loadLocalStorage();
};

let form1 = $(".form1");
let form2 = $(".form2");
//let form3 = $(".form3");
let navButtons = document.getElementsByClassName("nav-btn");
let selectedButton = $(".selected-btn");

$(".continue-btn").addEventListener("click", () => {
    form1.style.display = "none";
    form2.style.display = "flex";
    navButtons[0].classList.remove("selected-btn");
    navButtons[1].classList.add("selected-btn");
});