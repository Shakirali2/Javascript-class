// const promise = new Promise(function (resolve, reject) {
//     resolve('Javascript!')
// });

// promise.then(function(result) {
//     console.log("Success: ", result);
// }, function (error) {
//     console.log("Error", error);
// })

// const promise = new Promise(function (resolve, reject) {
//     reject('Bad Javascript!')
// });

// promise.then(function(result) {
//     console.log("Success: ", result);
// }, function (error) {
//     console.log("Error", error);
// })


const promise = new Promise(function (resolve, reject) {
    resolve('Javascript!')
});

promise.then(function(success){
    console.log("Success", success);
}).catch(function (error) {
    console.log("Error", error);
})