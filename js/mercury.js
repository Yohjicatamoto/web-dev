/* ============================================================
   mercury.js — Day side / night side switch

   How it works:
   - One button flips between two sets of data (day and night).
   - The readout text changes, and a "night" class is added to
     <body>, which flips the whole page to dark colors in
     mercury.css.
   ============================================================ */

const sides = {
  day: {
    label: "Sunlit side",
    celsius: "430 °C",
    detail: "806 °F. Hot enough to melt lead.",
    button: "Switch to night side"
  },
  night: {
    label: "Night side",
    celsius: "−180 °C",
    detail: "−292 °F. Colder than anywhere on Earth.",
    button: "Switch to day side"
  }
};

const toggleBtn = document.getElementById("side-toggle");
const sideLabel = document.getElementById("side-label");
const sideTemp = document.getElementById("side-temp");
const sideDetail = document.getElementById("side-detail");

let isNight = false;

function showSide() {
  const side = isNight ? sides.night : sides.day;
  sideLabel.textContent = side.label;
  sideTemp.textContent = side.celsius;
  sideDetail.textContent = side.detail;
  toggleBtn.textContent = side.button;
  toggleBtn.setAttribute("aria-pressed", isNight);
  document.body.classList.toggle("night", isNight);
}

toggleBtn.addEventListener("click", function () {
  isNight = !isNight;
  showSide();
});

showSide();
