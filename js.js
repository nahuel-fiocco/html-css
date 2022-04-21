//dark mode con local storage, no puedo hacer que se mantenga cuando refresco o cuando navego en los sitios ;(

function toggleDarkMode() {
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'false');
        document.body.classList.remove("dark-mode");
    } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem('dark-mode', 'true');
    }
}
if (localStorage.getItem('dark-mode') == 'true') {
    document.body.classList.add("dark-mode");
} else {
    document.body.classList.remove("dark-mode");
}