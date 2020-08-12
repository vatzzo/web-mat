const navButton = document.querySelector(".navigation__burger");
const navBars = document.querySelectorAll(".bars");
const background = document.querySelector(".navigation__background");
const options = document.querySelector(".navigation__options");
navButton.addEventListener("click", () => {
  // Change to 'X'
  navBars[0].classList.toggle("bars-toggled--top");
  navBars[1].classList.toggle("bars-toggled--middle");
  navBars[2].classList.toggle("bars-toggled--bottom");

  // Show
  background.classList.toggle("navigation__background--active");
  options.classList.toggle("navigation__options--active");
});

const optionItems = document.querySelectorAll(".navigation__options li");
optionItems.forEach((item) => {
  item.addEventListener("click", () => {
    // Change to burger
    navBars[0].classList.remove("bars-toggled--top");
    navBars[1].classList.remove("bars-toggled--middle");
    navBars[2].classList.remove("bars-toggled--bottom");

    // Hide
    background.classList.remove("navigation__background--active");
    options.classList.remove("navigation__options--active");
  });
});
