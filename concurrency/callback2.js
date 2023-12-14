function judge(grade) {
    switch (true) {
        case grade === "A+":
            console.log("You got a ", grade, ": Perfect");
            break;
        case grade === "A":
            console.log("You got an ", grade, ": Excellent!");
            break;
        case grade === "B":
            console.log("You got a ", grade, ": Good Job!");
            break;
        case grade === "C":
            console.log("You got a ", grade, ": Ok!");
            break;
         case grade === "D":
            console.log("You got a ", grade, ": Need to improve!");
            break;
        default:
            console.log("An", grade, " : Oops. Try again!");
    }
}


function getGrade(percentage, callback) {
    let grade;
    switch (true) {
        case percentage >= 90:
            grade = "A+";
            break;
        case percentage >= 80:
            grade = "A";
            break;
        case percentage >= 70:
            grade = "B";
            break;
        case percentage >= 60:
            grade = "C";
            break;
        case percentage >= 50:
            grade = "D";
            break;
        default:
            grade = "F"
    }
    callback(grade);
}

getGrade(95,judge) 



// function pakistan(grade) {
//     switch (true) {
//         case grade === "A+":
//             console.log("You got a ", grade, ": Zabardast!");
//             break;
//         case grade === "A":
//             console.log("You got an ", grade, ": Umdha!");
//             break;
//         case grade === "B":
//             console.log("You got a ", grade, ": Bohot Acha!");
//             break;
//         case grade === "C":
//             console.log("You got a ", grade, ": Thek Hai!");
//             break;
//          case grade === "D":
//             console.log("You got a ", grade, ": Mehnat ki Zarrorat Hai!");
//             break;
//         default:
//             console.log("An", grade, " : Oops. Dobara Koshish Karo!");
//     }
// }


// function getGrade(percentage, callback) {
//     let grade;
//     switch (true) {
//         case percentage >= 90:
//             grade = "A+";
//             break;
//         case percentage >= 80:
//             grade = "A";
//             break;
//         case percentage >= 70:
//             grade = "B";
//             break;
//         case percentage >= 60:
//             grade = "C";
//             break;
//         case percentage >= 50:
//             grade = "D";
//             break;
//         default:
//             grade = "F"
//     }
//     callback(grade);
// }

// getGrade(95,pakistan) 