import _ from "lodash";

function component() {
  const element = document.createElement("div");
  element.innerHTML = _.join(["Webpack Demo", "hihi"], ": ");

  return element;
}

document.body.appendChild(component());
