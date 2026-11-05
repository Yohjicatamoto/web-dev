/* ============================================================
   mars.js — "What would you weigh on Mars?" calculator

   How it works:
   - Mars's gravity is about 38% of Earth's.
   - Read the number from the input, multiply by 0.38, and
     show the answer. Works in pounds or kilograms.
   - If the input is empty or not a sensible number, show an
     error message instead.
   ============================================================ */

const MARS_GRAVITY = 0.38;

const form = document.getElementById("weight-form");
const weightInput = document.getElementById("earth-weight");
const unitSelect = document.getElementById("weight-unit");
const result = document.getElementById("weight-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();   // stop the page from reloading

  const earthWeight = parseFloat(weightInput.value);
  const unit = unitSelect.value;

  if (isNaN(earthWeight) || earthWeight <= 0 || earthWeight > 2000) {
    result.innerHTML = '<p class="error">Type in a weight between 1 and 2000.</p>';
    return;
  }

  const marsWeight = (earthWeight * MARS_GRAVITY).toFixed(1);

  result.innerHTML =
    "<p>On Mars you'd weigh</p>" +
    "<strong>" + marsWeight + " " + unit + "</strong>" +
    "<p>Same body, same mass. Mars just pulls on you less, so you could jump about 2.6× higher.</p>";
});
