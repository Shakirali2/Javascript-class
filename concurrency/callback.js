function doFlexibleStuff(executeStuff) {
    executeStuff();
    console.log("DoFlexibleStuff");
}

const function1 = () => console.log("Hello from Function 1");

doFlexibleStuff(function1)

function a(callback) {
    callback()
} 

const b = () => console.log("my laptopn");

a(b)


function unza(callback){
    callback()
}

const aOne = () => console.log("Wonderful Day");
unza(aOne)