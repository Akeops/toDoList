const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");

class TacheManager {
  constructor(taches) {
    this._taches = [];
  }

  get taches() {
    return this._taches;
  }

  ajoutTache(importance, nomTache, date) {
    this.taches.push({
      	importance,
		nomTache,
	  	date
    });
  }

  supprimerTache(key) {
    if (key >= 0 && key < this.taches.length) {
      // Il vaut mieux utiliser une fonction native qui supprime directement dans le tableau plutôt que delete
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
const tacheManager = new TacheManager();
tacheManager.ajoutTache(5, "Aller bosser", "");
tacheManager.ajoutTache(4, "Faire du sport pendant 1h", "");
tacheManager.ajoutTache(1, "Marcher 10 000 pas", "");
tacheManager.ajoutTache(2, "Prendre la vitamine D", "");



function afficherTaches() {
  tacheManager.taches.forEach((tache) => {
    // ul.innerHTML = ""; // Efface le contenu de la liste pour éviter les doublons
    const li = document.createElement("li");
    const buttonSupprimer = document.createElement("button");
    const buttonArchiver = document.createElement("button");

    buttonSupprimer.textContent = "Supprimer";
    buttonSupprimer.className = "suppr";
    buttonArchiver.textContent = "Archiver";
    buttonArchiver.className = "archiver";
    const tacheDetail = `${tache.importance}  ${tache.nomTache}  ${tache.date}`;
    console.log(tacheDetail);
	  li.innerHTML = tacheDetail;
    ul.append(li);
    li.append(buttonSupprimer);
    li.append(buttonArchiver);

    buttonSupprimer.addEventListener("click", function () {
      tacheObjet.supprimerTache(currentKey);
      afficherTaches(); // Met à jour l'interface après la suppression
    });
  });
}

afficherTaches();
