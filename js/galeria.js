const fullImgBox =document.getElementById("full-ImgBox"),
fullImg = document.getElementById("fullImg");

function openFullImg(reference) {
    fullImgBox.style.display="flex";
    fullImg.src = reference;
}

function closeImg() {
    fullImgBox.style.display ="none";
}

