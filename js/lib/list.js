// DESSA TELA PRECISA SAIR A VARIAVEL CONTRESPOSTAS PARA CONTAR
// E A VARIAVEL STRINGRESPOSTAS, ESSA CONTÉM UMA TEMPLATE STRING 
//NA TELA RE RESPOSTAS PRECISA CRIAR UMA DIV, E DAR APPENDCHILD COM A VARIAVEL STRINGRESPOSTAS 
// DEPOIS APAGA O RESTO DOS DADOS DO STORAGE EXCETO AS VARIAVEIS QUE CITEI NO INICIO

//renderizarRespostas(event);

// definindo variaveis para puxar valor do local storage
function getData() {
    window.listfullname = localStorage.getItem('fullname');
    window.listnickname = localStorage.getItem("nickname");
    window.listemail = localStorage.getItem("email");
    window.listphone = localStorage.getItem("phone");
    window.listdobDay = localStorage.getItem("dobDay");
    window.listdobMonth = localStorage.getItem("dobMonth");
    window.listdobYear = localStorage.getItem("dobYear");
    window.listage = localStorage.getItem("age");
    window.listlinkedin = localStorage.getItem("linkdin-link");
    window.listgithub = localStorage.getItem("github-link");
    window.listteamName = localStorage.getItem("teamName");
    window.listinstitution = localStorage.getItem("institution");
    window.listgraduation = localStorage.getItem("graduation");
    window.listdados = JSON.parse(localStorage.getItem('dados'));
}

var ContRespostas = 0;

function getVariables() {
    ContRespostas = ContRespostas+1;

    if(dados.length == 0){
        var StringRespostas = `<h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        </div>
        `;
    }if(dados.length == 1){
        var StringRespostas = `<h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        <h3>
        Certificates
        </h3>
        <li>
        ${dados[0].propostas}
        </li>
        </div>
        `;
    }if(dados.length == 2){
        var StringRespostas = `
        <h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        <h3>
        Certificates
        </h3>
        <li>
        ${dados[0].propostas}
        </li>
        <li>
        ${dados[1].propostas}
        </li>
        </div>
        `;
    }if(dados.length == 3){
        var StringRespostas = `
        <h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        <h3>
        Certificates
        </h3>
        <li>
        ${dados[0].propostas}
        </li>
        <li>
        ${dados[1].propostas}
        </li>
        <li>
        ${dados[2].propostas}
        </li>
        </div>
        `;
    }if(dados.length == 4){
        var StringRespostas = `
        <h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        <h3>
        Certificates
        </h3>
        <li>
        ${dados[0].propostas}
        </li>
        <li>
        ${dados[1].propostas}
        </li>
        <li>
        ${dados[2].propostas}
        </li>
        <li>
        ${dados[3].propostas}
        </li>
        </div>
        `;
    }else if(dados.length == 5){
        var StringRespostas = `
        <h3 id="cabecalho">My data</h3>
        <div id="divRespostas">
        <li>
        Full Name: ${listfullname}
        </li>
        <li>
        Nickname: ${listnickname}
        </li>
        <li>
        E-mail: ${listemail}
        </li>
        <li>
        Phone: ${listphone}
        </li>
        <li>
        Date of Birth: ${listdobDay}/${listdobMonth}/${listdobYear}
        </li>
        <li>
        Age: ${listage}
        </li>
        <li>
        Linkedin: ${listlinkedin}
        </li>
        <li>
        Github: ${listgithub}
        </li>
        <li>
        Team Name: ${listteamName}
        </li>
        <li>
        Institution: ${listinstitution}
        </li>
        <li>
        Graduation: ${listgraduation}
        </li>
        <h3>
        Certificates
        </h3>
        <li>
        ${dados[0].propostas}
        </li>
        <li>
        ${dados[1].propostas}
        </li>
        <li>
        ${dados[2].propostas}
        </li>
        <li>
        ${dados[3].propostas}
        </li>
        <li>
        ${dados[4].propostas}
        </li>
        </div>
        `;
    }

    localStorage.clear();

    var pai = document.querySelector('.cards-container');
    var elemento = document.createElement('div');
    console.log(StringRespostas);
    elemento.innerHTML = StringRespostas;
    if(pai.innerHTML.includes("null") || pai.innerHTML.includes("undefined")){
        pai.innerHTML = "";
    }
    pai.appendChild(elemento);
    localStorage.setItem("card", elemento.innerHTML);
}

document.querySelector("#modal-finish").addEventListener("click", (event) => {
    event.preventDefault();
    document.location.reload();
});

function saveResponseToStorage(){
    localStorage.setItem('respostas', JSON.stringify(respostas));
}

var pai = document.querySelector('.cards-container');
pai.innerHTML += localStorage.getItem("card");