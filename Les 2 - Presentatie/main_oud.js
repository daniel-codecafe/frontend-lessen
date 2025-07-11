// function makePromise() {
//     const myPromiseCB = (resolve) => {
//         setTimeout(resolve, 1000);
//     }

//     return new Promise(myPromiseCB);
// }

// makePromise()
//     .then(() => {
//         console.log("Hallo")
//     });

// console.log("doei?");


// ///////


// function Promise(cb) {
//     cb(function () {

//     })
// }

let value = 0;

async function voorbeeld() {
    return 10;
}


async function init() {
    value = await voorbeeld();
    console.log(value);
    console.log("????")
    return 123;
}

// Losgekoppeld
// value = 
// console.log(value);
// console.log("????")

console.log(init());
console.log(value);