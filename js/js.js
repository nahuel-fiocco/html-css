//dark mode
function toggleDarkMode() {
    document.getElementById("body").classList.toggle("dark-mode");
}
/*localStorage para tener darkMode en todos los sitios, no pude hacer que funcione jeje
if (document.body.classList.contains('dark-mode') {
        localStorage.setItem('dark-mode-boolean', 'true');
    } else {
        localStorage.setItem('dark-mode-boolean', 'false');
    }
    if (localStorage.getItem('dark-mode-boolean') === 'true') {
        document.body.classList.add(toggleDarkMode());
    } else {
        document.body.classList.remove(toggleDarkMode());
    }*/
//textarea auto sizing cuando tipeo, como una especie de overflow pero mas pro jeje
const growers = document.querySelectorAll(".grow-wrap");
growers.forEach((grower) => {
    const textarea = grower.querySelector("textarea");
    textarea.addEventListener("input", () => {
        grower.dataset.replicatedValue = textarea.value;
    });
});