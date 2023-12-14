// For creating array use [] square braket

const array1 = ['sun','Mon','Tue','Wed','Thu','Fri','Sat',];
console.log(array1[0]);
console.log(array1[3]);

array1[0] = "Sunday";

console.log(array1[0]);
console.log(array1.length);


const daysOfWeek = [];
console.log(daysOfWeek);


// Append(add) new element
daysOfWeek.push(1);
daysOfWeek.push("Sunday")
daysOfWeek.push("Tuesday")
console.log(daysOfWeek);

// Remove an element and insert another element
daysOfWeek.splice(1,0,"Monday")
console.log(daysOfWeek);

const daysOfWeek2 = [5,6,7,"Wednesday", "Thursday", 1000]
console.log(daysOfWeek2);

// concat(Combine 2 arrays)
const allDays = daysOfWeek.concat(daysOfWeek2)
console.log(allDays);

// Remove last value
allDays.pop()
console.log(allDays);

// Remove 1st Value
allDays.shift()
console.log(allDays);

allDays.splice(3,3);
console.log(allDays);

const classDays = ['sun','Mon','Tue','Wed','Sat',];
console.log(classDays);

// console.log(classDays.find(function(e) {e === "sun"}))

let findValue = classDays.find(e => e === "thu");
console.log(findValue);

let findValue2 = classDays.find(e => e === "sun");
console.log(findValue2);

let findV = classDays.find(e => e === "fri")
console.log(findV);

const days = ['a','b','c'];
let findValue1 = days.find(e => e === 'b')
console.log(findValue1);



let things = ['pen','book','watch'];
let findVal = things.find(e => e === 'pen')
console.log(findVal);


const numArray = [0,1,11,2,60,3,42,4,90,5,6];
const sortedArray = numArray.sort();
console.log(sortedArray);
console.log(typeof numArray[0]);


let ages = [18,72,33,56,40]
ages.sort();
console.log(ages);

const array11 = [1,2,3]
const array22 = [array11,array11]
console.log(array22);
console.log(array22[0]);
console.log(array22[0][1]);

// How to create Object .... use {} curly braket

const student = {
    // property : Value
    rollNumber: "PIAIC123456",
    firstName: "Shakir",
    lastName: "Ali",
    courses: ["Web3", "Cloud"],
    address: {
        city: "Karachi",
        country: "Pakistan"
    }
}

console.log(student.rollNumber);

student.rollNumber = 'PIAIC999999'
console.log(student);




