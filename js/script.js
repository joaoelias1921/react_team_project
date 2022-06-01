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
                if(dados.length == 0){
                    grupo.innerHTML = '';
                }
            }

            btn2.onclick = function(event){
                event.preventDefault();
                concluirProposta(i);
                if(dados.length == 0){
                    grupo.innerHTML = '';
                }
            }
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