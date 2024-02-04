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
          if (key > 0 && key < this.taches.length) {
               this.taches.splice(key, 1);
			console.log("La tâche a ien été suprrimé");
          } else {
               console.log("L'index choisi n'a pas été trouvé")
          }
          
	}
};



console.log(tacheObjet.taches)
tacheObjet.supprimerTache(1);
console.log(tacheObjet.taches);