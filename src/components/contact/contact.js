import "./contact.css";

const contact = () => {
  console.log("contact ONLINE");

  // toggle css on header button
  // clean other buttons
  const contactButtom = document.getElementById("contactLink");
  contactButtom.classList.add("activeButton");
};

export default contact;
