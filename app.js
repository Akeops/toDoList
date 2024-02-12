const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");
const ulArchive = document.querySelector("#maListeArchive")

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
      this.tachesArchivees.push(tacheArchivees);
		  console.log("Tâche archivee avec succès.");
    } else {
      console.error("Indice invalide. La tâche n'a pas été archivée.");
      console.log(tacheArchivees)
    }
  }

	ajoutTache(importance, nomTache, date) {
		const tache = { importance, nomTache, date };
		this.taches.push(tache);
	}

	supprimerTache(key) {
		if (key >= 0 && key < this.taches.length) {
			this.taches.splice(key, 1);
			console.log("Tâche supprimée avec succès.");
		} else {
			console.error("Indice invalide. La tâche n'a pas été supprimée.");
		}
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

// Ajouter une tâche
document.querySelector("#monForm").addEventListener("submit", (event) => {
	event.preventDefault();
	const valeurImportance = document.querySelector("#importance").value;
	const valeurNomTache = document.querySelector("#tache").value;
	const date = getDate();
	tacheManager.ajoutTache(valeurImportance, valeurNomTache, date);
	afficherTaches();
  document.querySelector("#importance").value = "";
  document.querySelector("#tache").value = "";
});

const tacheManager = new TacheManager();

function afficherTaches() {
  ul.textContent = ""; // Effacer la liste pour éviter les doublons

  tacheManager.taches.forEach(tache => {
    const li = document.createElement("li");
    const buttonArchiver = document.createElement("button");
    const buttonSupprimer = document.createElement("button");
    
    buttonArchiver.textContent = "Archiver";
    buttonArchiver.className = "archiver";
    const tacheDetail = `${tache.importance}  ${tache.nomTache}  ${tache.date}`;
    li.textContent = tacheDetail;
    ul.append(li);
    li.append(buttonArchiver);
    
    buttonArchiver.addEventListener("click", () => {
      const index = tacheManager.taches.indexOf(tache);
      tacheManager.archiverTache(index);
      li.remove();
      afficherTachesArchives();
    });
   
  })
}

function afficherTachesArchives() {
  ulArchive.textContent = "";
  tacheManager.tachesArchivees.forEach(tache => {
    const liArchive = document.createElement("li");
    const buttonSupprimer = document.createElement("button");

    const tacheDetail = `${tache.importance} ${tache.nomTache} ${tache.date}`;
    buttonSupprimer.textContent = "Supprimer";
    buttonSupprimer.className = "suppr";
    liArchive.textContent = tacheDetail;
    ulArchive.append(liArchive);
    liArchive.append(buttonSupprimer);

    buttonSupprimer.addEventListener("click", () => {
      const index = tacheManager.tachesArchivees.indexOf(tache);
      if (index !== -1) {
        tacheManager.supprimerTache(index);
        liArchive.remove();
      }
    });
    
  });
}

afficherTaches();


