window.onload = function(){
    populateDays();
    populateMonths();
    populateYears();
};

day.addEventListener("change", () => {
    month.removeAttribute("disabled");
});

month.addEventListener("change", () => {
    year.removeAttribute("disabled");
});