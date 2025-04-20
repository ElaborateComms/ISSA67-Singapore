
let slideContainer = document.querySelector(".imageCarousel");
let bckBTN = document.getElementById("bckbtn");
let FDBTN = document.getElementById("fdbtn");

FDBTN.addEventListener("click", () => {
    slideContainer.style.scrollBehavior = "smooth";
    slideContainer.scrollLeft -= 900;
});

bckBTN.addEventListener("click", () => {
    slideContainer.style.scrollBehavior = "smooth";
    slideContainer.scrollLeft += 900;
});

