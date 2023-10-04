const fullImg = document.getElementById("fullImg");
const carrusel = document.getElementById("carrusel");

function openFullImg(reference) {
    fullImg.src = reference;
}

const images = [
    "0001.jpg", "0002.jpg", "0003.jpg", "0004.jpg", "0005.jpg", "0006.jpg", "0007.jpg",
    "0009.jpg", "0010.jpg", "0011.jpg", "0012.jpg", "0013.jpg", "0014.jpg", "0016.jpg",
    "0017.jpg", "0018.jpg", "0019.jpg", "0020.jpg", "0021.jpg", "0022.jpg", "0024.jpg",
    "0025.jpg", "0026.jpg", "0027.jpg", "0028.jpg", "0030.jpg", "0031.jpg", "0034.jpg",
    "0035.jpg", "0037.jpg", "0039.jpg", "0040.jpg", "0042.jpg", "0043.jpg", "0044.jpg",
    "0045.jpg", "0046.jpg", "0047.jpg", "0048.jpg", "0049.jpg", "0050.jpg", "0051.jpg",
    "0052.jpg", "0053.jpg", "0054.jpg", "0055.jpg", "0056.jpg", "0057.jpg", "0058.jpg" /* ... list all image filenames ... */
];

images.forEach(image => {
    const imgElement = document.createElement("img");
    imgElement.src = `img/galeria/${image}`;
    imgElement.alt = `Imagen ${image.split('.')[0]}`;
    imgElement.onclick = function() {
        openFullImg(imgElement.src);
    };
    carrusel.appendChild(imgElement);
});
