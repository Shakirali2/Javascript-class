const myWork = [];

for (let i = 1; i < 11; i++) {
    let status = i % 2 ? true : false;
    let temporary = {
        name : `Lesson ${i}`,
        status: status
    }
    myWork.push(temporary)
}

console.log(myWork);

const youWork = [];

for (let i = 1; i < 11; i++) {
    let rank = i % 2 ? true : false;
    let worry = {
        game : `start ${i}`,
        rank: rank
    }
     youWork.push(worry)
}

console.log(youWork);



