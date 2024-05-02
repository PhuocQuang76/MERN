// callbacks and callbacks and callbacks - becomes full of callback function
// when multiple callbacks fail it ends up in a callback hell situation
// signinuser

// function Authentication_API(userInfo) {} //Login SignUp, create userSession //uses - authentication api
// function Authorization_API(userInfo, sessionId) {} // Permissions to access like admin/normal user - roles //uses - Authorization api
// function Navigation_API(userInfo, permissions) {} // what all pages user can navigate, returns first page //uses - navigation api

function LoginProcess(userId, password) {
    let userInfo = {userId, password}

    //let userSession = Authentication(userInfo, Authorization) //async

    Authentication(userInfo, Authorization) //async

    function Authentication(userInfo, Authorization) {
        
        let userSession = Authentication_API(userInfo)

        if(userSession==valid) //
            Authorization(userInfo, userSession, Navigation)
        else
            Authentication(userInfo, Authorization) //if server fails we'll have many many recursive calls to Authentication
    }

    function Authorization(userInfo, userSession, Navigation) {
        let permissions = Authorization_API(userInfo, userSession) //async

        let loginScreen = Navigation_API(userInfo, permissions) //async
    }

    //let permissions = Authorization(userInfo, userSession) //async

    let displayScreen = Navigation(loginScreen) //async    
}

//call back hell : at line number 23, if we fall in a loop of failures it will take us into callback hell situation
//not a proper handling of response
//mandatory to take immediate action after we get response

// Promise - is a object which completes some async/sync job in its execution but has the capability to hold
// manipulate and return the response when asked


/*
let promiseObject =new Promise((resolve, reject) => {

    //let userSession = Authentication_API(userInfo) //make call to server get the response and store

    setTimeout(()=>{
        resolve({
            status : "Success",
            value : "User Session Object",
            code : 200
        })}, 
    2000)

    setTimeout(()=>{
        reject({
            status : "Failed",
            value : "User Session Failed",
            code : 403.15
        })}, 
    1000)
})

console.log(promiseObject)

//response is returned upon being asked ==> promiseObj.then.then.catch
// .then => retruns for resolve cases
// .catch => retruns for rejected cases

promiseObject.then((response)=>{
    console.log("execution is successful  ", response) //resolved
}).catch((error)=>{
    console.log("execution is failed  ", error) //rejected
})
console.log(promiseObject)

console.log(promiseObject)

console.log("Promise Completed!!!");

*/



// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing


// *****   Basic Promise Example ***** :
// console.log("\nBASIC");
// let fetchData = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         let data = { 
//             message: "Data fetched successfully" ,
//             value: "User Session Object",
//             code: 200};
//         resolve(data); // Resolve the Promise with the fetched data
//     }, 2000);


// });

// console.log(fetchData)

// fetchData.then((data) => {
//     console.log("Data received:", data);
// }).catch((error) => {
//     console.error("Error fetching data:", error);
// }).finally(() => {
//     console.log("Promise Completed!!!");
// });

// console.log("fetchData1: " + fetchData)
// console.log("fetchData2: " + fetchData)

// console.log("Promise Completed!!!");


//Promise with Fetch API (Asynchronous data fetching):
// console.log("\nPromise with Fetch API");
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//     .then(response => response.json())
//     .then(data => {
//         console.log(data.title);
//     })
//     .catch(error => {
//         console.error('Error fetching data:', error);
// });

//Chaining Promises:
console.log("\nChaining Promises")
    // let objPromise1 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("objPromise1 promise resolved");
    //     }, 1000);
    // });
    
    // let objPromise2 = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("objPromise2 promise resolved");
    //     }, 500);
    // });

    // let test = new Promise((resolve, reject) => {
    //     setTimeout(() => {
    //         resolve("test promise resolved");
    //     }, 500);
    // });
    
    // objPromise1.then((result) => {
    //     console.log(result);
    //     return test;
    // }).then((result) => {
    //     console.log(result);
    //     return objPromise2;
    // }).then((result) =>{
    //     console.log(result);
    
    // }).catch((error) => {
    //     console.error(error);
    // });

 
//Promise.all (Running multiple promises in parallel):
console.log("\nPromise.all");

let objPromise3 = Promise.resolve("objPromise3  resolved");
qqq
let objPromise4 = new Promise((resolve) => {
    setTimeout(() => {
        resolve("objPromise4 resolved");
    }, 1500);
});

let objPromise5  = fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then(response => response.json());

Promise.all([objPromise3, objPromise4, objPromise5])
    .then((results) => {
        console.log(results);
    })
    .catch((error) => {
        console.error('Error:', error);
    });


