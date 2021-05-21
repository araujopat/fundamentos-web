/*
Case sensitive = reconhece maiuscula e minuscula
por tag: getElementeByTagName()
por Id:getElementeById()
por Nome: getElementeByTagName()
por classe: getElementeByTagClassName()
por Seletor: querySelector()
*/

let nome = window.document.getElementById('nome')
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#iframe-mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txt = document.querySelector ('#txtNome')
    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome invalido'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Nome Valido'
        txtNome.style.color = 'green'
    }
}

function validaEmail() {
    let txtEmail = document.querySelector ('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf ('.') == -1) {
        txtEmail.innerHTML = 'E-mail invalido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail Valido'
        txtEmail.style.color = 'green'
    }
}
    
function validaAssunto() {
    
    let txtAssunto = document.querySelector('#txtAssunto')
    
    if (assunto.value.length >= 100) {
        
        txtAssunto.innerHTML = 'Texto é muito grande, digite no máximo 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        
        txtAssunto.style.display = 'none'
        assuntoOk = true        
    }
}
         
function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Formulário enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente antes de enviar...')
    }
}
    

function mapaZoomIn() {
    mapa.style.width = '1260px'
    mapa.style.height = '450px'
}

function mapaZoomOut() {
    mapa.style.width = '560px'
    mapa.style.height = '315px'
    
}