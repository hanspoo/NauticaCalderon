import fs from "fs";
import jsdom from "jsdom";
const { JSDOM } = jsdom;

const file = "public/html/boat-list1.html";
const dom = new JSDOM(fs.readFileSync(file).toString(), {
  runScripts: "outside-only",
});

const details = dom.window.document.getElementsByClassName("details");

const botes = [];
for (let i = 0; i < details.length; i++) {
  const nodo = details[i];
  const nombre = nodo.children[0].children[0].textContent;
  const tipo = nodo.children[0].children[1].textContent;

  const boatFeats = nodo.children[1];
  let make = "",
    engine = "";
  for (let j = 0; j < boatFeats.children.length; j++) {
    const bf = boatFeats.children[j];

    const n = bf.children[0].textContent;
    const v = bf.children[1].textContent;

    if (n === "Make") {
      make = v;
    }
    if (n.startsWith("Engine")) {
      engine = v;
    }
  }

  // console.log(nombre.textContent);

  const obj = { nombre, tipo, make, engine };
  botes.push(obj);
}

console.log(JSON.stringify(botes));

let a = {
  nombre: "Lucas",
  edad: 18,
};
