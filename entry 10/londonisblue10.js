
let body = document.body;

function turnOnLight() {
  body.classList.add("light");
  button.classList.add("buttonOn");
  button.textContent = "As It Should Be";
}

let button = document.querySelector(".button10");
button.addEventListener("click", turnOnLight);
