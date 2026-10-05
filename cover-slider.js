/* SME Premium Cover Slider */
document.addEventListener("DOMContentLoaded", function () {
  const slider = document.querySelector(".sme-cover-slider");
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll(".sme-slide"));
  const dots = Array.from(slider.querySelectorAll(".sme-slider-dots button"));
  const next = slider.querySelector(".sme-next");
  const prev = slider.querySelector(".sme-prev");
  const delay = 6000;

  let current = 0;
  let timer;

  function showSlide(index) {
    current = (index + slides.length) % slides.length;

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === current);
    });

    dots.forEach((dot, i) => {
      dot.classList.toggle("active", i === current);
    });

    slider.classList.remove("is-playing");
    void slider.offsetWidth;
    slider.classList.add("is-playing");
  }

  function start() {
    clearInterval(timer);
    timer = setInterval(() => {
      showSlide(current + 1);
    }, delay);
  }

  next.addEventListener("click", () => {
    showSlide(current + 1);
    start();
  });

  prev.addEventListener("click", () => {
    showSlide(current - 1);
    start();
  });

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      start();
    });
  });

  slider.addEventListener("mouseenter", () => clearInterval(timer));
  slider.addEventListener("mouseleave", start);

  showSlide(0);
  start();
});
