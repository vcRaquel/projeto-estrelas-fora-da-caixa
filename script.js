let personagens = []
let ids = [];
const numeroMaximoDePersonagens = 671;
let container = document.getElementById('container');


buscarPersonagens();

//Parte view do projeto ==========================================================================

function criandoCard(imagem, nome) {
    return `<div class="card">
        <h3>${nome}</h3>
        <img src="${imagem}" alt="Imagem do personagem ${nome}">
        </div>`
}

function criandoCards() {
    let cards = '';
    personagens.forEach(element => {
        cards = cards + criandoCard(element.image, element.name)
    })
    return cards;
}

function inserirCards() {
    container.innerHTML = criandoCards();
}

//Parte controller do projeto =====================================================================

function gerarIds() {
    ids = [];  
    count = 4
    while(count > 0) {
        let id = Math.floor (Math.random() * numeroMaximoDePersonagens);
        if(ids.length == 0 || ids.indexOf(id) == -1) {
           ids.push(id)
           count--
        }       
    }
}

function buscarPersonagens() {   
    gerarIds();
    return fetch (`https://rickandmortyapi.com/api/character/${ids.join(',')}`,{
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
        })
        .then((response) => response.json())
        .then((data) => {
            personagens = data;
            inserirCards();
        });
    }    
