
/*afficherResultat : cette fonction prend en paramètre le résultat et le nombre total 
de mots proposés, et affiche le résultat du joueur ; 
*/
function afficherResultat(result,nbretotal){
    console.log ("vous avez obtenu un score de " + result +  " sur " + nbretotal);
}

/* choisirPhrasesOuMots : cette fonction demande à l’utilisateur s’il veut jouer avec des
 phrases ou des mots. 
*/

function choisirPhrasesOuMots(){
    let choice= prompt("voulez-vous jouer avec des mots ou des phrases ?");
    while ((choice!=="mots") && (choice !== "phrases")){
        choice= prompt("voulez-vous jouer avec des mots ou des phrases ?");
      
      } 
      return choice;
}

/*lancerBoucleDeJeu : cette fonction contient la boucle principale de jeu, c'est-à-dire la
 boucle for qui propose les mots/phrases au joueur, et lui demande de taper ces mots. Elle
  prend en paramètre le tableau de mots/phrases qui sera proposé au joueur, et retourne le 
  nombre de mots/phrases correctement tapés ;
*/

function lancerBoucleDeJeu(tab){
    for (i=0;i<tab.length;i++){
        motApplication=tab[i];
        motUtilisateur = prompt("Entrez la phrase : " + motApplication);
        if (motUtilisateur===motApplication){
            score++;
            }
    }
    return score;
}

/*lancerJeu : cette fonction sera la fonction principale, c’est elle qui s’occupe de 
lancer toutes les autres. En d’autres termes, c’est elle qui va appeler les fonctions 
que vous venez d’écrire. 
*/
let score=0;
function lancerJeu(){
    
   let motUtilisateur= choisirPhrasesOuMots();
   if (motUtilisateur==="mots"){
    lancerBoucleDeJeu(listeMots);
    nbretotal=listeMots.length;
   }
   else {lancerBoucleDeJeu(listePhrases);
    nbretotal=listePhrases.length;

   }
   afficherResultat (score,nbretotal);

}
