// concurrent promise calls
// when we make multiple promise calls and we want to check what happened to all of them 
// and then decide whats going to be the next step

//user is authenticated and my product requires some details of user using userid created but authentication
//userid - from authentication (first)

//try making these calls parallely 
//getUserProducts(userid)
//getUserAccountDetails(userid)
//getUserCartHistory(userid)

//authentication.then("To get resolve callback data").catch("To get reject callback data")

let getUserProducts = new Promise((resolve, reject)=>{ //getUserProducts - api call

    // setTimeout(() => { // getUserProducts - api call
    //     resolve({
    //         "status" : 200,
    //         "msg" : "user products are fetched",
    //         "promise date" : (new Date).toDateString()
    //     })
    // }, 5000);
    setTimeout(() => { // getusercart - api call
        reject({
            "status" : 500,
            "msg" : "user products Crashed!!",
            "promise date" : (new Date).toDateString()
        })
    }, 5000);
})

let getUserAccountDetails = new Promise((resolve, reject )=>{ //getUserAccountDetails
    
    setTimeout(() => { // getUserAccountDetails - api call
        resolve({
            "status" : 200,
            "msg" : "user AccountDetails are fetched",
            "promise date" : (new Date).toDateString()
        })
    }, 10000);
})

let getusercart = new Promise((resolve, reject)=>{ //getusercart
    
    // setTimeout(() => { // getusercart - api call
    //     resolve({
    //         "status" : 200,
    //         "msg" : "user cart is fetched",
    //         "promise date" : (new Date).toDateString()
    //     })
    // }, 15000);

    setTimeout(() => { // getusercart - api call
        reject({
            "status" : 500,
            "msg" : "API Crashed!!",
            "promise date" : (new Date).toDateString()
        })
    }, 15000);

})

console.log("Promises are working... ")

// when we need all the promises to be settled we use this
// the case when even one promise fails all the promises gets rejected

// Promise.all([
//     getUserProducts,
//     getUserAccountDetails,
//     getusercart
// ]).then((data, error)=>{
//     console.log("Promise All returns, when each one is settled ", data)
// }).catch((data, error)=>{
//     console.log("Promise All returns to catch, when any one is rejected ", data)
// })


// Upon completion of each promises that we start, it returns the data for each promise individually

Promise.allSettled([
    getUserProducts,
    getUserAccountDetails,
    getusercart
]).then((data, error)=>{
    console.log("No need to stop exectution when on promise is failed.", data)
})

console.log("Promises are all done!!! ")


//create promise of three concurrent sessions of a day and try to resolve and reject them

let session1 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        reject({
            "status" : 500,
            "messsage" : "session 1 rejected"
        })  
    },2000)
})

let session2 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            "status" : 200,
            "messsage" : "session 2"
        })
    },5000)
})

let session3 = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve({
            "status" : 200,
            "messsage" : "session 3"
        })
    },10000)
})
const promises = [session1,session2,session3];

console.log("\n****** All ******")
Promise.all(promises)
    .then((results) =>{
        console.log(results)
    })
    .catch((error)=>{
        console.error(error);
    })


console.log("\n****** AllSettle ******")
Promise.allSettled(promises)
    .then((results) =>{
        console.log(results)
    })
    .catch((error)=>{
        console.error(error);
    })