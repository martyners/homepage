{
  const welcome = () => {
    console.log("Łapa!");
  }

  const buttonChangeBackground = document.querySelector(".section__button");

  const toggleBackground = () => {
    const body = document.querySelector("body");
    
    body.classList.toggle("body--bisquitBackground");

    buttonChangeBackground.innerText = body.classList.contains(
      "body--bisquitBackground"
      )
      ? "Zmień kolor tła na białe"
      : "Zmień kolor tła na ciasteczkowe";
  }

  const setActivityBasedOnTimeOfDay = (time) => {
    const whatAmIDoing = document.querySelector(".section__whatAmIDoing");
    
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
          
  const initHomePage = () => { 
            
  welcome();
            
  buttonChangeBackground.addEventListener("click", toggleBackground);
            
  let timeOfDay = "popołudnie";
  setActivityBasedOnTimeOfDay(timeOfDay);
};

initHomePage();
}