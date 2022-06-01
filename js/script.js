var btnMore = document.querySelector('.more-btn');

var divCertificates = document.querySelector('.certificates');

var inputCertificates = document.querySelector('#certificates');

var certificados = 0;
var certificado1 = false;
var certificado2 = false;
var certificado3 = false;
var certificado4 = false;
var certificado5 = false;
var btnapaga1;

function criaBtn(){

}


function addCertificate(event) {

event.preventDefault();

    if(certificados<5){
        let div = document.createElement('div');
        if(certificado1 == false){

            div.innerHTML = `
            <div class="form-group cert">
            <input type="text" placeholder="${inputCertificates.value}" id="certificado1" disabled>
            <a id="delete1" class="delete"><i class="fas fa-trash"></i></a>
            <a id="edit" class="edit"><i class="fas fa-pencil-alt"></i></a>
            </div>
                            `;
                            certificado1 = true;
                            criaBtn('#delete1');
        }else if(certificado2 == false){

            div.innerHTML = `
            <div class="form-group cert">
            <input type="text" placeholder="${inputCertificates.value}" id="certificado2" disabled>
            <a id="delete" class="delete"><i class="fas fa-trash"></i></a>
            <a id="edit" class="edit"><i class="fas fa-pencil-alt"></i></a>
            </div>
                            `;
                            certificado2 = true; 
        }else if(certificado3 == false){
            
            div.innerHTML = `
            <div class="form-group cert">
            <input type="text" placeholder="${inputCertificates.value}" id="certificado3" disabled>
            <a id="delete" class="delete"><i class="fas fa-trash"></i></a>
            <a id="edit" class="edit"><i class="fas fa-pencil-alt"></i></a>
            </div>
                            `;
                            certificado3 = true; 
        }
        else if(certificado4 == false){
            
            div.innerHTML = `
            <div class="form-group cert">
            <input type="text" placeholder="${inputCertificates.value}" id="certificado4" disabled>
            <a id="delete" class="delete"><i class="fas fa-trash"></i></a>
            <a id="edit" class="edit"><i class="fas fa-pencil-alt"></i></a>
            </div>
                            `;
                            certificado4 = true; 
        }   
        else if(certificado5 == false){
            
            div.innerHTML = `
            <div class="form-group cert">
            <input type="text" placeholder="${inputCertificates.value}" id="certificado5" disabled>
            <a id="delete" class="delete"><i class="fas fa-trash"></i></a>
            <a id="edit" class="edit"><i class="fas fa-pencil-alt"></i></a>
            </div>
                            `;
                            certificado5 = true; 
        }
        

        const father = document.querySelector('.certificates');
        father.appendChild(div);
        certificados++;

    }else{
        alert("excedeu");
    }
}

function deleteCertificate(){
        alert('element');
};

btnMore.addEventListener('click',addCertificate);

