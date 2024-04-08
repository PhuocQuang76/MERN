//concurrency / non-blocking - when we are able to execute different call parallely or without blocking one 
// callbacks / API's - registered call backs of JS - XHR, Promises, SetTimeout, Setinterval, Async IO operations - (API's)
// event loop - mechanism to move callback out put from event queue to callStack once stack is empty
// event queue - queue's the output of callback API's and pushes in FIFO

//example 

console.log("Concurrent Execution Starts!!") //1

setTimeout(function () {
    console.log("First Delayed Execution - No 1") //3

    setTimeout(function () {
        console.log("First Delayed Execution's Timeout - No 1.1") //4
    }, 0)

}, 1000) //

setTimeout(function () {
    console.log("Second Delayed Execution's Timeout - No 2") //5
}, 1000) //

setTimeout(function () {
    console.log("Third Delayed Execution's Timeout - No 3") //6
}, 1000) //

console.log("Concurrent Execution Ends!!") //2