/********** Preloader **********/
window.addEventListener("load", function () {
  setTimeout(function () {
    document.getElementById("preloader").style.opacity = "0";
    setTimeout(function () {
      document.getElementById("preloader").style.display = "none";
    }, 500); // Correspond à la durée de la transition CSS
  }, 3000); // Durée avant de commencer le fondu
});
/********** Preloader **********/

/********** TypedJS **********/

const typed = new Typed(".typed", {
  strings: ["Développeur front-end."],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 3000,
  loop: true,
});

/********** TypedJS **********/

/********** Affichage dynamique **********/
document.addEventListener("DOMContentLoaded", function () {
  const url = "./assets/data/data.json";

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      const container = document.getElementById("project_box");
      if (!container) {
        throw new Error("Container element not found");
      }

      data.forEach((item) => {
        // Créez la div de la carte
        const cardDiv = document.createElement("div");
        cardDiv.className = "card";

        // Créez la div card_part1
        const cardPart1 = document.createElement("div");
        cardPart1.className = "card_part1";
        const itemImg = document.createElement("img");
        itemImg.src = `assets/img/${item.img}`;
        itemImg.alt = `Aperçu page ${item.name}`;
        cardPart1.appendChild(itemImg);

        // Créez la div card_part2
        const cardPart2 = document.createElement("div");
        cardPart2.className = "card_part2";
        const itemName = document.createElement("h2");
        itemName.textContent = item.name;
        const itemDesc = document.createElement("p");
        itemDesc.textContent = item.desc;
        const itemLink = document.createElement("a");
        itemLink.href = item.link;
        itemLink.textContent = "Live demo";

        cardPart2.appendChild(itemName);
        cardPart2.appendChild(itemDesc);
        cardPart2.appendChild(itemLink);

        // Ajoutez card_part1 et card_part2 à la carte
        cardDiv.appendChild(cardPart1);
        cardDiv.appendChild(cardPart2);

        // Ajoutez la carte au conteneur
        container.appendChild(cardDiv);
      });
    })
    .catch((error) => {
      console.error("Erreur lors du chargement du fichier JSON:", error);
    });
});

/********** Affichage dynamique **********/
