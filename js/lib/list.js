//validation for fields that are not required
function validateNullData(value) {
    if(value){ return value } else return "No data received!";
}

//shows the certificates in the form, if any
function showCertificates() {
    let lis;

    for(dado of dados) {
        lis += `<li>${dado.propostas}</li>`;
        if(lis.includes("undefined")){
            lis = "";
            lis += `<li>${dado.propostas}</li>`;
        }
    }

    return lis;
}

//populates the templates for the cards that will show the data later on
//also clears the local storage data in order to empty the form for a new data insertion
function getCardData() {
    if(dados.length == 0){
        var template = `
            <div class="mydata-title">
                <h3>My data</h3>
            </div>
            <div class="mydata-container">
                <li><span>Full Name</span> <br>${localStorage.getItem("fullname")}</li>
                <li><span>Nickname</span> <br>${validateNullData(localStorage.getItem("nickname"))}</li>
                <li><span>E-mail</span> <br>${localStorage.getItem("email")}</li>
                <li><span>Phone</span> <br>${validateNullData(localStorage.getItem("phone"))}</li>
                <li><span>Date of Birth</span> <br>${localStorage.getItem("dobDay")}/${localStorage.getItem("dobMonth")}/${localStorage.getItem("dobYear")}</li>
                <li><span>Age</span> <br>${localStorage.getItem("age")}</li>
                <li><span>Linkedin</span> <br>${validateNullData(localStorage.getItem("linkdin-link"))}</li>
                <li><span>Github</span> <br>${localStorage.getItem("github-link")} </li>
                <li><span>Team Name</span> <br>${localStorage.getItem("teamName")}</li>
                <li><span>Institution</span> <br>${localStorage.getItem("institution")}</li>
                <li><span>Graduation</span> <br>${localStorage.getItem("graduation")}</li>
            </div>
        `;
    }else {
        var template = `
            <div class="mydata-title">
                <h3>My data</h3>
            </div>
            <div class="mydata-container">
                <li><span>Full Name</span> <br>${localStorage.getItem("fullname")}</li>
                <li><span>Nickname</span> <br>${validateNullData(localStorage.getItem("nickname"))}</li>
                <li><span>E-mail</span> <br>${localStorage.getItem("email")}</li>
                <li><span>Phone</span> <br>${validateNullData(localStorage.getItem("phone"))}</li>
                <li><span>Date of Birth</span> <br>${localStorage.getItem("dobDay")}/${localStorage.getItem("dobMonth")}/${localStorage.getItem("dobYear")}</li>
                <li><span>Age</span> <br>${localStorage.getItem("age")}</li>
                <li><span>Linkedin</span> <br>${validateNullData(localStorage.getItem("linkdin-link"))}</li>
                <li><span>Github</span> <br>${localStorage.getItem("github-link")} </li>
                <li><span>Team Name</span> <br>${localStorage.getItem("teamName")}</li>
                <li><span>Institution</span> <br>${localStorage.getItem("institution")}</li>
                <li><span>Graduation</span> <br>${localStorage.getItem("graduation")}</li>
            </div>
            <div class="certificates-container">
                <h3>Certificates</h3>
                ${showCertificates()}
            </div>
        `;
    }

    localStorage.clear();

    var cardsContainer = document.querySelector('.cards-container');
    if(cardsContainer.innerHTML.includes("null") || cardsContainer.innerHTML.includes("undefined")){
        cardsContainer.innerHTML = "";
    }
    cardsContainer.innerHTML += template;
    localStorage.setItem("card", template);
}

document.querySelector("#modal-finish").addEventListener("click", (event) => {
    event.preventDefault();
    document.location.reload();
});

var cardsContainer = document.querySelector('.cards-container');
cardsContainer.innerHTML += localStorage.getItem("card");