const menu = document.querySelector(".aside__burger");
const toggleMenu = document.querySelector(".toggle__menu");
const burgerMenu = document.querySelector(".aside__burger");
const openMenu = document.querySelector(".mobile__menu");
const mobileMenu = document.querySelector(".menu");
const label = document.querySelector('.header__label')

menu.addEventListener("click", () => {
  toggleMenu.classList.toggle("open");
  burgerMenu.classList.toggle("open");
});

const changeText = () => {
  openMenu.innerHTML = "Close menu";
};

const defaultText = () => {
  openMenu.innerHTML = "Open menu";
};

openMenu.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  if (mobileMenu.classList.contains("active")) {
    changeText();
  }
  if (!mobileMenu.classList.contains("active")) {
    defaultText();
  }
  label.classList.toggle('hidden')
});


