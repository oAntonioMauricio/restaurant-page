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

// delete the item after the header
const container = document.getElementById("content");

// event listeners for the buttons
homeButton.addEventListener("click", () => {
  if (container.children[1]) {
    container.children[1].remove();
  }
  hero();
});
menuButton.addEventListener("click", () => {
  if (container.children[1]) {
    container.children[1].remove();
  }
  menu();
});
contactButton.addEventListener("click", () => {
  if (container.children[1]) {
    container.children[1].remove();
  }
  contact();
});
