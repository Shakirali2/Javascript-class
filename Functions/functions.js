function coffeeOrder() {
    console.log("Your coffee is on its way!");
}
coffeeOrder()

function coffeeOrder() {
    return "Your coffee is on its way!";
}
console.log(coffeeOrder());

function coffeeOrder() {
    return "Your coffee is on its way!";
}
const order = coffeeOrder()
console.log(order);

function coffeeOrder(drink) {
    return `Your ${drink} is on its way!`;
}
const order1 = coffeeOrder('Double Shot Espresso')
console.log(order1);


const days = ['a','b','c'];
let findValue = days.find(e => e === 'b')
console.log(findValue);



let things = ['pen','book','watch'];
let findVal = things.find(e => e === 'pen')
console.log(findVal);





