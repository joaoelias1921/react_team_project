window.onload = function(){
    populateDays();
    populateMonths();
    populateYears();
    loadLocalStorage();
};

let form1 = $(".form1");
let form2 = $(".form2");
let form3 = $(".form3");
let navButtons = document.getElementsByClassName("nav-btn");
let selectedButton = $(".selected-btn");