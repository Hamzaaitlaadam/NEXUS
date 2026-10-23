let currentRoom=1;
let gameOver=false ;
let gameWon = false;
const onlyLetters = /^[a-z]+$/i;
let hasKeycard=false;
let dronesDisabled=false;
let passwordAttempts =3;

//esults from this function : if the player lose gameover = true if he wins curentroom = 2
function Corridor(){
    if(currentRoom >=1){
    let door ;
    let isValide=false;
    //cheking if the player inpute valide
    while(!isValide){
        door = prompt("Choose one door \u{1F6AA} \n\nOrange \u{1F7E0} or Blue \u{1F535}");
        if (door === null) return;
        door = door.trim().toLocaleLowerCase();
        if(!onlyLetters.test(door)){
            alert('This is not a valide choice!, try again.\n\nOrange \u{1F7E0} or Blue \u{1F535}.');
            continue;
        }
        if(!(door==='orange'||door==='blue')){
            alert('This is not a valide choice!, try again.\n\nOrange \u{1F7E0} or Blue \u{1F535}.');
            continue;
        }
        isValide = true;
    }
        switch(door){
            case "orange":
                alert("The door \u{1F6AA} slams shut behind you.");
                alert("🟠⚠️🟠 Orange warning lights flash!");
                alert("🕳️ The floor begins to disappear beneath your feet...");
                alert("🤖 NEXUS laughs: \"You trusted the wrong door. Every mistake has a price.\" 😈");
                alert("🕳️ You fall into an endless digital void...\n\n🌌 ░▒▓ ▓▒░ ░▒▓ ▓▒░");
                alert("💀 Your last sight is a message appearing in the darkness:");
                alert("🟦 SYSTEM ERROR 🟦\n\nPLAYER TERMINATED.\nNEXUS: 1  |  YOU: 0 \nGame Over.");
                gameOver= true;
                return;
            case "blue":
                alert("🟦🚪 The blue door slides open.");
                alert("🤖 A robotic voice says: \"Interesting. You have passed the first test.\"");
                alert("🚶 You enter the next room...");
                gameOver= false;
                currentRoom=2;
                return;
        }  
    }
    else{
        alert("🚫 UNAUTHORIZED ACCESS 🚫");
        alert("🤖 NEXUS: \"You don't have the right to be in this room.\" 😈"); 
        return;
    }
}
// if he pass gamewon = true , if he not game over = true
function EXIT_GATE(){
    if(currentRoom===4){
        let pass ;
        alert("🚪 You have reached a massive steel gate.\n\n☀️ Sunlight shines through a narrow crack.\n\n🏰💥 Behind you, the entire fortress begins to shake!");
        alert("🤖 NEXUS speaks one last time:\n\n\"You may have reached the gate, but you will never leave without my password.\" 😈");
        //checks
        if(hasKeycard && dronesDisabled){
            for (let i=0;i<3;i++){
                pass =prompt("🔐 Write the password to take you to freedom:\n\n⏳ Attempts left:" +passwordAttempts);
                if(pass === null) return ;
                if(pass !== null&&pass.toLocaleLowerCase() === 'rock paper scissors'){
                    alert("🔓 ACCESS GRANTED\n\n🌅 You are free!");
                    gameWon =true;
                    break;
                }
                alert("🔒 ACCESS DENIED\n\n🤖 NEXUS: \"Wrong. Hahahaha...\" 😈");
                passwordAttempts -- ;
            }
            alert("🔒 ACCESS DENIED\n\n🚫 No attempts left.");
            alert("🤖 NEXUS: \"You don't have the right to leave this place.\" 😈\n\n💀 GAME OVER");
            gameOver=true ;
        }else{
            alert("🔒 ACCESS DENIED\n\n🚫 You don't have the Key card.");
            alert("🤖 NEXUS: \"You don't have the right to leave this place.\" 😈\n\n💀 GAME OVER");
            gameOver = true ;
        }
    }else{
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
            hasKeycard = room2();
            if(gameOver){
            return;
            }else{
                dronesDisabled = room3();
                if(gameOver){
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
        game();
        playAgain = confirm(`Would you like to play again?`);
    }
    alert(`Thanks for playing`);
}
newGame();
