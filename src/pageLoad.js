import header from "./components/header/header";
import hero from "./components/hero/hero";
import menu from "./components/menu/menu";
import contact from "./components/contact/contact";

header();
hero();

// get buttons for pageloading;
const homeButton = document.getElementById("homeLink");
const menuButton = document.getElementById("menuLink");
const contactButton = document.getElementById("contactLink");

// get container
const container = document.getElementById("content");

// func to check and delete page if true and remove button active color
const deletePage = () => {
  if (container.children[1]) {
    container.children[1].remove();
  }

  homeButton.classList.remove("activeButton");
  menuButton.classList.remove("activeButton");
  contactButton.classList.remove("activeButton");
};

// event listeners for the buttons
homeButton.addEventListener("click", () => {
  deletePage();
  hero();
});
menuButton.addEventListener("click", () => {
  deletePage();
  menu();
});
contactButton.addEventListener("click", () => {
  deletePage();
  contact();
});
