// Character
let CharacterInventory = {};
//Possible Items: Keys for Door,
// rooms with items >> interact different code
// little fight ?
// cube for random number gen >> if 15 >> something happens
// look at objects >> change them
// pick up items
// one room is one loop?
// what do i want to include?
// reduce, map, string methods, class, objects, spread operastor, conditionals, comma operator, array, loop, sort (character could sort a box
// Table Options
// throw a dice 3 times for whatever reason
// learn some math homework
//  read a coding book


import readlineSync from "readline-sync";

console.log(CharacterInventory);

console.log("You wake up in a Bed. You have a Strange feeling and you do not where you are. Everything is Dark, there is no Window. Only a small light comming from under what looks like a Door to you. What do you want to do now? ");
const firstDecision = readlineSync.question("Try to find a light Switch << Light >> or, Stay in Bed because this is just a Nightmare. << Bed >> ");

if (firstDecision === "Bed" || firstDecision === "bed") {
    console.log("You stay in Bed and fall asleep. Shortly after you are woken up by a really loud noise that is comming from the direction of the Door.");
    console.log("After starring into the Darkness in disbelieve you realise this can not be a Dream and you get up to look for a light Source.");
    readlineSync.keyInPause();
}
else if (firstDecision === "Light" || firstDecision === "light") {
    console.log("You get up to look for a Lightsource.");
    readlineSync.keyInPause();
}

console.log("You find a Light Switch and to your suprise it works like you would expect it to. The bright Light from the Ceiling Lamp blinds you a bit at first, but after a few seconds your eyes got used to it and you look around yourself. You are in a small Room.");
readlineSync.keyInPause();
const lookAroundRoom = readlineSync.question("You can see a few things. What do you want to inspect? << Door >>, << Bookshelf >>, << Study Desk >>, << TV Stand >>, << Bed >>, << Your Pockets >>");

// do{





// }while();
