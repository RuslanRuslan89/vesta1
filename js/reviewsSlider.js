// reviewsSlider.js
let currentReview = 0;
const slides = document.querySelectorAll('.review-card');
const totalSlides = slides.length;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentReview = (currentReview + 1) % totalSlides;
    showSlide(currentReview);
}

setInterval(nextSlide, 5000); // автоматическая смена через 5 секунд
showSlide(currentReview);
