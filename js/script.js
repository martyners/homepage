{
 const initHomePage = () => { 

  const welcome = () => {
    console.log("Łapa!");
  }
  welcome();
  
  const buttonChangeBackground = document.querySelector(".section__button");
  const whatAmIDoing = document.querySelector(".section__whatAmIDoing");
  const body = document.querySelector("body");
  
  let timeOfDay = "popołudnie";

  const toggleBackground = () => {
    body.classList.toggle("body--bisquitBackground");

    buttonChangeBackground.innerText = body.classList.contains(
      "body--bisquitBackground"
     )
    ? "Zmień kolor tła na białe"
    : "Zmień kolor tła na ciasteczkowe";
  }

  buttonChangeBackground.addEventListener("click", toggleBackground);

  const setActivityBasedOnTimeOfDay = (time) => {
    switch (time) {
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
  };

  setActivityBasedOnTimeOfDay(timeOfDay);
  };
 initHomePage();
}