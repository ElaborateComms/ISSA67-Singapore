
let slideContainer = document.querySelector(".imageCarousel");
let bckBTN = document.getElementById("bckbtn");
let FDBTN = document.getElementById("fdbtn");

FDBTN.addEventListener("click", () => {
    slideContainer.style.scrollBehavior = "smooth";
    slideContainer.scrollLeft -= 1100;
});

bckBTN.addEventListener("click", () => {
    slideContainer.style.scrollBehavior = "smooth";
    slideContainer.scrollLeft += 1100;
});


const directionsButtons = document.getElementById('directionsButton');

const directionsModal = document.getElementById("directions");

const directionsClose = document.getElementById("directionsClosed");


directionsButtons.addEventListener('click', () => {
    directions.classList.add('show');
});


directionsClose.addEventListener('click', () => {
    directions.classList.remove('show');
});

