        // Get the modal element
        const modal = document.getElementById("myModal");

        // Get the <span> element that closes the modal
        const closeBtn = document.getElementById("closeBtn");

        window.onload = function() {
            modal.style.display = "block";
        }

        closeBtn.onclick = function() {
            modal.style.display = "none";
        }


        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        }

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


        const directionsBtn = document.getElementById('directionsButton');

        const directionsCtn = document.getElementById('directions');

        const directionsClo = document.getElementById('directionsClosed');

        directionsBtn.onclick = function() {
            directionsCtn.style.display = "block";
        }

        directionsClo.onclick = function() {
            directionsCtn.style.display = "none";
        }




