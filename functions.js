
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

function myFunction(x) {
    FDBTN.addEventListener("click", () => {
        slideContainer.style.scrollBehavior = "smooth";
        slideContainer.scrollLeft -= 450;
    });
    
    bckBTN.addEventListener("click", () => {
        slideContainer.style.scrollBehavior = "smooth";
        slideContainer.scrollLeft += 450;
    });
  }
  
  // Create a MediaQueryList object
  let x = window.matchMedia("(max-width: 700px)")
  
  // Call listener function at run time
  myFunction(x);
  
  // Attach listener function on state changes
  x.addEventListener("change", function() {
    myFunction(x);
  });
