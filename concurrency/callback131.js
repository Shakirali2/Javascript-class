// setTimeout(() => {
//     console.log("Hello setTimeout");
// }, 3000);

// setInterval(() => {
//     console.log("Hello"); 
// }, 1000);


// const hello = () => console.log("Hello");

// setInterval(hello, 1000);

function greet(fullName){
    console.log(`Hello ${fullName[0] + ' ' + fullName[1]}`);

}
 
function mainFunction(userName,callback) {
    const name = userName.split(" ")
    callback(name);

}

mainFunction("Adil altaf",greet)
