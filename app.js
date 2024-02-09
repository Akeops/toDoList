const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");

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
		  console.error("Indice invalide. La tâche n'a pas été supprimée.");
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
  ul.innerHTML = ""; // Effacer la liste pour éviter les doublons

  tacheManager.taches.forEach((tache, index) => {
    const li = document.createElement("li");
    const buttonSupprimer = document.createElement("button");
    const buttonArchiver = document.createElement("button");

    buttonSupprimer.textContent = "Supprimer";
    buttonSupprimer.className = "suppr";
    buttonArchiver.textContent = "Archiver";
    buttonArchiver.className = "archiver";
    const tacheDetail = `${tache.importance}  ${tache.nomTache}  ${tache.date}`;
    console.log(tacheManager.taches);
    li.textContent = tacheDetail;
    ul.append(li);
    li.append(buttonSupprimer);
    li.append(buttonArchiver);

    buttonSupprimer.addEventListener("click", () => {
      const index = tacheManager.taches.indexOf(tache);
      if (index !== -1) {
        tacheManager.supprimerTache(index);
        li.remove();
      }
    });
    
    buttonArchiver.addEventListener("click", () => {
      tacheManager.archiverTache(index);
    });
   
  })
}

function afficheTachesArchivves() {
  tacheManager.tachesArchivees.forEach(tache => {
    
  })
}


afficherTaches();
tacheManager.tachesArchivees
