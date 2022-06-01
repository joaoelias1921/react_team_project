function navigateToBasic() {
    form2.style.display = "none";
    form1.style.display = "flex";
    //form3.style.display = "none";

    navButtons[0].classList.add("selected-btn");
    navButtons[1].classList.remove("selected-btn");
    navButtons[2].classList.remove("selected-btn");
}

function navigateToSocial() {
    form1.style.display = "none";
    form2.style.display = "flex";
    //form3.style.display = "none";

    navButtons[0].classList.remove("selected-btn");
    navButtons[1].classList.add("selected-btn");
    navButtons[2].classList.remove("selected-btn");
}