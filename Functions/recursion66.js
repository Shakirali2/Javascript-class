function factorial(nr) {
    console.log(nr);
    if (nr === 0) {
        return 1
    } else {
        return nr * factorial(--nr)
    }
} 

console.log(factorial(7));


function factorial1(num) {
    console.log(num);
    if (num == 0){
        return 2
    } else {
        return num * factorial1(--num)
    }
    
}

console.log(factorial1(2));