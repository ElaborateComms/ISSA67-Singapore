
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




const sponsorBtnCK = document.getElementById('sponsoredClick');

const sponsorAttendedBTN = document.getElementById("sponsorAttend");

const sponsorAttendCloseBTN = document.getElementById("sponsorAttendClosed");


sponsorBtnCK.addEventListener('click', () => {
    sponsorAttendedBTN.classList.add('show');
});


sponsorAttendCloseBTN.addEventListener('click', () => {
    sponsorAttendedBTN.classList.remove('show');
});



const MTCButtonCK = document.getElementById('MTCButton');

const MTCAttendBTN = document.getElementById("mtcAttend");

const mtcClose = document.getElementById("mtcAttendClosed");


MTCButtonCK.addEventListener('click', () => {
    MTCAttendBTN.classList.add('show');
});


mtcClose.addEventListener('click', () => {
    MTCAttendBTN.classList.remove('show');
});


