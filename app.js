// Tout le ciblage sur le DOM

const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");

// Les objets

const tacheObjet = {
	taches: [
		{ importance: 1, nameTache: "Faire les courses", date: "" },
		{ importance: 1, nameTache: "Travailler 1 heure", date: "" },
		{ importance: 2, nameTache: "Faire du sport", date: "" },
		{ importance: 3, nameTache: "Marcher", date: "" },
	],
	get mesTaches() {
		return tacheObjet.taches;
	},
	ajoutTache(importance, name, date) {
		tacheObjet.taches.push({
			importance,
			name,
			date,
		});
	},

	supprimerTache(index) {
		delete this.taches[index];
	},
};

// Affichage de toutes les tâches

let resultatMethodeMesTaches = tacheObjet.mesTaches;
for (let i = 0; i < resultatMethodeMesTaches.length; i++) {
	const li = document.createElement("li");
	const pIndex = document.createElement("p");
	const pImportance = document.createElement("p");
	const pName = document.createElement("p");
	const pDate = document.createElement("p");
	const buttonSupprimer = document.createElement("button");
	buttonSupprimer.textContent = "Supprimer";
	buttonSupprimer.className = "suppr";
	buttonSupprimer.dataset.index = i;
	pIndex.textContent = i;
	pImportance.textContent = resultatMethodeMesTaches[i]["importance"];
	pName.textContent = resultatMethodeMesTaches[i]["nameTache"];
	pDate.textContent = resultatMethodeMesTaches[i]["date"];
	ul.append(li);
	li.append(pIndex);
	li.append(pImportance);
	li.append(pName);
	li.append(pDate);
	li.append(buttonSupprimer);

	buttonSupprimer.addEventListener("click", (e) => {
		e.target.tacheObjet.supprimerTache(i);

	});
}
