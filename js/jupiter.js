/* ============================================================
   jupiter.js — Spinning Jupiter model

   How it works:
   - The planet is a circle with a wide striped strip inside it.
   - The strip is twice as wide as the circle and has the
     Great Red Spot drawn on it twice.
   - Moving the strip sideways looks like the planet turning.
     When it has moved halfway, it jumps back to the start,
     which you can't see because both halves look the same.
   - Start / Stop / Slower / Faster change "running" and "speed".
   ============================================================ */

const strip = document.getElementById("jupiter-strip");
const startBtn = document.getElementById("spin-start");
const stopBtn = document.getElementById("spin-stop");
const slowerBtn = document.getElementById("spin-slower");
const fasterBtn = document.getElementById("spin-faster");
const speedText = document.getElementById("spin-speed");

const speeds = [0.25, 0.5, 1, 2, 4];   // speed options (1 = normal)
let speedIndex = 2;
let offset = 0;                         // how far the strip has moved (%)
let running = false;
let lastTime = null;

function animate(time) {
  if (!running) {
    return;
  }
  if (lastTime !== null) {
    const seconds = (time - lastTime) / 1000;
    offset += 6 * speeds[speedIndex] * seconds;   // 6% per second at normal speed
    if (offset >= 50) {
      offset -= 50;   // jump back to the start (seamless)
    }
    strip.style.transform = "translateX(" + offset + "%)";
  }
  lastTime = time;
  requestAnimationFrame(animate);
}

function updateButtons() {
  startBtn.disabled = running;
  stopBtn.disabled = !running;
  slowerBtn.disabled = speedIndex === 0;
  fasterBtn.disabled = speedIndex === speeds.length - 1;
  speedText.textContent = "Speed: " + speeds[speedIndex] + "×" + (running ? "" : " (stopped)");
}

startBtn.addEventListener("click", function () {
  running = true;
  lastTime = null;
  updateButtons();
  requestAnimationFrame(animate);
});

stopBtn.addEventListener("click", function () {
  running = false;
  updateButtons();
});

slowerBtn.addEventListener("click", function () {
  speedIndex--;
  updateButtons();
});

fasterBtn.addEventListener("click", function () {
  speedIndex++;
  updateButtons();
});

updateButtons();
