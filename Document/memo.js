https://www.synergisticit.com/javascript-interview-questions-and-answers/





//1 *** REDUCE ****
/*
In JavaScript, the reduce() method is used to reduce an array to a single value. It executes a provided function for each element of the array, resulting in a single output value.

The reduce() method takes two main parameters:

A callback function that is executed on each element of the array. This callback function can take up to four arguments: accumulator, 
current value, current index, and the array itself. An initial value for the accumulator (optional). If provided, 
this value is used as the initial value for the accumulator in the first call to the callback function. If not provided, the first element of the 
array is used as the initial accumulator value.The basic syntax for reduce() is as follows:
*/

array.reduce(callbackFunction, initialValue)

//Here's a simple example of using reduce() to sum up all the elements in an array:

const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum); // Output: 15
// In this example, the reduce() method is used to sum up all the elements in the numbers array starting 
// with an initial value of 0 for the accumulator.



// ********** PROMISE *************
/*
A Promise in JavaScript is an object representing the eventual completion or failure of an asynchronous operation and its resulting value. Promises are used to handle asynchronous operations such as fetching data from a server, reading a file, or any other operation that takes time to complete.

A Promise can be in one of three states:

Pending: Initial state, neither fulfilled nor rejected.
Fulfilled: The operation completed successfully, and the Promise has a resolved value.
Rejected: The operation failed, and the Promise has a reason for the failure.
Here is an example of a Promise that simulates fetching data from a server after a delay:
*/

let fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = { message: "Data fetched successfully" };
        resolve(data); // Resolve the Promise with the fetched data
    }, 2000);
});

fetchData.then((data) => {
    console.log("Data received:", data);
}).catch((error) => {
    console.error("Error fetching data:", error);
});