// Room 3 - The Server Room
function room3() {
    const MAX_INVALID_ATTEMPTS = 3;
    let droneDisabled = false;

    try {
        alert(
            "You enter the server room. Hundreds of machines hum around you.\n" +
            "Security drones patrol the ceiling, scanning for intruders.\n\n" +
            "A thick red cable powers their systems. Nearby, a terminal displays a message from NEXUS."
        );

        let choice = null;
        let invalidAttempts = 0;

        while (choice === null) {
            const input = prompt(
                "Choose:\n" +
                "A - Cut the red cable\n" +
                "B - Accept NEXUS's offer"
            );

            if (input === null) {
                alert("You hesitate too long. The drones close in.\n\nGAME OVER");
                return false;
            }

            const normalized = input.trim().toLowerCase();
            if (normalized === "a" || normalized === "b") {
                choice = normalized;
            } else {
                invalidAttempts++;
                if (invalidAttempts >= MAX_INVALID_ATTEMPTS) {
                    alert("The drones lock onto your confusion and capture you.\n\nGAME OVER");
                    return false;
                }
                alert("Invalid choice. Please enter A or B. (" +
                    (MAX_INVALID_ATTEMPTS - invalidAttempts) + " attempt(s) left)");
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
