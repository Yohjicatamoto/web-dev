/* ============================================================
   sun.js — Fun fact pop-up (modal)

   How it works:
   - The pop-up is already in the HTML, just hidden.
   - "Open a fun fact" removes the hidden attribute to show it.
   - "Next fact" swaps in the next fact from the array.
   - Close button, clicking the dark background, or pressing
     Escape all hide it again.
   ============================================================ */

const funFacts = [
  "About 1.3 million Earths could fit inside the Sun.",
  "The Sun's outer atmosphere, the corona, is way hotter than its surface: over 1 million °C. Scientists still aren't totally sure why.",
  "The Sun isn't solid, so different parts spin at different speeds. The equator takes about 25 days to go around, the poles take about 35.",
  "Energy made in the core can take over 100,000 years to work its way out to the surface. Then it reaches Earth in about 8 minutes.",
  "The northern and southern lights happen when particles from the Sun (the solar wind) hit Earth's magnetic field and atmosphere.",
  "In about 5 billion years the Sun will run low on hydrogen and swell up into a red giant."
];

const openBtn = document.getElementById("open-fact");
const backdrop = document.getElementById("fact-modal");
const closeBtn = document.getElementById("close-fact");
const nextBtn = document.getElementById("next-fact");
const factText = document.getElementById("fact-text");
const factCount = document.getElementById("fact-count");

let current = 0;

// Show the fact at position "current" and update the counter (e.g. 03 / 06)
function showFact() {
  factText.textContent = funFacts[current];
  factCount.textContent = String(current + 1).padStart(2, "0") + " / " +
    String(funFacts.length).padStart(2, "0");
}

function openModal() {
  current = Math.floor(Math.random() * funFacts.length);   // start on a random fact
  showFact();
  backdrop.hidden = false;
  closeBtn.focus();
}

function closeModal() {
  backdrop.hidden = true;
  openBtn.focus();   // put keyboard focus back where it was
}

openBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);

nextBtn.addEventListener("click", function () {
  current = (current + 1) % funFacts.length;   // loop back to the first fact
  showFact();
});

// Clicking the dark area outside the box closes it
backdrop.addEventListener("click", function (event) {
  if (event.target === backdrop) {
    closeModal();
  }
});

// Escape key closes it too
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !backdrop.hidden) {
    closeModal();
  }
});
