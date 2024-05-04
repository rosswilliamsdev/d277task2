let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.querySelectorAll('.carousel_image');
    if (index < 0) {
        slideIndex = slides.length - 1;
    }
    if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex].style.display = "block";
}

function nextSlide() {
    showSlide(++slideIndex);
}

function prevSlide() {
    showSlide(--slideIndex);
}
