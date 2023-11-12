import { game } from "./PlayStation.js";
import readlineSync from "readline-sync";
// Character
let CharacterInventory = {};

// For Calendar Date
let currentDate = new Date();
const monthIndex = currentDate.getMonth();
currentDate = currentDate.toDateString();

const monthlist = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dezember"];
const month = monthlist[monthIndex];

let doorOpen = false;
// Outputs "Mon Aug 31 2020"

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
// text codes: book, calendar, playstation, study desk dice, note on bed

let keepgoing = true;

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
do {
    let lookAroundRoom = readlineSync.question("What do you want to Inspect? << Door >>, << Bookshelf >>, << Studydesk >>, << TVstand >>, << Bed >>, << WallClock >>, << Calendar>>, << Nightstand >>, << MyPockets >>");


    //Door ( it is an electrical door)
    if (lookAroundRoom === "door" || lookAroundRoom === "Door") {
        let codeBlock = true;
        do {
            if (doorOpen === false) {
                let typeCode = readlineSync.question("The Door is locked. You can see an electronical Lock with a Num Pad next to it. Do you want to type in a Code? << Code >>, << back>>");
                if (typeCode === "Code" || typeCode === "code") {
                    let tryAgain = false;
                    do {
                        let code = readlineSync.question("Please Enter the Code: ");
                        if (code === "nanana") {
                            doorOpen = true;
                            tryAgain = false;
                            console.log("You hear a clicking Sound comming from the Door. It sounded like something was moving.");
                        }
                        else {
                            let wrongCode = readlineSync.question("Wrong Code. Try again? << again >>, << back >>");
                            if (wrongCode === "again" || wrongCode === "Again") {
                                tryAgain = true;
                            }
                            else if (wrongCode === "back" || wrongCode === "Back") {
                                tryAgain = false;
                            }
                            else {
                                console.log("uh i think my finger slipped.");
                            };
                        };
                    } while (tryAgain === true);

                }
                else if (typeCode === "Back" || typeCode === "back") {
                    codeBlock = false;
                }
                else {
                    console.log("Do i want to try opening the Door or not?");
                }
            }
            else {
                let openDecision = false;
                do {
                    let openTheDoor = readlineSync.question("Do you want to Open the Door? << yes >>, << no >>");
                    if (openTheDoor === "yes" ||openTheDoor === "Yes") {
                        codeBlock = false;
                        keepgoing = false;
                        openDecision = true;
                    }
                    else if (openTheDoor === "no" || openTheDoor === "No") {
                        console.log("I mean why would i want to leave this Room anyway. I rather take another look around and come back to the Door later.");
                        openDecision = true;
                        codeBlock = false;
                    }
                    else {
                        console.log("Once again i do not know what i want to do here. This whole Situation is just really confusing.");
                    }
                } while (openDecision = false);
            }
        } while (codeBlock === true);
    }

    // Bookshelf ( Books, part of code)
    else if (lookAroundRoom === "bookshelf" || lookAroundRoom === "Bookshelf") {
        let AvailableBooks = readlineSync.question("There are actually some Books in the Book Shelf. Do you want to read some Books? << read >>, << back >>");
        let boolBook = true;
        do {
            if (AvailableBooks === "read" || AvailableBooks === "Read") {
                let shelfBooks = readlineSync.question("You see some Books in the Shelf with different Topics. Which one do you want to read? << Animals >>, << Psysics >>, << Programming >>, << Cooking >>");
            }
            else if (AvailableBooks === "back" || AvailableBooks === "Back") {
                boolBook = false;
            }
        } while (boolBook === true);
    }


    // Study Desk ( Calculator, Textbook with Math, Dice Game, Number Game, fibunachi?  with part of door code)
    else if (lookAroundRoom === "studydesk" || lookAroundRoom === "Studydesk") {

    }
    // Night Stand with Gameboy(FizzBuzz? + Clue)

    // Calendar (Date Method + Hint 3B)
    // Am i really looking at a Calendar in a Room? How will that help me?
    else if (lookAroundRoom === "Calendar" || lookAroundRoom === "calendar") {
        console.log("You notice a Calendar hanging between the Study Desk and the Door.");
        console.log(`According to this Calendar today is ${currentDate}.`);
        readlineSync.keyInPause();

        let calendarBool = true;
        do {
            let calendartext = readlineSync.question("What do you want to do now? << Inspect >>, << back >>");
            if (calendartext === "Inspect" || calendartext === "inspect") {
                console.log(`You take a closer look at the Calendar and notice that one Date is Circled in Red and has a Big Red "B" written on it. It is the 3rd of ${month}.`);
                console.log("Maybe that means something?");
                readlineSync.keyInPause();
            }
            else if (calendartext === "Back" || calendartext === "back") {
                calendarBool = false;
                console.log("You turn around and look into the Room.");
            }
            else {
                console.log("Uhmn...");
                readlineSync.keyInPause();
            }
        } while (calendarBool === true);
    }

    // Wall Clock ( other hint? )
    else if (lookAroundRoom === "WallClock" || lookAroundRoom === "wallclock" || lookAroundRoom === "Wallclock") {
        console.log("You look at the Clock on the Wall that is hanging right above the Door. It Shows 7. It is not clear if that is P.M. or A.M...");
    }

    // TV Stand P( playstation code note)
    else if (lookAroundRoom === "tvstand" || lookAroundRoom === "TVstand") {
        console.log("You go to the TV Stand and take a look. To your Suprise there is a Fully Functional Playstation under the TV Stand!");
        let boolTV = true;
        do {
            let InspectTvStand = readlineSync.question("Play or look at something else in the Room? << Play >>, << back >>");
            if (InspectTvStand === "play" || InspectTvStand === "Play") {
                game();
            }
            else if (InspectTvStand === "back" || InspectTvStand === "Back") {
                boolTV = false;
            }
            else {
                console.log("Stop picking your Nose and make a decision. << Playstation >>, << back >>");
            }
        } while (boolTV === true);

    }

    // Bed ( first note of other notes)
    else if (lookAroundRoom === "bed" || lookAroundRoom === "Bed") {
        console.log("It is still warm.");
    }

    // Pocket (Inventory, collects stuff)
    else if (lookAroundRoom === "mypockets" || lookAroundRoom === "MyPockets") {
        console.log("They are Empty. Where is my Stuff?");
    }


    // For spelling Error
    else {
        console.log("How do you spell words again?");
    };

} while (keepgoing === true);

console.log(`You slowly grab the Doorknob and take a big Breath. "I really hope the Door is open now.`)
readlineSync.keyInPause();
console.log("You gently turn the Doorknob and feel how the Door slowly Opens. You did it. You escaped!");


// You finally open the door...)