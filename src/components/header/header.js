import "./header.css";

const header = () => {
  console.log("header ONLINE");

  // create header in html
  const htmlHeader = document.createElement("header");
  const container = document.getElementById("content");
  container.append(htmlHeader);

  // create nav in html
  const nav = document.createElement("nav");
  nav.classList.add("headerNav");
  htmlHeader.append(nav);

  // create div in nav
  const divNav = document.createElement("div");
  divNav.classList.add("divNav");
  nav.append(divNav);

  // ---- a with image and span ----- //

  // create a in divNav
  const aNav = document.createElement("a");
  aNav.classList.add("aNav");
  divNav.append(aNav);

  // image in aNav
  const imageA = document.createElement("img");
  imageA.classList.add("imageA");
  imageA.src = "https://flowbite.com/docs/images/logo.svg";
  aNav.append(imageA);

  // span in aNav
  const spanA = document.createElement("span");
  spanA.classList.add("spanA");
  spanA.textContent = "Beary Bear";
  aNav.append(spanA);

  // ---- div with ul ----- //

  // create div for ul
  const divUl = document.createElement("div");
  divUl.classList.add("divUl");
  divNav.append(divUl);

  // create ul for divUl
  const ulDiv = document.createElement("ul");
  ulDiv.classList.add("ulDiv");
  divUl.append(ulDiv);

  // create li for divUL
  for (let i = 0; i < 3; i += 1) {
    const li = document.createElement("li");
    const a = document.createElement("a");

    switch (i) {
      case 0:
        a.textContent = "Home";
        a.setAttribute("id", "homeLink");
        break;
      case 1:
        a.textContent = "Collection";
        a.setAttribute("id", "menuLink");
        break;
      case 2:
        a.textContent = "Contact";
        a.setAttribute("id", "contactLink");
        break;
      default:
        // eslint-disable-next-line no-console
        console.log("error in nav names");
    }

    li.append(a);
    a.classList.add("aLiNav");
    ulDiv.append(li);
  }
};

export default header;
