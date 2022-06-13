var btnMore = $('.more-btn');

var divCertificates = $('.certificates');

var input1 = $('#certificates');

var dados = JSON.parse(localStorage.getItem('dados')) || [];
renderizarPropostas();

var favorite;

var btnHeart = document.getElementById('inpHeart');

btnHeart.onclick = function(event){
    event.preventDefault();
    
    if(btnHeart.name == "none"){
        favorite = true;
        btnHeart.name = "yes";
        btnHeart.setAttribute("class","fas fa-heart");
        btnHeart.style.color = "#074EE8";
    }else{
        btnHeart.style.color = "black";
        favorite = false;
        btnHeart.name = "none";
        btnHeart.setAttribute("class","far fa-heart");
    }
}

function resetaCoracao(){
    let btnHeart = document.getElementById('inpHeart');
    btnHeart.style.color = "black";
    favorite = false;
    btnHeart.name = "none";
    btnHeart.setAttribute("class","far fa-heart");
}

function mostraErro(){
    document.getElementById('certificates').style.border = "1px solid red";
    document.getElementById('inpHeart').style.border = "1px solid red";
    document.getElementById('certificates').style.borderRight = "0px";
    document.getElementById('inpHeart').style.borderLeft = "0px";
}

function removeErro(){
    document.getElementById('certificates').style.border = "2px solid rgb(182, 180, 180)";
    document.getElementById('inpHeart').style.border = "2px solid rgb(182, 180, 180)";
    document.getElementById('certificates').style.borderRight = "0px";
    document.getElementById('inpHeart').style.borderLeft = "0px";
        
}

function renderizarPropostas(){
    resetaCoracao();
    limpaTela();
    for(let i = 0; i < dados.length; i++){
        const father = $('.certificates');
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
                salvarDadosNostorage();
                renderizarPropostas();
            }else{
                dados[i].fav = false;
                salvarDadosNostorage();
                renderizarPropostas();
            }

        };


        btn1.onclick = function(event){
            event.preventDefault();
            deletarProposta(i);
            recolocaInput();
            renderizarPropostas();
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
        }
    }

    if(dados.length == 5){
        removeInput();
    }
}

btnMore.onclick = function(event){
    event.preventDefault();

    if(input1.value != ""){
        let proposta1 = input1.value;

        if(favorite == true){
            dados.push({propostas: proposta1, indice: dados.length, fav: true});
        }else{
            dados.push({propostas: proposta1, indice: dados.length, fav: false});
        }

        renderizarPropostas(this);
        input1.value = '';
        salvarDadosNostorage();
        document.getElementById('certificates').style.border = null;
        removeErro();
    }else{
        mostraErro();
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
    const father = $('.certificates');
    father.innerHTML = '';
}

function removeInput(){
    let btnMore = $('.more-btn');
    let inputCert = $('#certificates');
    let coracao = $('input');
    btnMore.setAttribute("class","ocult");
    inputCert.setAttribute("class","ocult");
    document.getElementById("input").style.display = "none";
}

function recolocaInput(){
    let inputCert = $('#certificates');
    inputCert.removeAttribute("class");
    btnMore.setAttribute("class","more-btn");
    document.getElementById("input").style.display = "flex";
}

//MODAL

// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
var btn5 = document.getElementById("finish");
btn5.onclick = function() {
    //form validation
    if(!validateCertificatesForm()) {
        return;
    }else{
        modal.style.display = "block";
    }    
}

span.onclick = function() {
    modal.style.display = "none";
    $(".top-content").style.display = "none";
    $(".form-container").style.display = "none";
    $(".list-page").style.display = "flex";
    getCardData();
    let allCards = document.querySelector(".cards-container").innerHTML;
    localStorage.setItem("allCards", allCards);
    cardsContainer.innerHTML = localStorage.getItem("allCards");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    window.location.href = "list.html";
  }
}

function sub(event){
    event.preventDefault();
    modal.style.display = "block";
    setTimeout(function(){
        window.location.href = "list.html";
    }, 10000);
}