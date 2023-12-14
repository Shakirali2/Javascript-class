import PromptSync from "prompt-sync";

const prompt = PromptSync();

import PromptSync from "prompt-sync";

let isInKarachi = true;
if (isInKarachi) {
    console.log("He is in Karachi");
} else {
    console.log("Hello I am not!");
}

let examPassed = true;
if (examPassed) {
    console.log("Success");
} else {
    console.log("Failed");
}

let feePaid = true;
if (feePaid) {
    console.log("Yes, Paid");
} else {
    console.log("No, Unpaid");
}

let workDone = true;
if (workDone) {
    console.log("Weldone");
} else {
    console.log("Lazy");
}

let playedGame = true;
if (playedGame){
    console.log("It's time to study");
} else {
    console.log("Don't waste time");
}


// let isInPakistan = true
// if (isInPakistan) {
//     console.log("Hello Shakir");
// } else {
//     console.log("Hello Alexander");
// }


let percentage = prompt("What's your percentage?");
if (percentage >= 90) {
    console.log("A+");
} else if (percentage >= 80){
    console.log("A");
} else if (percentage >= 70) {
    console.log("B");
} else if (percentage >= 60) {
    console.log("C");
} else if (percentage >= 50) {
    console.log("D");
} else if (percentage >= 40) {
    console.log("E");
} else {
    console.log("F");
}

//  ? Question Mark defined turnery operator
let percentage1 = prompt("What's your percentage?");
const result = percentage1 >= 50 ? "Passed" : "Failed"
console.log(result);

let isInPakistan = prompt("Are you in Pakistan?");
const greeting = isInPakistan === "true" ? "Hello Shakir" : "Hello Alexender";
console.log(greeting)


//  Switch Case
let location = prompt("Where are you?")
switch(location) {
    case "America":
        console.log("Hello Alexander");
        break;
    case "Mecedonia":
        console.log("Haill Alexander the Great");
        break;
    case "Pakistan":
        console.log("Salam Shakir");
        break;
    case "Germany":
        console.log("Guten Tag Alexander");
        break;
    default:
        console.log("Hi Alexander");
}


