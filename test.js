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

	supprimerTache(i) {
		delete this.taches[i];
	},
};


tacheObjet.supprimerTache(2)
console.log(tacheObjet.taches)