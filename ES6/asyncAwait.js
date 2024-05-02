// async and await - to give us a synchronised behaviour of execution though executing asynchronously
// if we create promise object inside async it will take it or if we dont create promise then it will wrap a promise object
// async and await : //Async : A way to have multi-threading in javascript like other object oriented programming language

// fetch userInfo - call //150
// fetch productDetails - call //200
// fetch cartInfo - call //100

// stack1(main thread) - 200 mb (300 request/sec) - (+150 req/sec)
// ==> if requests increases 600 request/sec

// (async) 
// (await) 
// stack2(thread) -  200 mb (300 request/sec) //150
// stack3(thread) -  200 mb (300 request/sec) //200
// stack4(thread) -  200 mb (300 request/sec) //100
console.log("\n***************************************")
function resolveAfter2Seconds() {
    return new Promise((resolve,reject) => {
            setTimeout(() => {
                resolve({
                    "statuscode" : 200,
                    "statusmsg" :'resolved'
                    });
            }, 2000);
    });
}

console.log("async Execution starts");

//async creates a new thread to execute API's that we see will take some time
async function asyncCall() {

    console.log("Before await - blocking thread starts")

    await resolveAfter2Seconds()
            .then((data, err)=>console.log(data))
            .catch((err)=>console.log(err))

    console.log("After await - thread executes one by one")

    console.log("Before await 2 - blocking thread starts")

    // await resolveAfter2Seconds()
    //         .then((data, err)=>console.log(data))
    //         .catch((err)=>console.log(err))

    console.log("After await 2- thread executes one by one")
    console.log("last");
}

asyncCall()

console.log("async Execution ends");

console.log("\n***************************************")

//create a promise to print user info like - name, address, account number after 3 seconds, using aync and await
// also check when it rejects after 2 second
// analyse how await works as blocking execution
function getUserInfo() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let data = {
                name: "Aileen",
                address: "123 Los Angeles",
                account: "12345"
            }
            resolve(data);
        }, 3000);
    });
}

async function callGetUserInfo() {
    console.log("start async ...");
    await getUserInfo()
        .then(data => {
            console.log("Received user info:", data);
        })
        .catch(error => {
            console.error("Error fetching user info:", error);
        });

    console.log("after async ...");
    console.log("end async ...");
    
}

// Call callGetUserInfo() after getUserInfo has been defined
callGetUserInfo();



console.log("\n***************************************")
// create one set of map using different types of keys and at leas show the usage of 5 functions (.get, .clear)

let myMap = new Map();
myMap.set("name", "Aileen");
myMap.set(1, "One");
myMap.set(true, "True");

console.log(myMap.get("name"));
myMap.clear();
console.log(myMap.get("name"));


// create a list using set and show the usage of 5 functions (.add, .clear)
console.log("\n***************************************")
let mySet = new Set();
mySet.add(1);
mySet.add(2);
mySet.add(3);
console.log(mySet);

mySet.clear();

// create and example of arithmatic operations (addition, substraction, multiply, division), using generator function

function* arithmeticGenerator(a, b){
    yield a + b;
    yield a - b;
    yield a * b;
    yield a / b;
}

const generatorFunc = arithmeticGenerator(10,5);
console.log(generatorFunc.next());
console.log(generatorFunc.next());
console.log(generatorFunc.next());
console.log(generatorFunc.next());




/* Explain
async and await are keywords in JavaScript that are used together to handle asynchronous operations in a more synchronous-like manner.

When a function is declared as async, it means that it will always return a promise. Inside an async function, 
you can use the await keyword to pause the execution of the function until a promise is resolved or rejected.

async function fetchData() {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}

fetchData();

In this example, the fetchData function is declared as async. Inside the function, the await keyword is
 used to pause the execution until the fetch function returns a promise that resolves to the response. 
 Then, the await keyword is used again to pause the execution until the response.json() function returns 
 a promise that resolves to the JSON data.

By using async and await, we can write asynchronous code that looks and behaves more like synchronous
 code, making it easier to read and understand. However, keep in mind that under the hood, 
 the asynchronous operations are still being executed asynchronously



 you can create an async function without using the await keyword inside it.

When an async function is called without await, it will still return a promise that resolves with the return value of the function. This can be useful in certain scenarios where you want to run asynchronous code but don't need to wait for it to complete before moving on.

Here's an example:
async function fetchData() {
  return fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
      console.log(data);
      return data;
    });
}

fetchData().then(data => {
  console.log('Data received:', data);
});
*/

