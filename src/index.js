import "./style.css";
import Icon from "./icon.png";
import { cube } from "./math";

function component() {
  const element = document.createElement("pre");

  element.innerHTML = ["Hello World!", "5 cubed is equeal to " + cube(5)].join(
    "\n\n"
  );
  
  return element;
}

document.body.appendChild(component());
