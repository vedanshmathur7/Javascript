// const hello = () => {
//     console.log('hello');
// }

// setTimeout(hello, 3000) //after 3 sec



// function getdata (dataId, getNextData) {
//     setTimeout(()=> {
//         console.log("data", dataId);
//         if (getNextData) { //if this functions exists then only execute
//             getNextData();
//         }
//     }, 2000)
// }

// // getdata(1);
// // getdata(34);
// // getdata(4);

// //want delay of 2sec in each data printing 

// getdata(1, ()=>{
//     console.log("fetching data 2");
//     getdata(2, ()=> {
//         console.log("fetching data 3");
//         getdata(3, ()=> {
//             console.log("fetching data 4");
//             getdata(4);
//         });
//     });
// }); //this is known as Call back hell




// ---------------------Promises-----------------------
// solution to the callback hell

// 1. pending state
// 2. fullfilled state
// 3. rejected state

// let promise = new Promise ((resolve , reject) => {
//     console.log("i am promise");
//     // resolve (123); //resolved
//     reject("teri mkc");  //throw an error
// });


// function getdata (dataId, getNextData) {
//     return new Promise ((resolve, reject) => {
//         setTimeout(()=> {
//             console.log("data", dataId);
//             // resolve ("success");
//             reject ("bhkk teri mkc");
//             if (getNextData){
//                 getNextData();
//             }
//         }, 5000);
//     });
// }



// const getPromise = () => {
//     return new Promise((resolve, reject) => {
//         console.log('i am a promise');
//         resolve("success"); //res (by default)
//         // reject("teri mkc"); //err (by default)
//     })
// }

// let promise = getPromise();
// promise.then((res) => { //res inside it by default
//     console.log("resolved successfully", res) //success
// });


// promise.catch((err)=> { ////err inside it by default
//     console.log("error", err) //teri mkc
// });



// --------------------promise chain ------------------------

function getData (dataId) {
    return new Promise ((resolve, reject) => {
        setTimeout( ()=> {
            console.log("data", dataId);
            resolve("success");
        }, 2000);
    });
}

//Promise chaining
console.log("getting data 1")
getData(1)
.then((res) => {
        console.log("getting data 2")
        return getData(2);
    })
    .then ((res) => {
        console.log("getting data 3")
        return getData(3);
    })
    .then ((res) => {
        console.log(res);
    });