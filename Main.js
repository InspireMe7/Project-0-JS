// reduce, map, string methods, class, objects, spread operastor, conditionals, comma operator, array, loop, sort (character could sort a box)

import { game } from "./PlayStation.js";
import readlineSync from "readline-sync";

// Character
let CharacterInventory = [];

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
let checkedNotebook = false;
let lampLight = false;
let checkAgain = true;
let bookShelfNote = false;
let PlayerWon = false;
let wrotedown = false;


// read fun book facts

// Where are they Code Hints?
/*
- Calendar - 3B
- Playstation after winning > 7A
- Study Desk > gives Book Shelf Book Name
- Book Shelf > 6C


*/

console.log("You wake up in a Bed. You have a Strange feeling and you do not know where you are. Everything is Dark, there is no Window. Only a small light comming from under what looks like a Door to you. What do you want to do now? ");
let bedLightBool = true;
do {
    const firstDecision = readlineSync.question("Try to find a light Switch << Light >> or, Stay in Bed because this is just a Nightmare. << Bed >> ");
    if (firstDecision === "Bed" || firstDecision === "bed") {
        bedLightBool = false;
        console.log("You stay in Bed and fall asleep. Shortly after you are woken up by a really loud noise that is comming from the direction of the Door. Sounds like a furious Knocking...");
        readlineSync.keyInPause();
        console.log("After starring into the Darkness in disbelieve you realise this can not be a Dream and you get up to look for a light Source.");
        readlineSync.keyInPause();
    }
    else if (firstDecision === "Light" || firstDecision === "light") {
        bedLightBool = false;
        console.log("You get up to look for a Lightsource.");
        readlineSync.keyInPause();
    }
    else {
        console.log("Ugh. Try again.");
    }
} while (bedLightBool === true);

