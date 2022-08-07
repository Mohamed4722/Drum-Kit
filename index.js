
// Click souris -> création du son

for (var kk=0; kk < document.querySelectorAll(".drum").length; kk++) {
document.querySelectorAll(".drum")[kk].addEventListener("click", handleClick);
}

function handleClick() {

  var buttonInnerHTML = this.innerHTML;
  makeSound(buttonInnerHTML);
  animationButton(buttonInnerHTML);
}


// Touche du clavier -> création du son

document.addEventListener("keydown", key_Down); // cette fois si la méthode event listener est appliqué à TOUT LE DOCUMENT et non plus justes aux boutons

function key_Down() {

  var keyboardButton = event.key;
  makeSound(keyboardButton);
  animationButton(keyboardButton);
}


function animationButton(currentKey) {

  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function () {activeButton.classList.remove("pressed");},100);
}



function makeSound(key) {

   // Angela a utilisé la commande switch ici au lieu de if / else if
  if (key === "w") {
    var Tom1 = new Audio ("sounds/tom-1.mp3");
    Tom1.play(); }

  else if (key === "a") {
    var Tom2 = new Audio ("sounds/tom-2.mp3");
    Tom2.play(); }

  else if (key === "s") {
    var Tom3 = new Audio ("sounds/tom-3.mp3");
    Tom3.play(); }

  else if (key === "d") {
    var Tom4 = new Audio ("sounds/tom-4.mp3");
    Tom4.play(); }

  else if (key === "j") {
    var Snare = new Audio ("sounds/snare.mp3");
    Snare.play(); }

  else if (key === "k") {
    var Crash = new Audio ("sounds/Crash.mp3");
    Crash.play(); }

  else if (key === "l") {
    var Kick = new Audio ("sounds/kick-bass.mp3");
    Kick.play(); }

}










// COURS

// définir un objet :

// var bellboy = {
//   name : "Timmy",
//   age : 19 ,
//   hasworkpermit : True ,
//   languages : ["French", "English"]
     // moveSuitcase : function() {     --> la fonction devient une méthode de l'objet bellBoy
     //   alert("May I take your suitcase?");
     //   pickUpSuitcase();
     //   move()
     // }
// }


// usine creation bellBoy :

// fonction constructeur d'objets
// function Bellboy (name, age, hasworkpermit, languages) {
// à noter la majuscule ici au début de BellBoy alors que les fonctions normales on met fai l'écriture chameau
// donc pas de majuscule au debut noralement.
//   this.name = name ;
//   this.age = age ;
//   this hasworkpermit = hasworkpermit ;
//   this.languages = languages ;
//   this.moveSuitcase = function() {     --> la fonction devient une méthode de l'objet bellBoy
     //   alert("May I take your suitcase?");
     //   pickUpSuitcase();
     //   move()
     // } ;
// }

// on construit ensuite 2 bellboys:

// var bellboy1 = new Bellboy("Timmy",19,True,["French", "English"]);
// var bellboy2 = new Bellboy("Jim",24,True,["Spanish", "Germany"]);



// test on crée un event listener dès qu'on tappe une touche il affiche l'évènement qui a déclenché la méthode addEventListener
// document.addEventListener("keydown", function() {
//   console.log(event);
// });
