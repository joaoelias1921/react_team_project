function validateName(name) {
    let regex = /^[ãâáôõóêéíúa-zA-Z ]*$/;
    
    if(!regex.test(name.value)) {
        localStorage.removeItem("fullname");
        name.value = "";
        name.style.border = "1px solid red";
        alert("Please input a valid name!");
    }else{
        nameArray = name.value.split(" ");

        for (let i = 0; i < nameArray.length; i++) {
            if(nameArray[i].charAt(1)){
                nameArray[i] = `${nameArray[i].charAt(0).toUpperCase()}${nameArray[i].slice(1)}`;
            }
        }

        name.value = nameArray.join(" ");
        name.style.border = null;

        localStorage.setItem("fullname", name.value);
    } 
}

function verifyEmail(email) {
    if(!email.value.includes(".com")) {
        email.value = "";
        email.style.border = "1px solid red";
        localStorage.removeItem("email");
        alert("Please input a valid email address!");
    }else{
        email.style.border = null;
    }
}

$(".continue-btn").addEventListener("click", (event) => {
    event.preventDefault();
    validateBasicForm();
});

function validateBasicForm() {
    let termsCheck = $("#terms-check");
    let valid = true;

    let inputs = [];
    inputs.push(fullname, email, day, month, year);

    inputs.forEach((input) => {
        let formGroup = input.parentElement;
        errorMsg = formGroup.querySelector(".error-message");

        if(input.value == "") {
            input.style.border = "1px solid red";
            valid = false;
            
            if(!errorMsg){                
                let span = document.createElement("span");
                span.textContent = "This field is required!";
                span.className = "error-message";
                input.after(span);
            }
        }else {
            input.style.border = null;
            let errors = formGroup.getElementsByClassName("error-message");
            while (errors[0]) {
                errors[0].parentNode.removeChild(errors[0]);
            }
        }
    });

    if(valid) {
        if(!termsCheck.checked){
            alert("Please make sure you have accepted the terms and privacy!");
        }else{
            navButtons[1].removeAttribute("disabled");
            navigateToSocial();
        }
    }
}

$(".next-btn").addEventListener("click", (event) => {
    event.preventDefault();
    validateSocialForm();
});

function validateSocialForm() {
    let formGroup = github.parentElement;
    errorMsg = formGroup.querySelector(".error-message");

    if(github.value == "") {
        github.style.border = "1px solid red";

        if(!errorMsg){
            let span = document.createElement("span");
            span.textContent = "This field is required!";
            span.className = "error-message";
            github.after(span);
        }
    }else{
        let errors = formGroup.getElementsByClassName("error-message");
        while (errors[0]) {
            errors[0].parentNode.removeChild(errors[0]);
        }
        navButtons[2].removeAttribute("disabled");
        navigateToCertificates();
    }
}

$(".finish-btn").addEventListener("click", (event) => {
    event.preventDefault();
    validateCertificatesForm();
});

function validateCertificatesForm() {
    let valid = true;
    let inputs = [];
    inputs.push(teamName, institution, graduation);

    inputs.forEach((input) => {
        let formGroup = input.parentElement;
        errorMsg = formGroup.querySelector(".error-message");

        if(input.value == "") {
            input.style.border = "1px solid red";
            valid = false;

            if(!errorMsg){
                let span = document.createElement("span");
                span.textContent = "This field is required!";
                span.className = "error-message";
                input.after(span);
            }
        }else {
            input.style.border = null;
            let errors = formGroup.getElementsByClassName("error-message");
            while (errors[0]) {
                errors[0].parentNode.removeChild(errors[0]);
            }
        }
    });

    return valid;
}