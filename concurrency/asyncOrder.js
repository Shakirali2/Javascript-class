function breakfastOrder(item) {
    return new Promise ( resolve => {
        setTimeout(() => {
            resolve (`${item} is ready.`)
        }, 3000);
    })
};

async function order(item) {
    const order = await breakfastOrder(item);
    console.log(order);
}

order("Omelette");
order("Paratha");
order("Coffee")

function refreshment(item) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`${item} is ready.`);
        }, 3000);
    });
}

async function Order(item){
    const order = await refreshment(item);
    console.log(order);
}

Order("Biscut")
Order("Tea")
Order("Pakoray")









