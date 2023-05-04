import './normalize.css';

function component() {
  const element = document.createElement("div");
  const btn = document.createElement("button");

  btn.innerHTML = "Click me and check the console!";
  element.classList.add('hello');

  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
