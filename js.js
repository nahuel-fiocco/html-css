//dark mode con local storage, no puedo hacer que se mantenga cuando refresco o cuando navego en los sitios ;(

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function(tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})