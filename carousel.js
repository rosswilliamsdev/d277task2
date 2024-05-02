let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  if (index >= slides.length) {
    slideIndex = 0;
  } else if (index < 0) {
    slideIndex = slides.length - 1;
  }
  
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  
  slides[slideIndex].style.display = 'block';
}

function nextSlide() {
  slideIndex++;
  showSlide(slideIndex);
}

function prevSlide() {
  slideIndex--;
  showSlide(slideIndex);
}


showSlide(slideIndex);
