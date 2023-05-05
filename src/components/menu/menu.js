import "./menu.css";

const menu = () => {
  console.log("menu ONLINE");

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
  h1Menu.textContent = "Here's The Menu!";
};

export default menu;
