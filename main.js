// dark mode con local storage

const btnSwitch = document.querySelector('#switch'); // linkeo el boton con su id

btnSwitch.addEventListener('click', () => { // cuando presiono el switch
    document.body.classList.toggle('dark-mode'); // agrega o quita la clase dark-mode al body
    btnSwitch.classList.toggle('active'); // y agrego o quito la clase active al switch
    if (document.body.classList.contains('dark-mode')) { // si el body contiene la clase dark-mode
        localStorage.setItem('darky', 'true'); // localstorage guarda en string darky el valor true
    } else { // si no
        localStorage.setItem('darky', 'false'); // localstorage guarda en string darky el valor false
    }
});
if (localStorage.getItem('darky') === 'true') { //  si darky es true
    document.body.classList.add('dark-mode'); // pone el body oscuro
    btnSwitch.classList.add('active'); // y el switch activo
} else { // si no
    document.body.classList.remove('dark-mode'); //pone el body claro
    btnSwitch.classList.remove('active'); // y el switch inactivo
}

// tooltip cuando hago hover en algunos iconos

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})