const promise = new Promise((resole, reject) =>
    reject("something went Wrong")
); //resolve("Start Coundting")

const counter = (value) => console.log(value);

promise
    .then((value) => {
        counter(value);
        return "one";
})
    .then((value) => {
    counter(value);
    return "Two";
})
    .then((value) => {
    counter(value);
    return "Three";
})
    .catch((error) => console.log(error))


