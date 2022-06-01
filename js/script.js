var btnMore = document.querySelector('.more-btn');

var divCertificates = document.querySelector('.certificates');

var input1 = document.querySelector('#certificates');

let dados = JSON.parse(localStorage.getItem('dados')) || [];
renderizarPropostas();

function renderizarPropostas(){
    limpaTela();
    for(let i = 0; i < dados.length; i++){
        const father = document.querySelector('.certificates');
            let div = document.createElement('div');
            let btn1 = document.createElement('button');
            let btn2 = document.createElement('button');
            let campo = document.createElement('input');

            var icone1 = document.createElement('a');
            var icone2 = document.createElement('a');
            icone1.setAttribute("class","fas fa-trash");
            icone2.setAttribute("class","fas fa-pencil-alt");
            btn1.appendChild(icone1);
            btn2.appendChild(icone2);


            div.setAttribute('class','form-group cert');
            btn1.setAttribute('class','delete');
            btn2.setAttribute('class','edit');
            campo.setAttribute('placeholder',`${dados[i].propostas}`);
            campo.setAttribute("disabled", "disabled");
                div.appendChild(campo)
                div.appendChild(btn1);
                div.appendChild(btn2);
                father.appendChild(div);


            btn1.onclick = function(event){
                event.preventDefault();
                deletarProposta(i);
                recolocaInput();
                renderizarPropostas();
                if(dados.length == 0){
                    grupo.innerHTML = '';
                }
            }

            btn2.onclick = function(event){
                event.preventDefault();
                campo.removeAttribute("disabled");
                campo.value = dados[i].propostas;
                btn2.setAttribute("class","edit2");
                btn2.firstChild.setAttribute("class","fas fa-check editing");
                    btn2.onclick = (event)=>{
                        event.preventDefault();
                        dados[i].propostas = campo.value;
                        salvarDadosNostorage();
                        renderizarPropostas();
                    }
                if(dados.length == 0){
                    grupo.innerHTML = '';
                }
            }
    }
    if(dados.length == 5){
        removeInput();
    }
}

    btnMore.onclick = function(event){
        event.preventDefault();
        let proposta1 = input1.value;
            dados.push({propostas: proposta1, indice: dados.length});
            renderizarPropostas(this);
            input1.value = '';
            salvarDadosNostorage();
    }

    function concluirProposta(indice){
        historico.push(dados[indice]);
        dados.splice(indice, 1);
        renderizarPropostas();
        salvarDadosNostorage();
    }

function deletarProposta(indice){
    dados.splice(indice, 1);
    renderizarPropostas();
    salvarDadosNostorage();
}

function salvarDadosNostorage(){
    localStorage.setItem('dados',JSON.stringify(dados));
}

function deleteCertificate(){
        alert('element');
};

function limpaTela(){
    const father = document.querySelector('.certificates');
    father.innerHTML = '';
}

function removeInput(){
    let btnMore = document.querySelector('.more-btn');
    let inputCert = document.querySelector('#form1');
    btnMore.setAttribute("class","ocult");
    inputCert.setAttribute("class","ocult");
}
function recolocaInput(){
    let inputCert = document.querySelector('#form1');
    inputCert.setAttribute("class","form-group");
    btnMore.setAttribute("class","more-btn");
}

