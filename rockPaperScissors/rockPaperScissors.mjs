import randomInteger from "random-int";
import promptSync from "prompt-sync";

// The available choices
const choices = ["rock", "paper", "scissors"];

const userPrompt = "Please enter 0 for rock, 1 for paper, or 2 scissor "
let outcome = "Ready to play."



// computer chooses randomly
const computerChoice = randomInteger(0, 2);
const computerChoiceName = choices[computerChoice] 

// prompt the user for an input
const prompt = promptSync();
const userInput = prompt(userPrompt);
const userChoice = choices[userInput];

if (computerChoice === userChoice) {
    outcome = "Draw"
} else if (computerChoice === "rock" && userChoice === "paper") {
    outcome = "Player Wins";
} else if (computerChoice === "rock" && userChoice === "scissors") {
    outcome = "Computer Wins"
}  else if (computerChoice === "paper" && userChoice === "rock") {
    outcome = "Computer Wins";
} else if (computerChoice === "paper" && userChoice === " scissors") {
    outcome = "Player Wins"
}  else if (computerChoice === "scissors" && userChoice === "rock") {
    outcome = "Player Wins";
} else if (computerChoice === "scissors" && userChoice === "paper") {
    outcome = "Computer Wins"
} else {
    outcome = "Invalid entry. Please try again "
}

console.log("Computer chooses " + computerChoiceName);
console.log("Player choose " + userChoice);
console.log(outcome);













