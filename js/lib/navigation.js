let basicBtn = $("#basic-btn");
let socialBtn = $("#social-btn");
let certBtn = $("#cert-btn");

//navigates to Basic Form if forms are filled
basicBtn.addEventListener("click", () => {
    if(certBtn.classList.contains("selected-btn")) {
        validateCertificatesForm();
        if(validateCertificatesForm()) {
           navigateToBasic();
        }else {
            return;
        }
    }

    if(socialBtn.classList.contains("selected-btn")) {
        validateSocialForm();
        if(validateSocialForm()) {
            navigateToBasic();
        }else {
            return;
        }
    }
});

//navigates to Social Form if forms are filled
socialBtn.addEventListener("click", () => {
    if(certBtn.classList.contains("selected-btn")) {
        validateCertificatesForm();
        if(validateCertificatesForm()) {
           navigateToSocial();
        }else {
            return;
        }
    }

    if(basicBtn.classList.contains("selected-btn")) {
        validateBasicForm();
        if(validateBasicForm()) {
            navigateToSocial();
        }else {
            return;
        }
    }
});

//navigates to Certificates Form if forms are filled
certBtn.addEventListener("click", () => {
    if(basicBtn.classList.contains("selected-btn")) {
        validateBasicForm();
        if(validateBasicForm()) {
           navigateToCertificates();
        }else {
            return;
        }
    }

    if(socialBtn.classList.contains("selected-btn")) {
        validateSocialForm();
        if(validateSocialForm()) {
            navigateToCertificates();
        }else {
            return;
        }
    }
});

//single page navigation, disabling and enabling "display" attributes (show Basic Form)
//also highlights the selected button
function navigateToBasic() {
    form2.style.display = "none";
    form1.style.display = "flex";
    form3.style.display = "none";

    navButtons[0].classList.add("selected-btn");
    navButtons[1].classList.remove("selected-btn");
    navButtons[2].classList.remove("selected-btn");
}

//single page navigation, disabling and enabling "display" attributes (show Social Form)
//also highlights the selected button
function navigateToSocial() {
    form1.style.display = "none";
    form2.style.display = "flex";
    form3.style.display = "none";

    navButtons[0].classList.remove("selected-btn");
    navButtons[1].classList.add("selected-btn");
    navButtons[2].classList.remove("selected-btn");
}

//single page navigation, disabling and enabling "display" attributes (show Certificates Form)
//also highlights the selected button
function navigateToCertificates() {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "flex";

    navButtons[0].classList.remove("selected-btn");
    navButtons[1].classList.remove("selected-btn");
    navButtons[2].classList.add("selected-btn");
}