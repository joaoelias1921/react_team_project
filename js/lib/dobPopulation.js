//last day of each month array
let days = [31,28,31,30,31,30,31,31,30,31,30,31];
let $ = document.querySelector.bind(document);
let day = $("#day");
let month = $("#month");
let year = $("#year");
let selects = document.querySelectorAll("select");

//makes next birthdate field enabled once you select something
function nextBirthdateField() {
    for (let i = 1; i < selects.length; i++) {
        if(selects[i-1].value != "") selects[i].removeAttribute("disabled");
    }
}

//if fields were already filled, they will be available for change
function showBirthdateFields() {
    if(localStorage.getItem(year.name)) {
        for(select of selects) {
            select.removeAttribute("disabled");
        }
    }
}

//populates the select element with days (option tags)
function populateDays() {
    let option = `<option value="">Day</option>`;

    for (let i = 1; i <= days[0]; i++){
        option += `<option value="${i}">${i}</option>`;
    }

    day.insertAdjacentHTML("beforeend", option);
}

//populates the select element with months (option tags)
function populateMonths() {
    month.innerHTML = "";
    
    let option = `<option value="">Month</option>`;

    for(let i = 1; i <= 12; i++) {
        option += `<option value="${i}">${i}</option>`;
    }

    month.insertAdjacentHTML("beforeend", option);
}

//populates the select element with years (option tags)
function populateYears() {
    let option = `<option value="">Year</option>`;

    for (let i = 1930; i <= new Date().getFullYear(); i++) {
        option += `<option value="${i}">${i}</option>`;
    }

    year.insertAdjacentHTML("beforeend", option);
}

//checks for leap year
function isLeapYear(year) {
    year = parseInt(year);
    if (year % 4 != 0) {
	    return false;
	}else if (year % 400 == 0) {
	    return true;
	}else if (year % 100 == 0) {
	    return false;
    }else {
	    return true;
	}
}

//necessary if the year is changed
function change_year(select) {
    if(isLeapYear(select.value)) {
		days[1] = 29;		    
    }else{
        days[1] = 28;
    }

    if(month.value == 2) {
        let val = day.value;

        day.innerHTML = "";

        let option = '';

        for (let i = 1; i <= days[1]; i++){
            option += `<option value="${i}">${i}</option>`;
        }

        day.insertAdjacentHTML("beforeend", option);
        
        if(val > days[month]) val = 1;

        day.value = val;
    }

    ageCalculator();
}

//necessary if the month is changed
function change_month(select) {
    let val = day.value;

    day.innerHTML = "";

    let option = '<option value="">Day</option>';
    let month = parseInt(select.value) - 1;

    for (let i = 1; i <= days[month]; i++){
        option += `<option value="${i}">${i}</option>`;
    }

    day.insertAdjacentHTML("beforeend", option);
    
    if(val > days[month]) val = 1;

    day.value = val;

    if(year.value !== "") {
        ageCalculator();
    }
}

//calculates the age based on the values passed for day, month and year
function ageCalculator() {
    let userinput = `${year.value}-${month.value}-${day.value}`;
    let dob = new Date(userinput);

    //calculate month difference from current date in time  
    let month_diff = Date.now() - dob.getTime();
    
    //convert the calculated difference in date format  
    let age_dt = new Date(month_diff);
    
    //extract year from date      
    let yearFromDate = age_dt.getUTCFullYear();
    
    //calculate the age of the user  
    let age = Math.abs(yearFromDate - 1970);
    
    //display the calculated age
    $("#age").value = age;
}  