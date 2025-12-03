const colors = ["#DBA111", "#034694", "#ffffffff"];
const body = document.querySelector("body");
const wrapper = document.querySelector(".wrapper");
const logo = document.querySelector(".logogif");

let lastColor = null;

function newColor() {
  if (!logo) return;
    let randIndex = Math.floor(Math.random() * colors.length);
    const randColor = colors[randIndex];
    lastColor = randColor;

  if (body) body.style.backgroundColor = randColor;
  if (wrapper) wrapper.style.backgroundColor = randColor;
}

logo.addEventListener("click", newColor);

