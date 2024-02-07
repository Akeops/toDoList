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
      date,
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

const tacheManager = new TacheManager();
tacheManager.ajoutTache(5, "Aller bosser", "");
tacheManager.ajoutTache(4, "Faire du sport pendant 1h", "");
tacheManager.ajoutTache(1, "Marcher 10 000 pas", "");
tacheManager.ajoutTache(2, "Prendre la vitamine D", "");


 console.log(tacheManager.taches);
for (let key in tacheManager.taches) {
 
}
