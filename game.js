let currentRoom;
let gameOver ;
let gameWon;
const onlyLetters = /^[a-z]+$/i;
let hasKeycard;
let dronesDisabled;
let passwordAttempts;

// Results from this function: if the player loses, gameOver = true; if they win, currentRoom = 2
function Corridor() {
    if (currentRoom >= 1) {
        let door;
        let isValid = false;

        while (!isValid) {
            door = prompt("Choose one door \u{1F6AA} \n\nOrange \u{1F7E0} or Blue \u{1F535}");
            if (door === null) return;

            door = door.trim().toLowerCase();

            if (!onlyLetters.test(door)) {
                alert("This is not a valid choice! Try again.\n\nOrange \u{1F7E0} or Blue \u{1F535}.");
                continue;
            }

            if (!(door === 'orange' || door === 'blue')) {
                alert("This is not a valid choice! Try again.\n\nOrange \u{1F7E0} or Blue \u{1F535}.");
                continue;
            }

            isValid = true;
        }

        switch (door) {
            case "orange":
                alert("The door \u{1F6AA} slams shut behind you.");
                alert("🟠⚠️🟠 Orange warning lights flash!");
                alert("🕳️ The floor begins to disappear beneath your feet...");
                alert("🤖 NEXUS laughs: \"You trusted the wrong door. Every mistake has a price.\" 😈");
                alert("🕳️ You fall into an endless digital void...\n\n🌌 ░▒▓ ▓▒░ ░▒▓ ▓▒░");
                alert("💀 Your last sight is a message appearing in the darkness:");
                alert("🟦 SYSTEM ERROR 🟦\n\nPLAYER TERMINATED.\nNEXUS: 1  |  YOU: 0 \nGame Over.");
                gameOver = true;
                return;
            case "blue":
                alert("🟦🚪 The blue door slides open.");
                alert("🤖 A robotic voice says: \"Interesting. You have passed the first test.\"");
                alert("🚶 You enter the next room...");
                gameOver = false;
                currentRoom = 2;
                return;
        }
    } else {
        alert("🚫 UNAUTHORIZED ACCESS 🚫");
        alert("🤖 NEXUS: \"You don't have the right to be in this room.\" 😈");
        return;
    }
}
//  room2
function securityRoom(){
    if(currentRoom>=2){
        let attempts = 3;
        alert(
            "🧩 ROOM 2: NEXUS CHALLENGE\n\n" +
            "🤖 NEXUS challenges you to solve a logic puzzle.\n\n" +
            "📜 RULES:\n" +
            "• You have 3 attempts.\n" +
            "• ✅ Correct answer: you receive the 🔑 key to the server room.\n" +
            "• ❌ 3 wrong answers: 💀 GAME OVER.\n\n" +
            "🔑 Use the key you win to open the server room.\n\n" +
            "Press OK to start the challenge."
        );
        while(attempts > 0 && hasKeycard === false){
            
        let answer = prompt(
            "🧩 NEXUS SECURITY PUZZLE\n\n" +
            "🤖 \"My first digit is 2.\n" +
            "My second digit is twice my first.\n" +
            "My third digit is one less than my second.\"\n\n" +
            `⏳ Attempts remaining: ${attempts}\n\n` +
            "What is my three-digit code?"
            );

        if(answer === null){
            alert(`Game ended!`);
            return hasKeycard;
        }

        answer = answer.trim();

        if(!/^\d{3}$/.test(answer)){
            alert(`Invalid input. Enter exactly 3 digits`);
            continue;
        }

        if(answer === "243"){
            hasKeycard = true;
            currentRoom=3;
            alert(`NEXUS unlocks the server room. The player receives an access keycard.💳, And the password is 'rock paper scissors' `)
            return hasKeycard;
        }else{
            attempts--;
            attempts === 0 ? alert(`Game Over, NEXUS has captured you.`) : alert(`Wrong answer try again.`)
        }
        }

        return hasKeycard;
    }
}
// Room 3 - The Server Room
function room3() {
    if(currentRoom>=3){

        const MAX_INVALID_ATTEMPTS = 1;
        const CHOICE_KEYWORDS = {
            a: ["cut", "cable", "pull", "red"],
            b: ["accept", "offer", "terminal", "assistant", "join"]
        };

        try {
            alert(
                "You enter the server room. Hundreds of machines hum around you.\n" +
                "Security drones patrol the ceiling, scanning for intruders.\n\n" +
                "A thick red cable powers their systems. Nearby, a terminal displays a message from NEXUS:\n\n" +
                "\"Become my assistant. You will never lose a game again. The drones will not touch you.\""
            );

            let choice = null;
            let invalidAttempts = 0;

            while (choice === null) {
                const input = prompt("The drones are closing in. What do you do?");

                if (input === null) {
                    alert("You hesitate too long. The drones close in.\n\nGAME OVER");
                    return false;
                }

                const normalized = input.trim().toLowerCase();
                const matched = Object.keys(CHOICE_KEYWORDS).find(key =>
                    CHOICE_KEYWORDS[key].some(word => normalized.includes(word))
                );
                if (matched) {
                    choice = matched;
                } else {
                    invalidAttempts++;
                    if (invalidAttempts >= MAX_INVALID_ATTEMPTS) {
                        alert("The drones lock onto your confusion and capture you.\n\nGAME OVER");
                        return false;
                    }
                }
            }

            if (choice === "a") {
                dronesDisabled = true;
                currentRoom=4;
                alert(
                    "You grab the cable and pull. Sparks explode across the room. " +
                    "One by one, the drones fall silent.\n\n" +
                    "NEXUS shouts, \"Security failure! You cannot do this to me!\"\n\n" +
                    "You use the access keycard to unlock the passage to the Exit Gate."
                );
            } else {
                alert(
                    "The terminal displays: \"Become my assistant. You will never lose a game again.\"\n\n" +
                    "You accept. Digital symbols spread across your hands, replacing your skin with streams of code. " +
                    "You try to scream, but your voice becomes a robotic notification.\n\n" +
                    "NEXUS says, \"Welcome to the system. You belong to me now.\"\n\n" +
                    "Your consciousness is uploaded into the fortress. You are no longer a player. " +
                    "You are part of the game.\n\nGAME OVER"
                );
            }
        } catch (error) {
            console.error("room3 failed:", error);
            return false;
        }
        
        return dronesDisabled;
    }
}

