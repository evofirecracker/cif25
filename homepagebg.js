const colors = ["#DBA111", "#034694", "#000000", "#ffffffff"];
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const logo = document.querySelector(".logogif");
const buttons = document.querySelectorAll(".btn");

let currentIndex = 3; // start on the last color in the list (white)

function applyButtonColor(randColor) {
  if (!buttons.length) return;
  let colorForButtons = "";
  if (randColor === colors[1]) {
    colorForButtons = "#fff"; // White text on blue background.
  } else if (randColor === colors[2]) {
    colorForButtons = "#fff"; // White text on black background.
  }
  buttons.forEach((btn) => {
    btn.style.color = colorForButtons;
  });
}

function newColor() {
  if (!logo) return;
  currentIndex = (currentIndex + 1) % colors.length;
  const nextColor = colors[currentIndex];

  if (body) body.style.backgroundColor = nextColor;
  if (wrapper) wrapper.style.backgroundColor = nextColor;
  applyButtonColor(nextColor);
}

// Set initial state to white and ensure buttons are Chelsea blue on white.
if (body) body.style.backgroundColor = colors[3];
if (wrapper) wrapper.style.backgroundColor = colors[3];
applyButtonColor(colors[3]);

logo.addEventListener("click", newColor);
