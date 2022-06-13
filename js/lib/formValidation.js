//checks the name for invalid characters
//also sets the first letter of each name to upper case
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

//checks if the email contains ".com"
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

//listens for the click of the "next" button, calling the form validation function
$(".continue-btn").addEventListener("click", (event) => {
    event.preventDefault();
    if(!validateBasicForm()) {
        return;
    }else {
        navButtons[1].removeAttribute("disabled");
        navigateToSocial();
    }
});

//full Basic Form validation
function validateBasicForm() {
    let termsCheck = $("#terms-check");
    let valid = true;

    let inputs = [];
    inputs.push(fullname, email, day, month, year);

    //adds error message if empty, removes the message if necessary
    inputs.forEach((input) => {
        let formGroup = input.parentElement;
        let errorMsg = formGroup.querySelector(".error-message");

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

    let checkGroup = $(".check-group");
    let formFooter = checkGroup.parentElement;
    let errorMsg = formFooter.querySelector(".error-message");

    //adds error message if not checked, removes the message if necessary
    if(!termsCheck.checked){
        valid = false;
        let span = document.createElement("span");
        
        if(!errorMsg) {
            span.className = "error-message";
            span.style.marginBottom = "2%";
            span.textContent = "Please make sure you have accepted the terms and privacy!";
        }
        
        checkGroup.before(span);
    }else {
        let errors = formFooter.getElementsByClassName("error-message");
        while (errors[0]) {
            errors[0].parentNode.removeChild(errors[0]);
        }
    }

    return valid;
}

//listens for the click of the "next" button, calling the form validation function
$(".next-btn").addEventListener("click", (event) => {
    event.preventDefault();
    if(!validateSocialForm()) {
        return;
    }else {
        navButtons[2].removeAttribute("disabled");
        navigateToCertificates();
    }
});

//full Social Form validation
function validateSocialForm() {
    let valid = true;
    let formGroup = github.parentElement;
    errorMsg = formGroup.querySelector(".error-message");

    //adds error message if empty
    if(github.value == "") {
        github.style.border = "1px solid red";
        valid = false;

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
    }

    return valid;
}

//listens for the click of the "Finish" button, calling validation function
$(".finish-btn").addEventListener("click", (event) => {
    event.preventDefault();
    validateCertificatesForm();
});

//full Certificates Form validation
function validateCertificatesForm() {
    let valid = true;
    let inputs = [];
    inputs.push(teamName, institution, graduation);

    //adds error message to empty inputs, removes if necessary
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