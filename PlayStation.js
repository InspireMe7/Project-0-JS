import readlineSync from "readline-sync";

export function game(playerWon) {
    function CreateCharacter(Name, Health, Punsh, Kick, Miss, Heal) {
        this.Name = Name;
        this.Health = Health;
        this.Punsh = Punsh;
        this.Kick = Kick;
        this.Miss = Miss;
        this.Heal = Heal;

    };

    let PlayerCharacter, EnemyCharacter;
    let AttackerCharacter, AttackedCharacter;

    let playAgainBool = true;

    console.log("The only Game your have is a 2D Fighting Game called Street Boxing. Your Favourite Game.");
    readlineSync.keyInPause();
    console.log(" Weird.");
    readlineSync.keyInPause();
    console.log("After a short loading time you are now on the character Selection Screen.");

    do {
        let playAgain = readlineSync.question("Are you ready to play Street Boxing? << << yes >>, << no >>");
        if (playAgain === "yes" || playAgain === "Yes") {

            const Eduard = new CreateCharacter("Eduard", 200, 4, 6, 0, 20);
            const Kuroko = new CreateCharacter("Kuroko", 100, 8, 12, 0, 10);
            const Sabine = new CreateCharacter("Sabine", 50, 17, 23, 0, 5);

            do {
                let CharacterSelected = true;
                do {
                    const GameBooting = readlineSync.question("You have 3 Options: 'Eduard', 'Kuroko', 'Sabine'. Whom do you choose? << Eduard >>(Health 200, Damage 4, Damage 6, Heal 20), << Kuroko >>(Health 100, Damage 8, Damage 12, Heal 10), << Sabine >> (Health 50, Damage 17, Damage 23, Heal 5)");


                    if (GameBooting === "Eduard" || GameBooting === "eduard") {
                        PlayerCharacter = Eduard;
                    }
                    else if (GameBooting === "Kuroko" || GameBooting === "kuroko") {
                        PlayerCharacter = Kuroko;
                    }
                    else if (GameBooting === "Sabine" || GameBooting === "sabine") {
                        PlayerCharacter = Sabine;
                    }
                    else {
                        console.log("Character not Recognized.");
                        CharacterSelected = false;
                    }
                } while (CharacterSelected === false);
            }
            while (PlayerCharacter === undefined);

            do {
                let EnemyRandom = Math.floor((Math.random() * 2) + 1);
                if (EnemyRandom === 0) {
                    EnemyCharacter = Eduard;
                }
                else if (EnemyRandom === 1) {
                    EnemyCharacter = Kuroko;
                }
                else if (EnemyRandom === 2) {
                    EnemyCharacter = Sabine;;
                };
            } while (EnemyCharacter === PlayerCharacter);

            console.log(`You are playing with ${PlayerCharacter.Name}.`);
            console.log(`Your Enemy is ${EnemyCharacter.Name}.`);
            console.log("The Game is Starting. Fight !!!");
            readlineSync.keyInPause();


            AttackerCharacter = PlayerCharacter;
            AttackedCharacter = EnemyCharacter;

            do {
                if (AttackerCharacter === PlayerCharacter) {
                    PlayerCharacter = AttackerCharacter;
                    EnemyCharacter = AttackedCharacter;
                    AttackerCharacter = EnemyCharacter;
                    AttackedCharacter = PlayerCharacter;
                }
                else if (AttackerCharacter === EnemyCharacter) {
                    EnemyCharacter = AttackerCharacter;
                    PlayerCharacter = AttackedCharacter;
                    AttackerCharacter = PlayerCharacter;
                    AttackedCharacter = EnemyCharacter;
                }

                let ActionRoll = Math.floor((Math.random() * 4) + 1);

                if (ActionRoll === 1) {
                    AttackedCharacter.Health -= AttackerCharacter.Punsh;
                    console.log(`${AttackerCharacter.Name} dealt ${AttackerCharacter.Punsh} Damage to ${AttackedCharacter.Name} by Punshing them! ${AttackedCharacter.Name}'s Health  ${AttackedCharacter.Health} now!`);
                }
                else if (ActionRoll === 2) {
                    AttackedCharacter.Health -= AttackerCharacter.Kick;
                    console.log(`${AttackerCharacter.Name} dealt ${AttackerCharacter.Kick} Damage to ${AttackedCharacter.Name} by Kicking them! ${AttackedCharacter.Name}'s Health is ${AttackedCharacter.Health} now!`);
                }
                else if (ActionRoll === 3) {
                    console.log(`Miss ! ${AttackerCharacter.Name} dealt ${AttackerCharacter.Miss} Damage to ${AttackedCharacter.Name}.`);
                }
                else if (ActionRoll === 4) {
                    AttackerCharacter.Health += AttackerCharacter.Heal;
                    console.log(`${AttackerCharacter.Name} healed by ${AttackerCharacter.Heal} Points! ${AttackerCharacter.Name}'s Health is ${AttackerCharacter.Health} now!`);
                }

                if (PlayerCharacter.Health <= 0) {
                    console.log("You lost!");
                }
                else if (EnemyCharacter.Health <= 0) {
                    console.log("You won!");
                    readlineSync.keyInPause();
                    return playerWon = true;
                }
            } while (PlayerCharacter.Health > 0 && EnemyCharacter.Health > 0);
        }
        else if (playAgain === "No" || playAgain === "no") {
            playAgainBool = false;
        }
        else {
            console.log("Come on just one round!");
        }
    } while (playAgainBool === true);
};
