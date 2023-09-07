document.querySelector(".bars__menu").addEventListener("click", animateBars);


var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");
var principal__marco1= document.querySelector(".principal__marco1");
const fondoOscuro = document.querySelector(".principal__marco2");

function animateBars() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    principal__marco1.classList.toggle("principal__marco1-active"); /*descomentar para activar el menu desplegable */
}

// Agregar un event listener para el clic en el documento
document.addEventListener("click", function(event) {
    // Obtener el elemento que se hizo clic
    const target = event.target;

    // Obtener el menú desplegable y el botón de menú
    const principal__marco1 = document.querySelector(".principal__marco1");
    const bars__menu = document.querySelector(".bars__menu");

    // Verificar si se hizo clic en el botón de menú
    const isInsideMenu = bars__menu.contains(target);

    // Verificar si el menú desplegable está abierto
    const isMenuOpen = principal__marco1.classList.contains("principal__marco1-active");

    // Cerrar el menú si se hizo clic fuera del menú y el menú está abierto
    if (!isInsideMenu && isMenuOpen) {
        animateBars(); // Llama a tu función para cerrar el menú
    }
});
