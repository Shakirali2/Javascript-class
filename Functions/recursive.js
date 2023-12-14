function getRecursive(nr) {
    console.log("Started function iteration: ", nr);
    if (nr > 0) {
        getRecursive(--nr);
    } else {
        console.log("Recursive completed");
    }
    console.log("Function ended: ", nr);
}

getRecursive(5)