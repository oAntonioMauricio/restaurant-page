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
};

export default hero;
