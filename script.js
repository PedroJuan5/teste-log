const carousel = document.querySelector(".carousel");
const items = document.querySelectorAll(".carousel-item");
let currentIndex = 0;

const updateCarousel = () => {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
};

const autoSlide = () => {
    currentIndex = (currentIndex + 1) % items.length; // Move para o próximo ou volta ao primeiro
    updateCarousel();
};

setInterval(autoSlide, 4000); // Altere o tempo (em milissegundos) entre as trocas de slide
