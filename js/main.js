import {data} from './data.js';

const buttons = document.querySelectorAll('#botones button');
const input = document.querySelector('.contenedor-input input')
const cardsContent = document.querySelector('#contenedor-cards');

// Modal
const modal = document.getElementById('modal');
const imgModal = document.getElementById('img-modal');
const closeBtn = document.getElementById('close');


// load cards
window.addEventListener('load', () =>  {

    const randomData = data.sort(()=>{
        return Math.random() - 0.5;
    });
    
    const createCards = (randomData) => {

        let cardHtml = '';
        randomData.forEach(card => {
            cardHtml += 
            `
                <div class="card" data-categoria="${card.category}" data-nombre="${card.name}">
                    <div class="card__info">
                        <img src="${card.img}" alt="${card.name}">
                        <h6>${card.name}</h6>
                        <div class="rating">
                            <i class="fas fa-star" aria-hidden="true"></i>
                            <i class="fas fa-star" aria-hidden="true"></i>
                            <i class="fas fa-star" aria-hidden="true"></i>
                            <i class="fas fa-star" aria-hidden="true"></i>
                            <i class="far fa-star" aria-hidden="true"></i>
                            <span>${card.rating}</span>
                        </div>
                        <div class="info">
                            <p>${card.description}</p>
                        </div>
                    </div>
                </div>
            `
        });
        return cardHtml;
    };

    cardsContent.innerHTML = createCards(randomData);
})

// Filters

const combinedFilters = (e) =>{
    if(e.type === "click"){
        document.querySelector('#botones .active').classList.remove('active')
        e.target.classList.add('active')
    }
    
    const cards = document.querySelectorAll('.card');
    const inputValue = input.value.toLowerCase() || '';
    const filtro = document.querySelector('#botones .active').dataset.filtro;

    cards.forEach(card => {

    const matchChategory = card.dataset.categoria === filtro || filtro === "todo";
    const matchInput = card.dataset.nombre.toLowerCase().includes(inputValue);

    
        if(matchChategory && matchInput){
            card.classList.remove('hide')
        }else{
            card.classList.add('hide')
        }
    })
}

// Modal funtion

const openModal = (e) =>{
    const card = e.target.closest('.card');
    if(!card) return;

    const img = card.querySelector('img');


    imgModal.src = img.src;
    modal.style.display = 'block';

};

const closeModal = () => modal.style.display = 'none';


// EVENTS
buttons.forEach(btn =>{
    btn.addEventListener('click', combinedFilters);
});

input.addEventListener('keyup', combinedFilters)

cardsContent.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);




// const filtroCategorias = (e) => {
//     document.querySelector('#botones .active').classList.remove('active')
//     e.target.classList.add('active')
    
//     cards.forEach(card =>{
//         // console.log('Card', card)
//         if(card.dataset.categoria === e.target.dataset.filtro || e.target.dataset.filtro == 'todo'){
//             console.log('Tarjeta: ', card.dataset.categoria)
//             card.classList.remove('hide')
//         }else{
//             card.classList.add('hide')
//         }
//     });
// };


// const filtroTexto = (e) =>{
//     const inputValue = e.target.value.toLowerCase() || '';

//     cards.forEach(card => {
//         if(card.dataset.nombre.toLowerCase().includes(inputValue)){
//             card.classList.remove('hide')
//         }else{
//             card.classList.add('hide')
//         }
//     })


// };