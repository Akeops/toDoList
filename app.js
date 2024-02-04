const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");

const tacheObjet = {
	taches: [
		{ importance: 1, nameTache: "Faire les courses", date: "" },
		{ importance: 1, nameTache: "Travailler 1 heure", date: "" },
		{ importance: 2, nameTache: "Faire du sport", date: "" },
		{ importance: 3, nameTache: "Marcher", date: "" },
	],

	get mesTaches() {
		return this.taches;
	},

	ajoutTache(importance, nameTache, date) {
		this.taches.push({
			importance,
			nameTache,
			date,
		});
	},

	supprimerTache(key) {
		if (key >= 0 && key < this.taches.length) {
			// Il vaut mieux utiliser une fonction native qui supprime directement dans le tableau plutôt que delete
			this.taches.splice(key, 1);
			
			console.log("Tâche supprimée avec succès.");
		} else {
			console.error("Indice invalide. La tâche n'a pas été supprimée.");
		}
	},
};

function afficherTaches() {
	ul.innerHTML = ""; // Efface le contenu de la liste pour éviter les doublons
	for (let key in tacheObjet.taches) {
		const li = document.createElement("li");
		const pIndex = document.createElement("p");
		const pImportance = document.createElement("p");
		const pName = document.createElement("p");
		const pDate = document.createElement("p");
		const buttonSupprimer = document.createElement("button");

		const currentKey = parseInt(key); // Convertit la clé en nombre entier

		buttonSupprimer.textContent = "Supprimer";
		buttonSupprimer.className = "suppr";
		pIndex.textContent = currentKey;
		pImportance.textContent = tacheObjet.taches[currentKey]["importance"];
		pName.textContent = tacheObjet.taches[currentKey]["nameTache"];
		pDate.textContent = tacheObjet.taches[currentKey]["date"];

		ul.append(li);
		li.append(pIndex);
		li.append(pImportance);
		li.append(pName);
		li.append(pDate);
		li.append(buttonSupprimer);

		buttonSupprimer.addEventListener("click", function () {
			tacheObjet.supprimerTache(currentKey);
			afficherTaches(); // Met à jour l'interface après la suppression
		});

		console.log(tacheObjet.taches[currentKey]);
	}
}

// Affiche les tâches au chargement initial
afficherTaches();
