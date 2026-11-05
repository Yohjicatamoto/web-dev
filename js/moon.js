/* ============================================================
   moon.js — Moon phase viewer

   How it works:
   - The Moon is drawn as an SVG: a dark circle with a lit
     shape on top.
   - The lit shape is built from two arcs: the edge of the
     Moon on one side, and the "terminator" (the line between
     light and dark), which is half of an ellipse.
   - As the phase changes, the ellipse gets wider or thinner,
     and flips sides after the full moon.
   ============================================================ */

const phases = [
  { name: "New Moon",        day: 0,  text: "The sunlit side faces away from us, so the Moon is basically invisible." },
  { name: "Waxing Crescent", day: 4,  text: "A thin sliver shows up on the right, in the evening sky after sunset." },
  { name: "First Quarter",   day: 7,  text: "Half of the Moon is lit. It's called a quarter because it's a quarter of the way through its orbit." },
  { name: "Waxing Gibbous",  day: 11, text: "More than half lit and still growing ('waxing')." },
  { name: "Full Moon",       day: 15, text: "Earth is between the Sun and Moon, so we see the whole sunlit face." },
  { name: "Waning Gibbous",  day: 18, text: "Starting to shrink ('waning'). Now the dark part grows from the right." },
  { name: "Last Quarter",    day: 22, text: "Half lit again, but the left half this time. Rises around midnight." },
  { name: "Waning Crescent", day: 26, text: "One last sliver on the left, visible early in the morning before sunrise." }
];

const litPath = document.getElementById("moon-lit");
const phaseName = document.getElementById("phase-name");
const phaseDay = document.getElementById("phase-day");
const phaseText = document.getElementById("phase-text");
const prevBtn = document.getElementById("phase-prev");
const nextBtn = document.getElementById("phase-next");

const R = 100;   // radius of the Moon in the SVG
let current = 0;

// Builds the SVG path for the lit part.
// position: 0 = new moon, 0.25 = first quarter, 0.5 = full, 0.75 = last quarter
function litShape(position) {
  const k = Math.cos(2 * Math.PI * position);   // 1 at new moon, -1 at full moon
  const rx = Math.abs(k) * R;                   // width of the terminator ellipse
  const waxing = position < 0.5;

  const edgeSweep = waxing ? 1 : 0;             // lit edge on the right while waxing
  const termSweep = (waxing === (k > 0)) ? 0 : 1;

  return "M 0 " + (-R) +
    " A " + R + " " + R + " 0 0 " + edgeSweep + " 0 " + R +
    " A " + rx + " " + R + " 0 0 " + termSweep + " 0 " + (-R) + " Z";
}

function showPhase() {
  const phase = phases[current];
  litPath.setAttribute("d", litShape(current / phases.length));
  phaseName.textContent = phase.name;
  phaseDay.textContent = "Phase " + (current + 1) + " / 8 · about day " + phase.day + " of 29.5";
  phaseText.textContent = phase.text;
}

nextBtn.addEventListener("click", function () {
  current = (current + 1) % phases.length;
  showPhase();
});

prevBtn.addEventListener("click", function () {
  current = (current - 1 + phases.length) % phases.length;
  showPhase();
});

showPhase();
