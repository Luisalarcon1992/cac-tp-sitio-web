let currentSlide = 0;
const slides = document.querySelectorAll('.slider-slide');

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function previousSlide() {
  showSlide(currentSlide - 1);
}

// Mostrar el primer slide al cargar la página
showSlide(0);

// Cambiar de slide automáticamente cada 3 segundos
setInterval(nextSlide, 3000);