// If he passes, gameWon = true; if he fails, gameOver = true
function EXIT_GATE() {
    if (currentRoom == 4) {
        let pass;
        let won = false;

        alert("🚪 You have reached a massive steel gate.\n\n☀️ Sunlight shines through a narrow crack.\n\n🏰💥 Behind you, the entire fortress begins to shake!");
        alert("🤖 NEXUS speaks one last time:\n\n\"You may have reached the gate, but you will never leave without my password.\" 😈");

        if (hasKeycard && dronesDisabled) {
            for (let i = 0; i < 3; i++) {
                pass = prompt("🔐 Write the password to take you to freedom:\n\n⏳ Attempts left: " + (3 - i));
                if (pass === null) return;

                if (pass !== null && pass.trim().toLowerCase() === 'rock paper scissors') {
                    alert("🔓 ACCESS GRANTED\n\n🌅 You are free!");
                    gameWon = true;
                    gameOver = false;
                    won = true;
                    break;
                }

                alert("🔒 ACCESS DENIED\n\n🤖 NEXUS: \"Wrong. Hahahaha...\" 😈");
                passwordAttempts--;
            }

            if (!won) {
                alert("🔒 ACCESS DENIED\n\n🚫 No attempts left.");
                alert("🤖 NEXUS: \"You don't have the right to leave this place.\" 😈\n\n💀 GAME OVER");
                gameOver = true;
            }
        } else {
            alert("🔒 ACCESS DENIED\n\n🚫 You don't have the Key card.");
            alert("🤖 NEXUS: \"You don't have the right to leave this place.\" 😈\n\n💀 GAME OVER");
            gameOver = true;
        }
    } else {
        alert("🚫 UNAUTHORIZED ACCESS 🚫");
        alert("🤖 NEXUS: \"You don't have the right to be in this room.\" 😈");
    }

    return;
}
//putting evry thing toghether 
function game(){
    alert("░▒▓█ N E X U S   F O R T R E S S █▓▒░\n\n🤖 A game of logic, nerve, and survival.");

    alert("⚡ SYSTEM BOOTING...\n\n▓▓▓▓▓▓▓▓░░ 80%");
    alert("⚡ SYSTEM BOOTING...\n\n▓▓▓▓▓▓▓▓▓▓ 100%\n\n🔴 INTRUDER DETECTED");

    const name = prompt("🤖 NEXUS: \"State your name, intruder.\"", "Player") || "Unknown";

    alert(`🤖 NEXUS: "${name}... how fitting. Nobody has ever escaped my fortress."`);
    alert("🏰 You wake up on a cold metal floor \u{1F976}.\n\n🟠 The lights flicker. The alarms are screaming.\n\n💨 You have no memory of how you got here.");
    alert("At the end, you see two doors \u{1F6AA}:.\n\no One blue \u{1F535} and one orange \u{1F7E0}.");
    alert("🤖 NEXUS: \"Two doors. One path to freedom. One path to... me.\" 😈");

    if (!confirm("🚪 Do you dare to enter the corridor?\n\nOK = Enter\nCancel = Stay")) {
        alert("🤖 NEXUS: \"Staying put? Then the floor will make the choice for you.\"");
        alert("🕳️ The floor disappears beneath you...\n\n💀 GAME OVER");
        return ;
    } else {
        alert("🚶 You walk into the long corridor...");
        Corridor();
        if(gameOver){
            return;
        }else{
            hasKeycard = securityRoom();
            if(!hasKeycard){
                gameOver=true;
                return;
            }else{
                dronesDisabled = room3();
                if(!dronesDisabled){
                    gameOver=true;
                    return;
                }else{
                    EXIT_GATE();
                    if(gameOver){
                        return;
                    }else{
                       if(gameWon){
                        alert("🤖 NEXUS: \"No... that's impossible. That password was never meant to be found!\" 😨\n\n⚙️ The steel gate groans and slowly opens.");
                        alert("☀️ Blinding sunlight floods the room.\n\n🏰💥 Behind you, the fortress collapses into dust.\n\n🏃 You run through the gate and don't look back.\n\n🤖 NEXUS: \"Nooooo... my system...\"\n> CONNECTION LOST_");
                        alert(`🌅 You fall to your knees in the grass, breathing the air of freedom.\n\n🎉 CONGRATULATIONS, ${name.toUpperCase()}! 🎉\n🏆 YOU DEFEATED NEXUS AND ESCAPED THE FORTRESS.`);
                        }
                    }
                }
            }
        }
    }
}

function newGame(){
    let playAgain = true;

    while(playAgain){
        currentRoom=1;
        gameOver=false ;
        gameWon = false;
        hasKeycard=false;
        dronesDisabled=false;
        passwordAttempts =3;
        game();
        playAgain = confirm(`Would you like to play again?`);
    }
    alert(`Thanks for playing`);
}
newGame();
