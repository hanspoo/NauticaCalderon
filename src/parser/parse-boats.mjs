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
  // console.log(nombre.textContent);

  botes.push({ nombre, tipo });
}

console.log(JSON.stringify(botes));
