function validateName(name) {
    let regex = /^[ãâáôõóêéíúa-zA-Z ]*$/;
    
    if(!regex.test(name.value)) {
        localStorage.removeItem("fullname");
        name.value = "";
        alert("Please input a valid name!");
    }else{
        nameArray = name.value.split(" ");

        for (let i = 0; i < nameArray.length; i++) {
            if(nameArray[i].charAt(1)){
                nameArray[i] = `${nameArray[i].charAt(0).toUpperCase()}${nameArray[i].slice(1)}`;
            }
        }

        name.value = nameArray.join(" ");

        localStorage.setItem("fullname", name.value);
    } 
}

function verifyEmail(email) {
    if(!email.value.includes(".com")) {
        email.value = "";
        localStorage.removeItem("email");
        alert("Please input a valid email address!");
    }
}