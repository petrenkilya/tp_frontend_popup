'use strict'
let button = document.getElementById('button_popup_open');
let root = document.querySelector('.root');

//Первый способ - остановка всплытия eventа
root.addEventListener('click', (ev)=>{
    let popupDiv = root.querySelector('.popup')
    if(popupDiv){
        root.removeChild(popupDiv)
    }
})

button.addEventListener('click', (e) =>{
    if(root.querySelector('.popup')){
        e.stopPropagation()
        return
    }
    let elem = document.createElement('div');
    elem.classList.add("popup");
    elem.innerHTML = "<div>Test data in popup</div>";
    elem.innerHTML += '<button>Кнопочка</button>'
    root.appendChild(elem);
    elem.addEventListener('click', (ev)=>{
        ev.stopPropagation()
    })
    e.stopPropagation()
})

// //Второй способ - проверка event.target на родительском div
// root.addEventListener('click', (ev)=>{
//     const popupDiv = root.querySelector('.popup')
//     if(popupDiv && ev.target.closest(".popup") !== popupDiv){
//         root.removeChild(popupDiv)
//     }
//
// })
//
// button.addEventListener('click', (e) =>{
//     let elem = document.createElement('div');
//     elem.classList.add("popup");
//     elem.innerHTML = "<div>Test data in popup</div>";
//     elem.innerHTML += '<button>Кнопочка</button>'
//     root.appendChild(elem);
//     e.stopPropagation()
// })