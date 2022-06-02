var btnMore = document.querySelector('.more-btn');

var divCertificates = document.querySelector('.certificates');

var input1 = document.querySelector('#certificates');

let dados = JSON.parse(localStorage.getItem('dados')) || [];
renderizarPropostas();

function renderizarPropostas(){
    var local = document.querySelector('#error-alert');
        local.setAttribute("class","ocult");
    limpaTela();
    for(let i = 0; i < dados.length; i++){
        const father = document.querySelector('.certificates');
            let div = document.createElement('div');
            let btn1 = document.createElement('button');
            let btn2 = document.createElement('button');
            let btn3 = document.createElement('a');
            let campo = document.createElement('input');

            var icone1 = document.createElement('a');
            var icone2 = document.createElement('a');
            var icone3 = document.createElement('a');
            icone1.setAttribute("class","fas fa-trash");
            icone2.setAttribute("class","fas fa-pencil-alt");
            

                if(dados[i].fav != true){
                    btn3.setAttribute("id","heart");
                    icone3.setAttribute("class","far fa-heart");
                }else{
                    div.setAttribute('id','row');
                    btn3.setAttribute("id","heart-selected");
                    var coracao = btn3.children[0];
                    console.log(coracao);
                    icone3.setAttribute("class","fas fa-heart");
                }
            
            
            btn1.appendChild(icone1);
            btn2.appendChild(icone2);
            btn3.appendChild(icone3);
        

            div.setAttribute('class','form-group cert');
            btn1.setAttribute('class','delete');
            btn2.setAttribute('class','edit');
            campo.setAttribute('placeholder',`${dados[i].propostas}`);
            campo.setAttribute("disabled", "disabled");

                div.appendChild(btn3);
                div.appendChild(campo)
                div.appendChild(btn1);
                div.appendChild(btn2);
                father.appendChild(div);



                btn3.onclick = function(){
                    if(btn3.id == "heart"){

                        dados[i].fav = true;
                        console.log(dados);
                        salvarDadosNostorage();
                        renderizarPropostas();
                    }else{
                        dados[i].fav = false;
                        console.log(dados);
                        salvarDadosNostorage();
                        renderizarPropostas();
                    }

                };


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

        var expression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;
        var teste = expression.test(input1.value);
        console.log(teste);

        if(teste == true){
            let proposta1 = input1.value;
            dados.push({propostas: proposta1, indice: dados.length, fav: false});
            renderizarPropostas(this);
            input1.value = '';
            salvarDadosNostorage();
            document.getElementById('certificates').style.border = null;
        }else{
            var local = document.querySelector('#error-alert');
            document.getElementById('certificates').style.border = "1px solid red";
        }

        
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


function limpaTela(){
    const father = document.querySelector('.certificates');
    father.innerHTML = '';
}

function removeInput(){
    let btnMore = document.querySelector('.more-btn');
    let inputCert = document.querySelector('#certificates');
    btnMore.setAttribute("class","ocult");
    inputCert.setAttribute("class","ocult");
}
function recolocaInput(){
    let inputCert = document.querySelector('#certificates');
    inputCert.removeAttribute("class");
    btnMore.setAttribute("class","more-btn");
}
