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
    description: "Live demo To DO avec le DOM",
    category: "boulot",
    deadline: "15/04/2024",
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
    description: "Penser à laiqsser du temps projet",
    category: "boulot",
    deadline: "18/04/2024",
  },
];

const app = document.getElementById("app");
console.log(app);

const createCard = (cardInfo) => {
  console.log(cardInfo);
  const section = document.createElement("section");
  const template = `<div class="status" id=${cardInfo.id}>
    <h4>${cardInfo.status}</h4>
  </div>
  <div class="description">
    <h3>${cardInfo.description}</h3>
  </div>
  <div class="category">
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

// const newCard = createCard();
// app.appendChild(newCard);

for (let i = 0; i < data.length; i++) {
  const newCard = createCard(data[i]);
  app.appendChild(newCard);
}
