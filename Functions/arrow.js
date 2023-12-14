 let add = (x,y) => x+y;

//  add(2,2)

console.log(add(2,2));



let student = {
    fName : "Shakir",
    lName : "Ali",
    fullName : function () {return this.fName + ' ' + this.lName}
}
console.log(student.fullName());

