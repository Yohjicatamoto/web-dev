/* ============================================================
   uranus.js — "How old would you be on Uranus?" calculator

   How it works:
   - One year on Uranus = 84 Earth years.
   - Divide your age by 84 to get your age in Uranus years.
   - Also works out how long until your first (or next)
     Uranus birthday.
   ============================================================ */

const URANUS_YEAR = 84;   // in Earth years

const form = document.getElementById("age-form");
const ageInput = document.getElementById("earth-age");
const result = document.getElementById("age-result");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const age = parseFloat(ageInput.value);

  if (isNaN(age) || age < 0 || age > 130) {
    result.innerHTML = '<p class="error">Type in an age between 0 and 130.</p>';
    return;
  }

  const uranusAge = (age / URANUS_YEAR).toFixed(2);
  const birthdaysSoFar = Math.floor(age / URANUS_YEAR);
  const nextBirthdayAt = (birthdaysSoFar + 1) * URANUS_YEAR;
  const yearsToGo = Math.ceil(nextBirthdayAt - age);

  let birthdayLine;
  if (birthdaysSoFar === 0) {
    birthdayLine = "Your first Uranus birthday is at age 84, so about " + yearsToGo + " Earth years from now.";
  } else {
    birthdayLine = "You've already had " + birthdaysSoFar + " Uranus birthday" +
      (birthdaysSoFar > 1 ? "s" : "") + ". Next one in about " + yearsToGo + " years.";
  }

  result.innerHTML =
    "<p>On Uranus you'd be</p>" +
    "<strong>" + uranusAge + " years old</strong>" +
    "<p>" + birthdayLine + "</p>";
});
