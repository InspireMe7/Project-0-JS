// Character
let CharacterInventory = {};
//Possible Items: Keys for Door,
// rooms with items >> interact different code
// cube for random number gen >> if 15 >> something happens
// look at objects >> change them
// pick up items

// reduce, map, string methods, class, objects, spread operastor, conditionals, comma operator, array, loop, sort (character could sort a box


// sort a list?
// calculator?
// dice random roll?
// go to the bathroom?
// pick up a sandwich?
// read fun book facts



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
let lookAroundRoom = readlineSync.question("You can see a few things. What do you want to inspect? << Door >>, << Bookshelf >>, << Studydesk >>, << TVstand >>, << Bed >>, << MyPockets >>");

// do{
lookAroundRoom = readlineSync.question("What do you want to Inspect now? << Door >>, << Bookshelf >>, << Studydesk >>, << TVstand >>, << Bed >>, << MyPockets >>");


//Door
if(lookAroundRoom === "door" || lookAroundRoom === "Door"){
    console.log("The Door is locked and i do not have the right Key yet.");
}

// Bookshelf
else if(lookAroundRoom === "bookshelf" || lookAroundRoom === "Bookshelf"){
    let AvailableBooks = readlineSync("There are actually some Books in the Book Shelf. Do you want to read some Books? << read >>, << back >>");
    do{
        if(AvailableBooks === "read" || AvailableBooks === "Read"){

        }
        else if(AvailableBooks === "back" || AvailableBooks === "Back"){
            bool = false;
        }
    }while(bool === true);


// Study Desk
else if(lookAroundRoom === "studydesk" || lookAroundRoom === "Studydesk"){

}

// TV Stand
else if(lookAroundRoom === "tvstand" || lookAroundRoom === "TVstand"){
    let InspectTvStand = readlineSync("You go to the TV Stand and take a look. To your Suprise there is a Fully Functional Playstation under the TV Stand! Do you want to try the Playstation or do you want to Inspect something else in the Room? << Playstation >>, << back>>");
    do{
        InspectTvStand = readlineSync("Play or look at something else in the Room? << Playstation >>, << back >>");
        if(InspectTvStand === "playstation" || InspectTvStand === "Playstation"){
            
        }
        else if(InspectTvStand === "back" || InspectTvStand === "Back"){
            bool = false;
        }
        else{
            console.log("Stop picking your Nose and make a decision. << Playstation >>, << back >>");
        }
    }while(bool === true);

}


// Bed
else if(lookAroundRoom === "bed" || lookAroundRoom === "Bed"){
    console.log("It is still warm.");
}
else if(lookAroundRoom === "mypockets" || lookAroundRoom === "MyPockets"){
    console.log("They are Empty. Where is my Stuff?");
}
else{
    console.log("How do you spell words again?");
};


// }while(CharacterInventory === {});


