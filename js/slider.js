const prevArrow = document.querySelector(".prev-arrow");
const nextArrow = document.querySelector(".next-arrow");
const slides = document.querySelectorAll(".slide");

let currentIndex = 0;
const intervalTime = 5000; // 5 seconds interval

function showSlide(index, isNext) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? "block" : "none";
    slide.style.animation = isNext ? "wipe-next 0.5s" : "wipe-prev 0.5s";
  });
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex, true);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex, false);
}

prevArrow.addEventListener("click", prevSlide);
nextArrow.addEventListener("click", nextSlide);

function startSlideshow() {
  // Show the initial slide with wipe animation (optional)
  showSlide(currentIndex, true);
  setInterval(nextSlide, intervalTime);
}

startSlideshow();
