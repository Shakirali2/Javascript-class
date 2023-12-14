const multiplyTable = [];
const numValues = 5;

for (let i = 0; i < numValues; i++) {
    const temporary = [];
    for (let j = 0; j < numValues; j++) {
        temporary.push(i*j)
    }
    multiplyTable.push(temporary);
}

console.table(multiplyTable);

const multiplyTable1 = [];
const numValues1 = 11;

for (let i = 0; i < numValues1; i++) {
    const temporary = [];
    for (let j = 0; j < numValues1; j++) {
        temporary.push(i*j)
    }
    multiplyTable1.push(temporary);
}
console.table(multiplyTable1)


