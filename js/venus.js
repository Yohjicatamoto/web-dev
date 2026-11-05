/* ============================================================
   venus.js — "Read more" sections

   How it works:
   - Each button has aria-controls set to the id of its panel.
   - Clicking a button shows or hides that panel and changes
     the button's text between "+ Read more" and "− Show less".
   - The same code works for every section on the page.
   ============================================================ */

const toggles = document.querySelectorAll(".read-more");

toggles.forEach(function (button) {
  const panel = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", function () {
    const isOpen = button.getAttribute("aria-expanded") === "true";

    // Flip it: open becomes closed, closed becomes open
    button.setAttribute("aria-expanded", !isOpen);
    panel.hidden = isOpen;
    button.textContent = isOpen ? "+ Read more" : "− Show less";
  });
});
