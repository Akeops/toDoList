const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const tache = document.querySelector("#tache");
const buttonAjouter = document.querySelector("#buttonAjouter");
const ul = document.querySelector("#maListe");
const buttonSupprimer = document.querySelector(".suppr");

function ajouterUneTache() {
	const divElementTache = document.createElement("div");
	const li = document.createElement("li");
	const buttonSupprimer = document.createElement("button");
	let isTache = tache.value;
	if (isTache) {
		li.textContent = tache.value;
	} else {
		li.textContent = "Pas de tache";
	}
	divElementTache.className = "divTache";
	li.className = "liTache";
	ul.append(divElementTache);
	divElementTache.append(li);
	buttonSupprimer.textContent = "Supprimer";
	buttonSupprimer.className = "suppr";
     li.appendChild(buttonSupprimer);
     buttonSupprimer.addEventListener("click", () => {
           divElementTache.remove();
     });
}

buttonAjouter.addEventListener("click", ajouterUneTache);


// cette fonction ne fonctionne pas
function suprimerTache() {

	const divElementTache = document.querySelector("divTache");
     buttonSupprimer.addEventListener("click", () => {
           divElementTache.remove();
      });
	
}

function toDoList() {
	ajouterUneTache();
	suprimerTache();
}
