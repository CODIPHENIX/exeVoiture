class carController {
  loadContent = async () => {
    console.log("loaded");

    const result = await fetch("./api/voiture.json", {
      cache: "no-cache",
    });
    const data = await result.json();
    const parent = document.querySelector("section");
    const el = document.createElement("ul");
    const addElement = parent.appendChild(el);

    console.table(data);

    for (let index of data) {
      console.log(
        `${index.marque} ${index.annee} ${index.type} ${index.etat} ${index.description} ${index.image}`
      );
      addElement.innerHTML += `<li><strong>Marque:</strong> ${index.marque}</li>
        <li><strong>Annee:</strong> ${index.annee}</li>
        <li><strong>Etat:</strong> ${index.etat}</li>
        <li><strong>Type:</strong> ${index.type}</li>
        <li><strong>Description:</strong> ${index.description}</li>
        <li><img src="${index.image}" alt="${index.image}"/></li>
        
        `;
    }
  };
}

export const newcarController = new carController();
