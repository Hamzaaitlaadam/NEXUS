
let attempts = 3;
let hasKey =false;

alert(`You're trapped inside the digital fortess controlled by NEXUS.\n 

Room 2-> NEXUS Challenge: NEXUS challenges the player to solve a logic puzzle.
            The player has three attempts.
            - Correct answer → Receive the key to unlock server room.
            - Three wrong answers → Game Over.\n
      ->The player must use the key won to open the server room.
            
            Press OK to begin the game.`)



function securityRoom(){
    alert(`Hello Human welcome to the NEXUS challenge.`);

    while(attempts > 0 && hasKey === false){
         
     let answer = prompt(
      `NEXUS SECURITY PUZZLE\n
       "My first digit is 2.\n
       My second digit is twice my first.\n
       My third digit is one less than my second."\n
       Attempts remaining: ${attempts}\n
       What is my three-digit code?`
    );

      if(answer === null){
         alert(`Game ended!`);
         return hasKey;
      }

      answer = answer.trim();

      if(!/^\d{3}$/.test(answer)){
         alert(`Invalid input. Enter exactly 3 digits`);
         continue;
      }

      if(answer === "243"){
        hasKey = true;
        alert(`NEXUS unlocks the server room. The player receives an access keycard.💳`)
        return hasKey;
      }else{
         attempts--;

         attempts === 0 ? alert(`Game Over, NEXUS has captured you.`) : alert(`Wrong answer try again.`)
      }
    }

    return hasKey;
}

function startGame(){
    let startAgain = true;

    while(startAgain){
        attempts = 3;
        hasKey = false;

         const result = securityRoom();
        
        startAgain = confirm(`Would you like to play again?`);
    
    }
  alert(`Thanks for playing!`);
}

startGame();


// Room 3 - The Server Room
function room3() {
    const MAX_INVALID_ATTEMPTS = 1;
    const CHOICE_KEYWORDS = {
        a: ["cut", "cable", "pull", "red"],
        b: ["accept", "offer", "terminal", "assistant", "join"]
    };
    let droneDisabled = false;

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
            droneDisabled = true;
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
    
    return droneDisabled;
}
