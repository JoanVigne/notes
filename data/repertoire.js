export const repertoire = [
  {
    maitrise: true,
    artiste: "Bradley Cooper & Lady Gaga",
    titre: "Shallow",
    tab: "am d g d em / bm d a em",
  },
  {
    maitrise: true,
    artiste: "Elton John",
    titre: "Your song",
    tab: "g cmaj7 d/f# bm em am c",
  },
  {
    maitrise: false,
    artiste: "Pascal Obispo",
    titre: "Où et avec qui tu m'aimes",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Murray Head",
    titre: "Say it ain't so",
    tab: "",
  },
  {
    maitrise: false,
    artiste: "Peter Frampton",
    titre: "Baby I love your way",
    tab: "",
  },
  {
    maitrise: false,
    artiste: "Kaleo",
    titre: "Vor I Vaglaskógi",
    tab: "",
  },
  {
    maitrise: false,
    artiste: "Jean-Jacques Goldman",
    titre: "Bonne idée",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Sting",
    titre: "Shape of my heart",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Eric Clapton",
    titre: "Tears in Heaven",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Vanessa de Mata",
    titre: "Boa sorte",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Ludovico Einaudi",
    titre: "Una Mattina",
    tab: "",
  },
  {
    maitrise: true,
    artiste: "Johnny Cash",
    titre: "Hurt",
    tab: "am c d / am f c g x2; am f g g am f g am",
  },
  {
    maitrise: true,
    artiste: "Josean Log",
    titre: "Chachacha",
    tab: "f dm am a / Bb c f a",
  },
];

/* const repertoireContainer = document.getElementById("repertoire");
let table = document.createElement("table");
repertoireContainer.append(table);
// PREMIERE LIGNE
let premiereLigne = document.createElement("tr");
let maitriseCol = document.createElement("td");
maitriseCol.innerHTML = "<h3>  </h3>";
let artisteCol = document.createElement("td");
artisteCol.innerHTML = "<h3> Artistes </h3>";
let titreCol = document.createElement("td");
titreCol.innerHTML = "<h3> Titres </h3>";
let tabCol = document.createElement("td");
tabCol.innerHTML = "<h3> tab chords </h3>";
premiereLigne.append(maitriseCol, artisteCol, titreCol, tabCol);
table.append(premiereLigne);

repertoire.forEach((song) => {
  let songContainer = document.createElement("tr");

  // maitrise
  let maitriseCell = document.createElement("td");
  let iconCheck = document.createElement("span");
  maitriseCell.append(iconCheck);
  iconCheck.classList.add("material-symbols-outlined");
  song.maitrise === true
    ? (iconCheck.innerText = "check")
    : (iconCheck.innerText = "close");
  // artiste
  let artisteCell = document.createElement("td");
  artisteCell.append(song.artiste);
  // titre
  let titreCell = document.createElement("td");
  titreCell.append(song.titre);
  // tab
  let tabCell = document.createElement("td");
  tabCell.append(song.tab);

  songContainer.append(maitriseCell, artisteCell, titreCell, tabCell);
  table.append(songContainer);
});
 */
