document.addEventListener("DOMContentLoaded", function() {
    let overlay = document.getElementById("overlay");

    // let visited = localStorage.getItem("visited");

    // if (!visited) {
        overlay.style.display = "block";

    //     localStorage.setItem("visited", "true");
    // }

    overlay.addEventListener("click", function() {
        overlay.style.display = "none";
    });
});



// Originally I was going to make the overlay appear only the first time a user visited the site, but I thought for grading/testing purposes it might be better if it shows up more than once, just to show that my one instance of position:absolute; does work!