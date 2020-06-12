// Timing out

// let showMessage = (message) => console.log(message);
// showMessage("Hello");

// setTimeout( () => {
//     showMessage("Another Message")
// }, 2000)

// let getWords = () => {
//     console.log("First Message");

//     setTimeout( () => {
//         console.log("2nd Message")
//     }, 3000);

//     setTimeout( () => {
//         console.log("3rd Message")
//     }, 2000);

//     setTimeout( () => {
//         console.log("final Message")
//     }, 1000);
// }

// getWords();

// Callbacks and Recursion
// let done = () => console.log("Job's done!");

// let countdown = (num, callback) => {
//     if(num===1) {
//         callback();
//     } else {
//         setTimeout( () => {
//             console.log(num);
//             countdown( num - 1, callback)
//         },1000)
//     }
// }

// countdown( 4, done);

// Promises Promises

let lunchTime = true;

const orderSomeFood = () => {
    return new Promise((resovle, reject) => {
        if(lunchTime) {
            let myLunch = {
                lunch: "tacos",
                drink: "water"
            }
            resovle(myLunch)
        } else {
            let errorMessage = new Error("not lunch time");
            reject(errorMessage);
        }
    })
}

orderSomeFood()
.then(res => console.log(res))
.catch(err => console.log(err))