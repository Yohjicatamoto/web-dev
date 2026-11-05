/* ============================================================
   neptune.js — Wind speed comparison

   How it works:
   - Pick something from the dropdown.
   - Its bar width is set as a percentage of Neptune's top
     wind speed (2,000 km/h = 100%).
   - The text says how many times faster Neptune's winds are.
   ============================================================ */

const NEPTUNE_WIND = 2000;   // km/h, roughly its fastest winds

const things = {
  hurricane: { name: "A Category 5 hurricane", speed: 252 },
  car:       { name: "A car on the highway",   speed: 100 },
  sprinter:  { name: "Usain Bolt at top speed", speed: 44.7 },
  jet:       { name: "A passenger jet",         speed: 900 },
  sound:     { name: "The speed of sound (on Earth)", speed: 1235 }
};

const select = document.getElementById("wind-compare");
const compareBar = document.getElementById("compare-bar");
const compareLabel = document.getElementById("compare-label");
const summary = document.getElementById("wind-summary");

function updateComparison() {
  const thing = things[select.value];
  const percent = (thing.speed / NEPTUNE_WIND) * 100;
  const timesFaster = NEPTUNE_WIND / thing.speed;

  compareBar.style.width = percent + "%";
  compareLabel.textContent = thing.name + ": " + thing.speed.toLocaleString() + " km/h";

  // Round small numbers to 1 decimal place, big numbers to whole numbers
  const rounded = timesFaster < 10 ? timesFaster.toFixed(1) : Math.round(timesFaster);
  summary.textContent = "Neptune's winds are about " + rounded + "× faster.";
}

select.addEventListener("change", updateComparison);

updateComparison();
