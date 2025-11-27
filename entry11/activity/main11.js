
let body = document.body;
let headline = document.querySelector("h1");
let headlines = document.querySelectorAll("h1");



headlines.forEach(function(headline) {
  headline.addEventListener('click', function (event) {
    headline.classList.toggle("red");
  });
});
