// Inicializar AOS
document.addEventListener("DOMContentLoaded", () => {
  AOS.init({
    duration: 600,
    once: true
  });
});

// Footer dinámico
document.getElementById("year").textContent = new Date().getFullYear();

// Formulario mensaje de éxito
const form = document.getElementById("songForm");
const success = document.getElementById("successMessage");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  success.classList.remove("hidden");
  form.reset();
});

// Carrusel Autoplay Optimizado
const carrusel = document.getElementById("autoresCarousel");
const next = document.getElementById("nextBtn");
const prev = document.getElementById("prevBtn");

let autoplay = true;

function runAutoplay() {
  if (!autoplay) return;
  carrusel.scrollBy({ left: 260, behavior: "smooth" });
}

setInterval(runAutoplay, 3200);

carrusel.addEventListener("mouseenter", () => autoplay = false);
carrusel.addEventListener("mouseleave", () => autoplay = true);

next.onclick = () => carrusel.scrollBy({ left: 260, behavior: "smooth" });
prev.onclick = () => carrusel.scrollBy({ left: -260, behavior: "smooth" });