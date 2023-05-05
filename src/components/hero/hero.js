import "./hero.css";

const hero = () => {
  console.log("hero ONLINE");

  // toggle css on header button
  // clean other buttons
  const headerButtom = document.getElementById("homeLink");
  headerButtom.classList.add("activeButton");

  // main container
  const container = document.getElementById("content");

  // main div for hero section
  const heroDiv = document.createElement("div");
  heroDiv.classList.add("heroDiv");
  container.append(heroDiv);

  // hero section
  const heroSec = document.createElement("div");
  heroSec.classList.add("heroSec");
  heroDiv.append(heroSec);

  // left hero section
  const leftHero = document.createElement("div");
  leftHero.classList.add("leftHero");
  heroSec.append(leftHero);

  // left top hero section
  const leftTopHero = document.createElement("div");
  leftTopHero.classList.add("leftTopHero");
  leftHero.append(leftTopHero);

  // h1
  const leftHeroH1 = document.createElement("h1");
  leftHeroH1.classList.add("leftHeroH1");
  leftHeroH1.textContent = "Harness the Power of Technology.";
  leftTopHero.append(leftHeroH1);

  // p
  const leftHeroP = document.createElement("p");
  leftHeroP.classList.add("leftHeroP");
  leftHeroP.textContent =
    "Our cellphones are more than just devices, they are an extension of your personality. Our collection offers a wide range of styles, colors, and features to cater to every individual's unique needs. Whether you are looking for a sleek and minimalist design, or a more vibrant and colorful option, we have something that will fit your style.";
  leftTopHero.append(leftHeroP);

  // right hero sec
  const rightHero = document.createElement("div");
  rightHero.classList.add("rightHero");
  heroSec.append(rightHero);
  const heroImg = document.createElement("img");
  heroImg.src =
    "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png";
  rightHero.append(heroImg);
};

export default hero;
