// DESSA TELA PRECISA SAIR A VARIAVEL CONTRESPOSTAS PARA CONTAR
// E A VARIAVEL STRINGRESPOSTAS, ESSA CONTÉM UMA TEMPLATE STRING 
//NA TELA RE RESPOSTAS PRECISA CRIAR UMA DIV, E DAR APPENDCHILD COM A VARIAVEL STRINGRESPOSTAS 
// DEPOIS APAGA O RESTO DOS DADOS DO STORAGE EXCETO AS VARIAVEIS QUE CITEI NO INICIO


var btn = document.querySelector('#teste');

//renderizarRespostas(event);

var ContRespostas = 0;

function getVariables() {
    ContRespostas = ContRespostas+1;
    console.log('Função getVariables iniciada');
    // definindo variaveis para puxar valor do local storage
    var fullname = localStorage.getItem("fullname");
    var nickname = localStorage.getItem("nickname");
    var email = localStorage.getItem("email");
    var phone = localStorage.getItem("phone");
    var dobDay = localStorage.getItem("dobDay");
    var dobMonth = localStorage.getItem("dobMonth");
    var dobYear = localStorage.getItem("dobYear");
    var age = localStorage.getItem("age");
    var linkedin = localStorage.getItem("linkdin-link");
    var github = localStorage.getItem("github-link");
    var teamName = localStorage.getItem("teamName");
    var institution = localStorage.getItem("institution");
    var graduation = localStorage.getItem("graduation");
    var dados = JSON.parse(localStorage.getItem('dados'));
    console.log(dados)

    if(dados.length == 0){
        console.log("sem certificados");
    }if(dados.length == 1){
        var StringRespostas = `
    <h3 id="cabecalho"> Resposta: ${ContRespostas}</h3>
    <div id="divRespostas">
    <li>
    Nome Completo: ${fullname}
    </li>
    <li>
    nick: ${nickname}
    </li>
    <li>
    E-mail: ${email}
    </li>
    <li>
    Phone ${phone}
    </li>
    <li>
    dobDay: ${dobDay}
    </li>
    <li>
    dobMonth: ${dobMonth}
    </li>
    <li>
    dobYear: ${dobYear}
    </li>
    <li>
    Age: ${age}
    </li>
    <li>
    Linkedin: ${linkedin}
    </li>
    <li>
    nick: ${nickname}
    </li>
    <li>
    GitHub: ${github}
    </li>
    <li>
    GitHub: ${teamName}
    </li>
    <li>
    GitHub: ${institution}
    </li>
    <li>
    GitHub: ${graduation}
    </li>
    <h3>
    Certificados
    </h3>
    <li>
    ${dados[0].propostas}
    </li>
    </div>
    `;
    }if(dados.length == 2){
        var StringRespostas = `
        <h3 id="cabecalho"> Resposta: ${ContRespostas}</h3>
        <div id="divRespostas">
        <li>
        Nome Completo: ${fullname}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        E-mail: ${email}
        </li>
        <li>
        Phone ${phone}
        </li>
        <li>
        dobDay: ${dobDay}
        </li>
        <li>
        dobMonth: ${dobMonth}
        </li>
        <li>
        dobYear: ${dobYear}
        </li>
        <li>
        Age: ${age}
        </li>
        <li>
        Linkedin: ${linkedin}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        GitHub: ${github}
        </li>
        <li>
        GitHub: ${teamName}
        </li>
        <li>
        GitHub: ${institution}
        </li>
        <li>
        GitHub: ${graduation}
        </li>
        <h3>
        Certificados
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
    <h3 id="cabecalho"> Resposta: ${ContRespostas}</h3>
    <div id="divRespostas">
    <li>
    Nome Completo: ${fullname}
    </li>
    <li>
    nick: ${nickname}
    </li>
    <li>
    E-mail: ${email}
    </li>
    <li>
    Phone ${phone}
    </li>
    <li>
    dobDay: ${dobDay}
    </li>
    <li>
    dobMonth: ${dobMonth}
    </li>
    <li>
    dobYear: ${dobYear}
    </li>
    <li>
    Age: ${age}
    </li>
    <li>
    Linkedin: ${linkedin}
    </li>
    <li>
    nick: ${nickname}
    </li>
    <li>
    GitHub: ${github}
    </li>
    <li>
    GitHub: ${teamName}
    </li>
    <li>
    GitHub: ${institution}
    </li>
    <li>
    GitHub: ${graduation}
    </li>
    <h3>
    Certificados
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
        <h3 id="cabecalho"> Resposta: ${ContRespostas}</h3>
        <div id="divRespostas">
        <li>
        Nome Completo: ${fullname}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        E-mail: ${email}
        </li>
        <li>
        Phone ${phone}
        </li>
        <li>
        dobDay: ${dobDay}
        </li>
        <li>
        dobMonth: ${dobMonth}
        </li>
        <li>
        dobYear: ${dobYear}
        </li>
        <li>
        Age: ${age}
        </li>
        <li>
        Linkedin: ${linkedin}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        GitHub: ${github}
        </li>
        <li>
        GitHub: ${teamName}
        </li>
        <li>
        GitHub: ${institution}
        </li>
        <li>
        GitHub: ${graduation}
        </li>
        <h3>
        Certificados
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
        <h3 id="cabecalho"> Resposta: ${ContRespostas}</h3>
        <div id="divRespostas">
        <li>
        Nome Completo: ${fullname}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        E-mail: ${email}
        </li>
        <li>
        Phone ${phone}
        </li>
        <li>
        dobDay: ${dobDay}
        </li>
        <li>
        dobMonth: ${dobMonth}
        </li>
        <li>
        dobYear: ${dobYear}
        </li>
        <li>
        Age: ${age}
        </li>
        <li>
        Linkedin: ${linkedin}
        </li>
        <li>
        nick: ${nickname}
        </li>
        <li>
        GitHub: ${github}
        </li>
        <li>
        GitHub: ${teamName}
        </li>
        <li>
        GitHub: ${institution}
        </li>
        <li>
        GitHub: ${graduation}
        </li>
        <h3>
        Certificados
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

    var pai = document.querySelector('.form3');
    var elemento = document.createElement('div');
    elemento.innerHTML = StringRespostas;
    pai.appendChild(elemento);
}

btn.addEventListener("click",getVariables);

//
//unction salvarDadosNostorage(){
//   console.log('Função Salvar dados iniciada');
//   localStorage.setItem('respostas',JSON.stringify(respostas));
//
//
//unction renderizarRespostas(event){
//   event.preventDefault();
//   console.log('Função Rendeniza');
//   getVariables();
//
//
