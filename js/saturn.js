/* ============================================================
   saturn.js — Photo slideshow

   How it works:
   - All the slides are in the HTML. Only one is visible; the
     rest have the hidden attribute.
   - Previous / Next change which slide number is shown, and
     loop around at the ends.
   - The left and right arrow keys work too.
   ============================================================ */

const slides = document.querySelectorAll(".slide");
const prevBtn = document.getElementById("slide-prev");
const nextBtn = document.getElementById("slide-next");
const counter = document.getElementById("slide-count");

let current = 0;

function showSlide() {
  slides.forEach(function (slide, i) {
    slide.hidden = i !== current;
  });
  counter.textContent = String(current + 1).padStart(2, "0") + " / " +
    String(slides.length).padStart(2, "0");
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide();
}

function prevSlide() {
  current = (current - 1 + slides.length) % slides.length;
  showSlide();
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

document.addEventListener("keydown", function (event) {
  // Don't steal arrow keys from form fields
  if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
    return;
  }
  if (event.key === "ArrowRight") {
    nextSlide();
  } else if (event.key === "ArrowLeft") {
    prevSlide();
  }
});

showSlide();
