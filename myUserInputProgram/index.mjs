import PromptSync from "prompt-sync";

const prompt = PromptSync();

// var name = prompt("What is your name?");

// console.log(name);

const num = prompt("Endter a number: ");
console.log("your number + 4 =");
console.log(Number(num) + 4);