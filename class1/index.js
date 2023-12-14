// Show the alert to the viewer

alert("Hello World form Javascript");

// Show result on console terminal
console.log("Hello Consolge from Javascript");

// Promt will popup and ask question and responce on console terminal
console.log(prompt("What is your name?"))

const age = prompt("How old are you?");
console.log(typeof(age));
if (age === 25) {
    console.log("Welcome");
}else{
    console.log("Ponka");
}


const age1 = Number(prompt("How old are you?"));
console.log(typeof(age1));
if (age1 === 25) {
    console.log("Welcome");
}else{
    console.log("Ponka");
}

let myage = prompt("What is your age?")
console.log(Number(myage));
console.log(typeof(Number(myage)));