// definindo variaveis para puxar valor do local storage
function getData() {
    let inputArray = document.querySelectorAll("input");
    let selectArray = document.querySelectorAll("select");
    window.dataArray = [];

    for(input of inputArray) {
        dataArray.push(input.value);
    }
    for(select of selectArray) {
        dataArray.push(select.value);
    }
    for(dado of dados) {
        dataArray.push(dado.propostas);
    }

    dataArray = dataArray.filter(e => e !== "");
}

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


function getVariables() {
    if(dados.length == 0){
        var template = `
            <div class="mydata-title">
                <h3>My data</h3>
            </div>
            <div class="mydata-container">
                <li><span>Full Name</span> <br>${dataArray[0]}</li>
                <li><span>Nickname</span> <br>${dataArray[1]}</li>
                <li><span>E-mail</span> <br>${dataArray[2]}</li>
                <li><span>Phone</span> <br>${dataArray[3]}</li>
                <li><span>Date of Birth</span> <br>${dataArray[11]}/${dataArray[12]}/${dataArray[13]}</li>
                <li><span>Age</span> <br>${dataArray[4]}</li>
                <li><span>Linkedin</span> <br>${dataArray[6]}</li>
                <li><span>Github</span> <br>${dataArray[7]} </li>
                <li><span>Team Name</span> <br>${dataArray[8]}</li>
                <li><span>Institution</span> <br>${dataArray[9]}</li>
                <li><span>Graduation</span> <br>${dataArray[10]}</li>
            </div>
        `;
    }else {
        var template = `
            <div class="mydata-title">
                <h3>My data</h3>
            </div>
            <div class="mydata-container">
                <li><span>Full Name</span> <br>${dataArray[0]}</li>
                <li><span>Nickname</span> <br>${dataArray[1]}</li>
                <li><span>E-mail</span> <br>${dataArray[2]}</li>
                <li><span>Phone</span> <br>${dataArray[3]}</li>
                <li><span>Date of Birth</span> <br>${dataArray[11]}/${dataArray[12]}/${dataArray[13]}</li>
                <li><span>Age</span> <br>${dataArray[4]}</li>
                <li><span>Linkedin</span> <br>${dataArray[6]}</li>
                <li><span>Github</span> <br>${dataArray[7]} </li>
                <li><span>Team Name</span> <br>${dataArray[8]}</li>
                <li><span>Institution</span> <br>${dataArray[9]}</li>
                <li><span>Graduation</span> <br>${dataArray[10]}</li>
            </div>
            <div class="certificates-container">
                <h3>Certificates</h3>
                ${showCertificates()}
            </div>
        `;
    }

    localStorage.clear();

    var pai = document.querySelector('.cards-container');
    if(pai.innerHTML.includes("null") || pai.innerHTML.includes("undefined")){
        pai.innerHTML = "";
    }
    pai.innerHTML += template;
    localStorage.setItem("card", template);
}

document.querySelector("#modal-finish").addEventListener("click", (event) => {
    event.preventDefault();
    document.location.reload();
});

var pai = document.querySelector('.cards-container');
pai.innerHTML += localStorage.getItem("card");