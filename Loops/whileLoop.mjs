import PromptSync from "prompt-sync";

// const prompt = PromptSync();

// let userInput = prompt("On a scale of 1-10, how much do you like Alaxender?");
// userInput = Number(userInput);
// console.log(userInput);

// if (userInput > 0 && userInput <11){
//     userInput = false
// } else {
//     userInput = true
// }


// while (userInput) {
//     userInput = prompt("On a scale of 1-10, how much do you like Alaxender?");
//     console.log(userInput);
// }


// import promptSync from "prompt-sync";

// const prompt = promptSync();

// let userInput = prompt("On a scale of 1-10, how much do you like Alexander?");
// userInput = Number(userInput);
// console.log(userInput);

// while (userInput < 1 || userInput > 10) {
//     userInput = prompt("Please enter a number between 1 and 10: ");
//     userInput = Number(userInput);
//     console.log(userInput);
// }

// console.log(`You like Alexander with a score of ${userInput}`);

const prompt = PromptSync();

let userInput1 = prompt("Scale 1-10 Feedback");
userInput1 = Number(userInput1);
console.log(userInput1);

while (userInput1 < 1 || userInput1 > 10) {
    userInput1 = prompt("Please enter a number b/w 1-10: ");
    userInput1 = Number(userInput1);
    console.log(userInput1);
}

console.log(`You like Alanxender with a score of ${userInput1}`);

