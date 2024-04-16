console.log("hello Wilders");

const data = [
  {
    id: 0,
    status: "A faire",
    description: "Penser à faire la lessive",
    category: "maison",
    deadline: "11/05/2025",
  },
  {
    id: 1,
    status: "En cours",
    description: "Live demo To DO avec le DOM, injection d'élément",
    category: "boulot",
    deadline: "12/04/2024",
  },
  {
    id: 2,
    status: "En pause",
    description: "Canoe",
    category: "sport",
    deadline: "06/06/2025",
  },
  {
    id: 3,
    status: "A faire",
    description: "Penser à laisser du temps projet",
    category: "boulot",
    deadline: "18/04/2024",
  },
  {
    id: 4,
    status: "En cours",
    description: "Live demo To DO avec le DOM, filtre sur select",
    category: "boulot",
    deadline: "15/04/2024",
  },
  {
    id: 5,
    status: "En cours",
    description: "Trail",
    category: "sport",
    deadline: "25/05/2024",
  },
  {
    id: 6,
    status: "A faire",
    description: "Exo pour réviser le DOM",
    category: "boulot",
    deadline: "18/04/2024",
  },
];

let status = "";
let descriptionValue = "";

const app = document.getElementById("app");

const css = {
  "En cours": "blue",
  "A faire": "green",
  "En pause": "yellow",
};

const img = {
  sport: "./assets/isport-100.png",
  maison: "./assets/ihome-100.png",
  boulot: "./assets/iwork-100.png",
};

const createCard = (cardInfo) => {
  const section = document.createElement("section");
  const template = `<div class="status" style="background-color: ${
    css[cardInfo.status]
  }" id=${cardInfo.id}>
    <h4>${cardInfo.status}</h4>
  </div>
  <div class="description">
    <h3>${cardInfo.description}</h3>
    <div>
        <button onclick="updateText(${cardInfo.id})">Modifié <button/>
    </div>
  </div>

  <div class="category">
    <img src="${img[cardInfo.category]}" alt="${cardInfo.category}" />
    <p>${cardInfo.category}</p>
  </div>
  <div class="deadline">
    <p>${cardInfo.deadline}</p>
  </div>
  <div class="trash">
    <img
      src="https://cdn-icons-png.flaticon.com/512/860/860829.png"
      alt="poubelle"
    />
  </div>`;

  section.innerHTML = template;

  return section;
};

const updateText = (id) => {
  data[id].description += " Modifié";
  render();
};

const render = () => {
  app.innerHTML = "";
  for (let i = 0; i < data.length; i++) {
    if (
      (status === data[i].status || status === "") &&
      data[i].description.toLowerCase().includes(descriptionValue.toLowerCase())
    ) {
      const newCard = createCard(data[i]);
      app.appendChild(newCard);
    }
  }

  //Remettre les écouteurs en place
};

/** Gestion de la valeur du filter par status */
const selectStatus = document.getElementById("status");
selectStatus.addEventListener("change", (event) => {
  status = event.target.value;
  render();
});

/** Gestion du filtre sur description */
const descriptionInput = document.getElementById("description");
descriptionInput.addEventListener("input", (id) => {
  descriptionValue = event.target.value;
  render();
});

render();
