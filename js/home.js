/* ============================================================
   home.js — Orbit model with Start / Stop buttons

   How it works:
   - Each planet is a dot sitting on a circle (its orbit).
   - Every animation frame, each planet's angle grows a bit.
   - Math.cos / Math.sin turn the angle into an x / y position.
   - Planets with longer years get smaller speeds, so Mercury
     zips around and Neptune barely crawls.
   ============================================================ */

// radius = size of the orbit (% of the box), period = years to orbit the Sun
const planets = [
  { name: "Mercury", page: "mercury.html", color: "#8A8A8A", radius: 9,  size: 6,  period: 0.24 },
  { name: "Venus",   page: "venus.html",   color: "#E3B94F", radius: 14, size: 9,  period: 0.62 },
  { name: "Earth",   page: "earth.html",   color: "#1F5FBF", radius: 19, size: 9,  period: 1 },
  { name: "Mars",    page: "mars.html",    color: "#B3401E", radius: 24, size: 7,  period: 1.88 },
  { name: "Jupiter", page: "jupiter.html", color: "#C97B3D", radius: 30, size: 18, period: 11.9 },
  { name: "Saturn",  page: "saturn.html",  color: "#C9A227", radius: 36, size: 15, period: 29.4 },
  { name: "Uranus",  page: "uranus.html",  color: "#3FB8C4", radius: 42, size: 12, period: 84 },
  { name: "Neptune", page: "neptune.html", color: "#2B4BC9", radius: 48, size: 12, period: 165 }
];

const orbitBox = document.getElementById("orbit");
const startBtn = document.getElementById("orbit-start");
const stopBtn = document.getElementById("orbit-stop");
const statusText = document.getElementById("orbit-status");

const BASE_SPEED = 0.8;   // radians per second for a planet with a 1-year orbit
let running = false;
let lastTime = null;

// Build the rings and dots once, when the page loads
planets.forEach(function (planet, i) {
  // The orbit line
  const ring = document.createElement("div");
  ring.className = "ring";
  ring.style.width = planet.radius * 2 + "%";
  ring.style.height = planet.radius * 2 + "%";
  orbitBox.appendChild(ring);

  // The planet dot (it's a link to that planet's page)
  const dot = document.createElement("a");
  dot.className = "dot";
  dot.href = planet.page;
  dot.title = planet.name;
  dot.setAttribute("aria-label", planet.name);
  dot.style.width = planet.size + "px";
  dot.style.height = planet.size + "px";
  dot.style.background = planet.color;
  orbitBox.appendChild(dot);

  planet.dot = dot;
  planet.angle = i * 2.1;   // spread them out so they don't start in a line
  planet.speed = BASE_SPEED / Math.sqrt(planet.period);
});

// Put every dot where its angle says it should be
function drawPlanets() {
  planets.forEach(function (planet) {
    const x = 50 + planet.radius * Math.cos(planet.angle);
    const y = 50 + planet.radius * Math.sin(planet.angle);
    planet.dot.style.left = x + "%";
    planet.dot.style.top = y + "%";
  });
}

// Runs about 60 times a second while the model is playing
function animate(time) {
  if (!running) {
    return;
  }
  if (lastTime !== null) {
    const seconds = (time - lastTime) / 1000;
    planets.forEach(function (planet) {
      planet.angle += planet.speed * seconds;
    });
  }
  lastTime = time;
  drawPlanets();
  requestAnimationFrame(animate);
}

startBtn.addEventListener("click", function () {
  running = true;
  lastTime = null;
  startBtn.disabled = true;
  stopBtn.disabled = false;
  statusText.textContent = "Status: running";
  requestAnimationFrame(animate);
});

stopBtn.addEventListener("click", function () {
  running = false;
  startBtn.disabled = false;
  stopBtn.disabled = true;
  statusText.textContent = "Status: stopped";
});

drawPlanets();
