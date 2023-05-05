import "./menu.css";

const menu = () => {
  console.log("menu ONLINE");

  // toggle css on header button
  // clean other buttons
  const menuButtom = document.getElementById("menuLink");
  menuButtom.classList.add("activeButton");

  // main container
  const container = document.getElementById("content");

  // function to create html elements and append
  const createHtml = (elName, htmlEl, parent) => {
    const el = document.createElement(htmlEl);
    el.classList.add(elName);
    parent.append(el);
    return el;
  };

  // main div
  const mainDiv = createHtml("heroDiv", "div", container);

  // menuDiv
  const menuDiv = createHtml("heroSec", "div", mainDiv);

  // contDiv
  const contDiv = createHtml("contDiv", "div", menuDiv);

  // h1 for menu
  const h1Menu = createHtml("leftHeroH1", "h1", contDiv);
  h1Menu.textContent = "Here's The Collection!";

  // p for menu
  const pMenu = createHtml("leftHeroP", "p", contDiv);
  pMenu.textContent = "Our collection of cellphones is truly amazing. We have worked tirelessly to ensure that each phone is a masterpiece in its own right. From the design to the features, every detail has been carefully considered to provide the best possible user experience. We have partnered with top manufacturers to bring you the latest technology and innovation in the industry."
};

export default menu;
