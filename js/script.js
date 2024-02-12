console.log("Łapa!");

let body = document.querySelector("body");
let buttonChangeBackground = document.querySelector(".section__button");
let whatAmIDoing = document.querySelector(".section__whatAmIDoing");
let timeOfDay = "popołudnie";

buttonChangeBackground.addEventListener("click", () => {
  body.classList.toggle("body--bisquitBackground");
  buttonChangeBackground.innerText = body.classList.contains(
    "bisquitBackground"
  )
    ? "Zmień kolor tła na białe"
    : "Zmień kolor tła na ciasteczkowe";
});

switch (timeOfDay) {
  case "wczesne rano":
  case "popołudnie":
    whatAmIDoing.innerText = "spaceruję";
    break;
  case "rano":
  case "wieczór":
    whatAmIDoing.innerText = "jem";
    break;

  default:
    whatAmIDoing.innerText = "śpię";
}
