// reduce, map, string methods, class, objects, spread operastor, conditionals, comma operator, array, loop, sort (character could sort a box)

import { game } from "./PlayStation.js";
import readlineSync from "readline-sync";

// Character
let CharacterInventory = {};

// For Calendar Date
let currentDate = new Date();
const monthIndex = currentDate.getMonth();
currentDate = currentDate.toDateString();
// Outputs "Mon Aug 31 2020"

const monthlist = ["January", "Febuary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dezember"];
const month = monthlist[monthIndex];

// Starting Conditions
let doorOpen = false;
let equasionNote = false;
let keepgoing = true;



// read fun book facts

// Where are they Code Hints?
/*
- Calendar - 3B
- Playstation after winning > 7A
- Study Desk > gives Book Shelf Book Name
- Book Shelf > 6C


*/

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
                do {
                    let openDecision = false;
                    let openTheDoor = readlineSync.question("Do you want to Open the Door? << yes >>, << no >>");
                    if (openTheDoor === "yes" || openTheDoor === "Yes") {
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
        let AvailableBooks = readlineSync.question("The Bookshelf is taller then you and reaches up to the Ceiling of the Room. You guess that it must be around 3 Meters tall. << read >>, << back >>");
        let boolBook = true;
        do {
            if (AvailableBooks === "read" || AvailableBooks === "Read") {
                let shelfBooks = readlineSync.question("You see many Books in the Shelf. You take a closer look at some of the Books:");

            }
            else if (AvailableBooks === "back" || AvailableBooks === "Back") {
                boolBook = false;
            }
        } while (boolBook === true);
    }


    // Study Desk ( Calculator, Textbook with Math, Dice Game, Number Game, fibunachi?  with part of door code)
    else if (lookAroundRoom === "studydesk" || lookAroundRoom === "Studydesk") {
        console.log("You go to the Study Desk, sit down on the Office Chair in front of it and take a look at the Table. The Table is made out of Wood and is touching the Wall behind it. On the Wall is a Framed Picture containing just a Big Questionmark. The Table itself looks really new and there are only a few Items laying on it:");
        console.log("A Calculator, a Notebook, a Sandwich, a Bottle of Water and a Laptop.");
        let inspectingTable = true;
        let checkedNotebook = false;
        let lampLight = false;
        do {
            let tableItems = readlineSync.question("What do you want to Inspect? << Calculator >>, << Notebook >>, << Lamp >>, << back >>");
            if (tableItems === "Calculator" || tableItems === "calculator") {
                console.log(`An odd looking Calculator. Why? Trust me, it looks really odd.`);
                if (equasionNote === false) {
                    let calculate = readlineSync.question("Do you want to calculate something? << yes >>, << no >>");
                }
                if (calculate === "yes" || calculate === "Yes") {
                    let whatToCalculate = readlineSync.question("What do you want to calculate?");
                    console.log(`The Display of the calculator says the Answer to ${whatToCalculate} is: ERROR 404. Told you. Really odd calculator.`);
                }
            }
            else if (tableItems === "Notebook" || tableItems === "notebook") {
                do {
                    let noteBookBool = true;
                    let lookInside = readlineSync.question("A normal looking Notebook. Do i want to look inside? << yes >>, << nah >>");
                    if (lookInside === "yes" || lookInside === "Yes") {
                        if (checkedNotebook = false) {
                            console.log("I look inside the Notebook. The first Pages are all ... Empty? What about the Last Pages i wonder. I look at the last Pages. They are also empty. Looks like a normal, new Notebook to me. How boring. I will definately not look at this normal boring Notebook again. It is absolutely not helping me to escape this place at all!");
                            checkedNotebook = true;
                        }
                        else if (checkedNotebook = true) {
                            console.log("Alright i guess i am checking this Notebook again. Even though i am absolutely sure there is nothing special about it. First Pages are still empty, duh. Last Pages are still empty. So what about the Pages in the Middle you ask? Let me check.");
                            readlineSync.keyInPause();
                            console.log("Still checking");
                            readlineSync.keyInPause();
                            console.log("I am on Page 37 now");
                            readlineSync.keyInPause();
                            console.log("And i am Done!");
                            readlineSync.keyInPause();
                            if (lampLight === true) {
                                console.log("Wait. what?! I found something! The Light from the Lamp revealed an equasion. Well that's certainly a suprise!");
                                readlineSync.keyInPause();
                                console.log(`The equasion is: (8*4)-(5+2)÷1+3%4. Why would someone hide an equasion? Let me wrip it out the Notebook. *Note Added*`);
                                equasionNote = true;
                            }
                            else {
                                console.log("I checked every Single Page. They are all Empty. Nothing special here. No secrets. Just a totally Random Empty Notebook that is not related to my Escape at all. Told you. Just do not let me check it again please okay?");
                            }
                        }
                        else if (lookInside === "nah" || lookInside === "Nah") {
                            noteBookBool = false;
                        }
                        else {
                            console.log("Notebook....");
                        }
                    }
                } while (noteBookBool = true);
            }
            else if (tableItems === "Lamp" || tableItems === "lamp") {
                console.log("A small standing Lamp to help read in the Dark. It is turned off.");
                do {
                    let leaveLamp = false;
                    let switchLamp = readlineSync.question("Turn it on? << yes >>, << no >>");
                    if (switchLamp === "yes" || switchLamp === "Yes") {
                        console.log("I totally turned this Lamp on. I am telling you it is really turned on now. But why does it have a Blue light?");
                        lampLight = true;
                    }
                    else if (switchLamp === "no" || switchLamp === "No") {
                        leaveLamp = true;
                    }
                    else {
                        console.log("Decisions, Decisions, Decisions...");
                    }
                } while (leaveLamp === false);

            }
        } while (inspectingTable = true);
    // Night Stand with Gameboy(FizzBuzz? + Clue)

    // Calendar
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

        // Wall Clock
        else if (lookAroundRoom === "WallClock" || lookAroundRoom === "wallclock" || lookAroundRoom === "Wallclock") {
            console.log("You look at the Clock on the Wall that is hanging right above the Door.");
            let todayTime = new Date();
            let time = todayTime.getHours() + ":" + todayTime.getMinutes()
            console.log(`${time}`);
        }

        // TV Stand ( playstation code note)
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