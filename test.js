class TacheManager {
	constructor(taches, tachesArchivees) {
		this._taches = [];
		this._tachesArchivees = [];
	}

	get taches() {
		return this._taches;
	}

	get tachesArchivees() {
		return this._tachesArchivees;
	}

	archiverTache(key) {
		if (key >= 0 && key < this.taches.length) {
			const tacheArchivees = this.taches.splice(key, 1)[0];
			this._tachesArchivees.push(tacheArchivees);
			console.log("Tâche archivee avec succès.");
		} else {
			console.error("Indice invalide. La tâche n'a pas été archivée.");
			console.log(tacheArchivees);
		}
	}

	ajoutTache(importance, nomTache, date) {
		const tache = { importance, nomTache, date };
		this.taches.push(tache);
	}
}

function getDate() {
	const date = new Date();
	const day = date.getDay();
	const month = date.getMonth();
	const year = date.getFullYear();
	try {
		if (day < 10 || month < 10) {
			const fullYear = `0${day}/0${month}/${year}`;
			return fullYear;
		} else if (day < 10) {
			const fullYear = `0${day}/${month}/${year}`;
			return fullYear;
		} else if (month > 9) {
			const fullYear = `${day}/0${month}/${year}`;
			return fullYear;
		}
	} catch (e) {
		return e;
	}
}

const tacheManager = new TacheManager()
const unTest = tacheManager.ajoutTache(1, "Allo", getDate());
tacheManager.archiverTache(0);
console.log(tacheManager.taches)

console.log(tacheManager.tachesArchivees);
