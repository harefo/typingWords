


/*

//lancerJeu();

//récupération et stockage dans une variable de la zone de réponse 

let baliseZoneProposition = document.getElementById("zoneProposition");
console.log(baliseZoneProposition);

// Récupération et stockage dans une variable du span de la zone de réponse; 
let baliseZonePropositionSpan = document.querySelector("#zoneProposition span");
console.log(baliseZonePropositionSpan);

// récupération de tous les inputs de type radio

let listeInputRadio = document.querySelectorAll(".zoneChoix input");
console.log(listeInputRadio);

*/

// l’input dans lequel le joueur va écrire son texte 

let zoneEcriture=document.getElementById ("inputEcriture");
console.log(zoneEcriture);

// le bouton de validation

let boutonValidation= document.getElementById("btnValiderMot");
console.log(boutonValidation);

//l’endroit où le mot proposé sera affiché
let zoneAffichage= document.querySelector(".zoneProposition")
console.log (zoneAffichage);

// l’endroit où le mot score sera affiché ;

let zoneScore= document.querySelector(".zoneScore span")
console.log (zoneScore);

//les boutons radio de choix. 

let boutonsChoix = document.querySelectorAll(" .optionSource input");

console.log(boutonsChoix)