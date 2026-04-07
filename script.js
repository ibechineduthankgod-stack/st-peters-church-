document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href")).scrollIntoView({

behavior: "smooth"

});

});

});


const images = document.querySelectorAll(".gallery img");

const popup = document.getElementById("image-popup");

const popupImg = document.getElementById("popup-img");

const closeBtn = document.getElementById("close-popup");

images.forEach(img => {

img.addEventListener("click", () => {

popup.style.display="flex";

popupImg.src = img.src;

});

});

if(closeBtn){

closeBtn.onclick = () => {

popup.style.display="none";

};

}