console.log("You find a Light Switch. It works like you would expect a Light Switch to work. It switched on the Lights. The bright Light from the Ceiling Lamp blinds you a bit at first, but after a few seconds your eyes got used to it and you look around yourself. You are in a small Room.");
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
        let boolBook = true;
        if (bookShelfNote = false) {
            let AvailableBooks = readlineSync.question("The Bookshelf is taller then you and reaches up to the Ceiling of the Room. You guess that it must be around 3 Meters tall. On first Glance all i can see are dusty Old Books. They are all sorted by a Number. Book Number 1 is a really dusty Version of the Bible. << back >>");
            do {
                if (AvailableBooks === "back" || AvailableBooks === "Back") {
                    boolBook = false;
                }
            } while (boolBook === true);
        }
        else {
            console.log("The Bookshelf is taller then you and reaches up to the Ceiling of the Room. You guess that it must be around 3 Meters tall. On first Glance all i can see are dusty Old Books. They are all sorted by a Number. Book Number 1 is a really dusty Version of the Bible. I wonder which Book is placed on Number 42?");
            let booksWithNote = readlineSync.question("Check Book at Number 42: << check >>, << back >>");
            do {
                if (booksWithNote === "check" || booksWithNote === "Check") {
                    console.log("Well well well. What do we have here?");
                    readlineSync.keyInPause();
                    console.log("Douglas Adams's 1979 novel, The Hitchhiker's Guide to the Galaxy.");
                    readlineSync.keyInPause();
                    console.log("You start to leaf through the book and forget about your Surroundings for a moment.");
                    readlineSync.keyInPause();
                    console.log("What is that? In the middle of the Book you find a Note. It says: 6C");
                    CharacterInventory.push("6C");
                    console.log("I better write this down on a Note and put it in my Pocket.");
                    boolBook = false;
                }
                else if (booksWithNote === "back" || booksWithNote === "Back") {
                    boolBook = false;
                }

            } while (boolBook === true);
        }
    }


    // Study Desk
    else if (lookAroundRoom === "studydesk" || lookAroundRoom === "Studydesk") {
        console.log("You go to the Study Desk, sit down on the Office Chair in front of it and take a look at the Wooden Table. It is touching the Wall behind it. On the Wall is a Framed Picture containing just a Big Black Questionmark. The Table itself looks really new and there are only a few Items laying on it:");
        console.log("A Calculator, a Notebook and a standing Lamp.");
        let inspectingTable = true;
        do {
            let tableItems = readlineSync.question("What do you want to Inspect? << Calculator >>, << Notebook >>, << Lamp >>, << back >>");
            // Calculator
            if (tableItems === "Calculator" || tableItems === "calculator") {
                console.log(`An odd looking Calculator. Why? Trust me, it looks really odd.`);
                let calculatingBool = true;
                do {
                    let calculate = readlineSync.question("Do you want to calculate something? << yes >>, << no >>, << maybe >>");
                    if (calculate === "yes" || calculate === "Yes") {
                        if (equasionNote === false) {
                            let whatToCalculate = readlineSync.question("What do you want to calculate?");
                            console.log(`The Display of the Calculator says the Answer to ${whatToCalculate} is: ERROR 404.`);
                        }
                        else {
                            console.log("What do you want to calculate?");
                            let equasionCalc = readlineSync.question("The equasion from the Notebook: << Equasion >>, Something else: << ... >>");
                            if (equasionCalc === "Equasion" || equasionCalc === "equasion") {
                                console.log("You type in the equasion from the Notebook.");
                                console.log("40-(2+1)÷3+3%4");
                                readlineSync.keyInPause();
                                console.log(" 42 ");
                                readlineSync.keyInPause();
                                console.log(" 42?");
                                readlineSync.keyInPause();
                                console.log(" 42 ... ");
                                readlineSync.keyInPause();
                                console.log("Of course! 42! The ultimate question of life, the universe, and everything!");
                                readlineSync.keyInPause();
                                console.log("Well at least in Douglas Adams's 1979 novel, The Hitchhiker's Guide to the Galaxy.");
                                console.log("But... why would someone hide an equasion that equals 42 just to reference a Book? *Note Added*");
                                bookShelfNote = true;
                            }
                            else {
                                console.log(`The Display of the Calculator says the Answer to "${equasionCalc}" is: ERROR 404.`);
                            }
                        }
                    }
                    else if (calculate === "no" || calculate === "No") {
                        calculatingBool = false;
                    }
                    else if (calculate === "Maybe" || calculate === "maybe") {
                        console.log("To Calculate, or not to Calculate, that is the Question!");
                    }
                    else {
                        console.log("I hate Math.");
                    }
                } while (calculatingBool === true);
            }
            // Notebook
            else if (tableItems === "Notebook" || tableItems === "notebook") {
                let noteBookBool = true;
                do {
                    if (checkAgain === true) {
                        let lookInside = readlineSync.question("A normal looking Notebook. Do i want to look inside? << yes >>, << nah >>");
                        if (lookInside === "yes" || lookInside === "Yes") {
                            if (checkedNotebook === false) {
                                console.log("I look inside the Notebook. The first Pages are all Empty. What about the Last Pages i wonder. I look at the last Pages. They are also empty. Looks like a normal, new Notebook to me. How boring. I will definately not look at this normal boring Notebook again. It is absolutely not helping me to escape this place at all!");
                                checkedNotebook = true;
                                noteBookBool = false;
                            }
                            else if (checkedNotebook === true) {
                                console.log("Alright i guess i am checking this Notebook again. Even though i am absolutely sure there is nothing special about it. First Pages are still empty, duh. Last Pages are still empty. So what about the Pages in the Middle you ask? Let me check.");
                                readlineSync.keyInPause();
                                console.log("Still checking");
                                readlineSync.keyInPause();
                                console.log("I am on Page 17 now");
                                readlineSync.keyInPause();
                                console.log("Page 24");
                                readlineSync.keyInPause();
                                console.log("Page 30...");
                                readlineSync.keyInPause();
                                console.log("Done!");
                                readlineSync.keyInPause();
                                if (lampLight === true) {
                                    console.log("Wait. what?! I found something! The Light from the Lamp revealed an equasion. Well that's certainly a suprise!");
                                    readlineSync.keyInPause();
                                    console.log(`The equasion is: 40-(2+1)÷3+3%4. Why would someone hide an equasion? Let me rip out the part with the equasion. *Note Added*`);
                                    equasionNote = true;
                                    checkAgain = false;
                                }
                                else {
                                    console.log("I checked every Single Page. They are all Empty. Nothing special here. No secrets. Just a totally Random Empty Notebook that is not related to my Escape at all. Told you. Just do not let me check it again please okay?");
                                    noteBookBool = false;
                                }
                            }
                            else if (lookInside === "nah" || lookInside === "Nah") {
                                noteBookBool = false;
                            }
                            else {
                                console.log("Notebook....");
                            }
                        }
                        else if (lookInside === "nah" || lookInside === "Nah") {
                            console.log("naaaah");
                            noteBookBool = false;
                        }
                        else {
                            console.log("I was not Daydreaming.");
                        }
                    }
                    else {
                        console.log("I had enough of this Notebook.");
                        noteBookBool = false;
                    }
                } while (noteBookBool === true);
            }
            // Lamp
            else if (tableItems === "Lamp" || tableItems === "lamp") {
                console.log("A small standing Lamp to help read in the Dark. It is turned off.");
                let leaveLamp = false;
                do {
                    let switchLamp = readlineSync.question("Turn it on? << yes >>, << no >>");
                    if (switchLamp === "yes" || switchLamp === "Yes") {
                        console.log("I totally turned this Lamp on. I am telling you it is really turned on now. But why does it have a Blue light?");
                        lampLight = true;
                        leaveLamp = true;
                    }
                    else if (switchLamp === "no" || switchLamp === "No") {
                        console.log("The ceiling Lamp is bright enough.");
                        leaveLamp = true;
                    }
                    else {
                        console.log("Decisions, Decisions, Decisions...");
                    }
                } while (leaveLamp === false);

            }
            else if (tableItems === "Back" || tableItems === "back") {
                inspectingTable = false;
            }
            else {
                console.log("How hard can it be to pick one of those Items?");
            }
        } while (inspectingTable === true);
    }
    // Night Stand with Gameboy(FizzBuzz? + Clue)

    // Calendar
    else if (lookAroundRoom === "Calendar" || lookAroundRoom === "calendar") {
        console.log("You notice a Calendar hanging between the Study Desk and the Door.");
        console.log(`According to this Calendar today is ${currentDate}.`);
        readlineSync.keyInPause();

        let calendarBool = true;
        do {
            let calendartext = readlineSync.question("What do you want to do now? << Inspect >>, << back >>");
            if (calendartext === "Inspect" || calendartext === "inspect") {
                console.log(`You take a closer look at the Calendar and notice that one Date is Circled in Red and has a Big Red "B" written on it. It is the 3rd of ${month}.`);
                console.log("B3 ... Maybe that means something?");
                readlineSync.keyInPause();
                console.log("Just in case i will write it down on a Note and put it into my Pocket");
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
        readlineSync.keyInPause();
        console.log("i don't know what i expected.");
    }

    // TV Stand ( playstation code note)
    else if (lookAroundRoom === "tvstand" || lookAroundRoom === "TVstand") {
        console.log("You go to the TV Stand and take a look. To your Suprise there is a Fully Functional Playstation under the TV Stand!");
        let boolTV = true;
        do {
            let InspectTvStand = readlineSync.question("Play or look at something else in the Room? << Play >>, << back >>");
            if (InspectTvStand === "play" || InspectTvStand === "Play") {
                let didPlayerWin = game(PlayerWon);
                    if(didPlayerWin === true && wrotedown === false){
                        console.log("You are happy that you won. But then the Screen turned Black and showed some white Letters: 7A.");
                        readlineSync.keyInPause();
                        console.log("Did they really just give me a Hint for winning a Video Game?");
                        readlineSync.keyInPause();
                        console.log("...");
                        readlineSync.keyInPause();
                        console.log("I mean ...");
                        readlineSync.keyInPause();
                        console.log("You know what i will take it. Let's write this Down.");
                        // CharacterInventory.push("7A");
                        wrotedown = true;
                    }
                    else if(didPlayerWin === true && wrotedown === true){
                        console.log("I already wrote down the Code. I keep playing 'cause i love this Game!");
                    }
            }
            else if (InspectTvStand === "back" || InspectTvStand === "Back") {
                boolTV = false;
            }
            else {
                console.log("Come on let's play");
            }
        } while (boolTV === true);

    }

    // Bed ( first note of other notes)
    else if (lookAroundRoom === "bed" || lookAroundRoom === "Bed") {
        console.log("It is still warm.");
    }

    // Pocket (Inventory, collects stuff)
    else if (lookAroundRoom === "mypockets" || lookAroundRoom === "MyPockets") {
        if (CharacterInventory === undefined) {
            console.log("They are Empty. Where is my Stuff?");
        }
        else {
            console.log(CharacterInventory);
        }
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
