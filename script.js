import { repertoire } from "./data/repertoire.js";
import { citations } from "./data/citations.js";
import { alcools } from "./data/alcools.js";

tableCreation("repertoire", repertoire, "maitrise");
tableCreation("citations", citations, null);
tableCreation("alcools", alcools, "type");

function tableCreation(containerId, data, trierPar) {
  const container = document.getElementById(containerId);
  let table = document.createElement("table");
  container.append(table);

  // PREMIERE LIGNE
  const proprieteNoms = Object.keys(data[0]); // Supposons que toutes les entrées d'un tableau ont les mêmes propriétés
  let premiereLigne = document.createElement("tr");
  proprieteNoms.forEach((nom) => {
    let col = document.createElement("th");
    col.innerHTML = `<h3>${nom.charAt(0).toUpperCase() + nom.slice(1)}</h3>`; // maj sur premiere lettre
    premiereLigne.append(col);
  });
  table.append(premiereLigne);

  // trier les datas
  trierPar !== null && data.sort((a, b) => b[trierPar] - a[trierPar]);

  // AUTRES LIGNES
  data.forEach((e) => {
    let row = document.createElement("tr");

    for (const prop in e) {
      let col = document.createElement("td");
      if (typeof e[prop] === "boolean") {
        let span = document.createElement("span");

        span.classList.add("material-symbols-outlined");
        e[prop] === true
          ? ((span.innerText = "check"), span.classList.add("green"))
          : ((span.innerText = "close"), span.classList.add("red"));
        col.append(span);
      } else {
        col.textContent = e[prop];
      }
      row.append(col);
    }

    table.append(row);
  });
}
