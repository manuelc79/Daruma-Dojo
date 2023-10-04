const carrusel = document.getElementById("carrusel");

let isDown = false;
let startX;
let scrollLeft;

carrusel.addEventListener("mousedown", (e) => {
    isDown = true;
    startX = e.pageX - carrusel.offsetLeft;
    scrollLeft = carrusel.scrollLeft;
});

carrusel.addEventListener("mouseup", () => {
    isDown = false;
});

carrusel.addEventListener("mouseleave", () => {
    isDown = false;
});

carrusel.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - carrusel.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scroll speed
    carrusel.scrollLeft = scrollLeft - walk;
});
