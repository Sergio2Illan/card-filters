const buttons = document.querySelectorAll('#botones button');
const cards = document.querySelectorAll('.card');
const input = document.querySelector('.contenedor-input input')


const combinedFilters = (e) =>{
    if(e.type === "click"){
        document.querySelector('#botones .active').classList.remove('active')
        e.target.classList.add('active')
    }
    
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


// EVENTS
buttons.forEach(btn =>{
    btn.addEventListener('click', combinedFilters);
});

input.addEventListener('keyup', combinedFilters)


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