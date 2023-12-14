import randomInteger from "random-int" //3
import PromptSync from "prompt-sync"; //5

1 // The available choices
const choices = ["rock","paper","scissors"];
// 7
const userPrompt = "please enter 0 for rock, 1 for paper, or 2 for scissors .";
let outcome = "Ready to Play.";  //10

2 // computer chooses randomly
const computerChoice = randomInteger(0, 2);
console.log(computerChoice);
// 4
const computerChoiceName = choices[computerChoice]
console.log(computerChoiceName);

6 // prompt the user for input
const prompt = PromptSync();
const userInput = prompt(userPrompt)
// console.log(userInput);
// 8
let userChoice = choices[userInput];
// console.log(userChoice);
// 9
if (computerChoiceName === userChoice) {
    outcome = "Draw";
} else if (computerChoiceName === "rock" && userChoice === "paper"){
    outcome = "Player wins";
} else if (computerChoiceName === "rock" && userChoice === "scissors"){
    outcome = "Computer wins";
} else if (computerChoiceName === "paper" && userChoice === "rock"){
    outcome = "Computer wins";
} else if (computerChoiceName === "paper" && userChoice === "scissors"){
    outcome = "Player wins";
} else if (computerChoiceName === "scissors" && userChoice === "rock"){
    outcome = "Player wins";
} else if (computerChoiceName === "scissors" && userChoice === "paper"){
    outcome = "Computer wins";
} else {
    outcome = "Invalid entry. Please try again.";
}

console.log("Computer chooses " + computerChoiceName);
console.log("Player chooses " + userChoice);
console.log(outcome);

