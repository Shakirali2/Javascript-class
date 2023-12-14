const myPromise = new Promise((resolve, reject) => {
    resolve("I am resolved.")
})

async function myFunction() {
    const resolveValue = await myPromise;
    console.log(resolveValue);
}

myFunction();