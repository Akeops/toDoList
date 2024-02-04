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

	supprimerTache(key) {
		delete this.taches[key]["importance"],
		delete this.taches[key]["nameTache"],
		delete this.taches[key]["date"]
	}
};


tacheObjet.supprimerTache(1)
console.log(tacheObjet.mesTaches[0]);