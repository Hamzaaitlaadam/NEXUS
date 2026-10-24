# Nexus game

A text-based escape game played through browser pop-ups. You wake up inside the NEXUS fortress and must outsmart the AI that controls it.

## Links

- Live game: https://hamzaaitlaadam.github.io/NEXUS/
- Frontend JS Part 1 (live site): https://yandiyong.github.io/Frontend-JS-Part-1/
- Frontend JS Part 1 (repository): https://github.com/YandiYong/Frontend-JS-Part-1

## How to play

Open `index.html` in a browser (or visit the live game). The game starts automatically and uses `alert`, `prompt` and `confirm` dialogs, so make sure your browser isn't blocking pop-ups. Cancelling most prompts ends the game.

## Rooms

1. **Corridor** – Choose the blue or orange door. One leads forward, the other ends the game.
2. **Security room** – Solve NEXUS's logic puzzle within 3 attempts to earn the keycard.
3. **Server room** – Decide how to deal with the drones. Type your own action; accepting NEXUS's offer ends the game.
4. **Exit gate** – Enter the password within 3 attempts to escape. You need the keycard and the drones disabled.

You win by escaping through the exit gate. After each game you can choose to play again.

## Project structure

- `index.html` – page that loads the game
- `game.js` – all game logic (`corridor`, `securityRoom`, `serverRoom`, `exitGate`, `game`, `newGame`)
