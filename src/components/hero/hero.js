import "./hero.css";

const hero = () => {
  console.log("hero ONLINE");

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
  leftHeroH1.textContent = "Experience the Art of Fine Dining at Beary Bear";
  leftTopHero.append(leftHeroH1);

  // p
  const leftHeroP = document.createElement("p");
  leftHeroP.classList.add("leftHeroP");
  leftHeroP.textContent =
    "Welcome to Beary Bear, where culinary excellence meets impeccable service. Our menu features a unique blend of contemporary and traditional dishes, crafted from the freshest, locally-sourced ingredients. Whether you're in the mood for a quick bite or a leisurely dinner, our warm and invitin";
  leftTopHero.append(leftHeroP);

  // right hero sec
  const rightHero = document.createElement("div");
  rightHero.classList.add("rightHero");
  heroSec.append(rightHero);
  const heroImg = document.createElement("img");
  heroImg.src = "https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png"
  rightHero.append(heroImg);
};

export default hero;
