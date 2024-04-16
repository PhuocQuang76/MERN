//Destructuring - is a way to read values from Array or object without initializing literals

//1. Array Destructuring

//a. reading values without mulitple variables and indexing

// let [one, two, three, four, no_val = 0] = [11,22,33,44]

// console.log(one)
// console.log(two)
// console.log(three)
// console.log(four)
// console.log(no_val)





//b. we can have rest for array

let [one, two, ...rest_Array] = [11, 22, 33, 44, 55, 66, 77]

console.log(one)
console.log(two)
console.log(rest_Array)



//c. swapping of variable values

let x = 9, y = 10;

[x,y] = [y,x] //swapping
console.log(x)
console.log(y)

//2. Object Destructuring
/*
//a. Single level destructuring
let User = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%"
}

let Session1 = User.Session;
console.log(Session1);

let { Name = "David N", Session, TotalMarks} = User

console.log(Name)
console.log(Session)
console.log(TotalMarks)

*/
//b. Nested destructuring
let Student = {
    Standard : "Higher Secondary",
    Session : "Final Session",
    TotalMarks : "75%",
    Subject : {
        Physics : 80,
    //     Chemistry : 89,
    //     Language : 92
    }
}

//let { Name = "Joe S", Session, Standard, Subject} = Student

let { Name = "Joe S", Session, Standard, Subject : {Physics = 89, Chemistry = 120,Mathematics = 100, Language}} = Student

console.log(Name)
console.log(Session)
console.log(Standard)
// console.log(Subject)
console.log(Mathematics)
console.log(Physics)
console.log(Language)
console.log(Chemistry)

// ---> error ----
// In JavaScript, when using object destructuring, you can provide default values for properties 
// that don't exist in the source object. 

// important //
// **** but you cannot destructure a nested object property unless it exists in the source object.
// you also can add nest object properties if you already have object property


//Questions for practice
//print firstname and sessionTopics, 
//along with that also create a lastname and covered3 as "ES6", without making any change in StudentTest

console.log("\n1) print firstname and sessionTopics, along with that also create a lastname and covered3 as 'ES6', without making any change in StudentTest");
let studentTest = {
    firstName : "John",
    sessionTopics : ["Math", "Java","Python"]
}

let {firstName,sessionTopics,lastName="Dow",covered3="ES6"} = studentTest;
console.log(firstName)
console.log(lastName)
console.log(sessionTopics)
console.log(covered3)

//create a funtion with name multiply which accepts three parameters, and return multiplication of all
//but if we dont pass any parameter it returns 0
console.log("\n2) create a funtion with name multiply which accepts three parameters, and return multiplication of all");

function multiply (param1 = 0, param2 = 0,param3 = 0){
    if (param1 === 0 || param2 === 0 || param3 === 0) {
        return 0;
    }
    return param1 * param2 * param3;
}

console.log(multiply());

//create an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop
console.log("\ncreate an array of 1 - 5 and add arr[newval] = at 6th place, print the output using for of and for in loop");
// Create an array of 1-5
let arr = [1, 2, 3, 4, 5];

// Add a new value at the 6th index
arr[5] = 6;

// Printing using for...of loop
for (const element of arr) {
  console.log(element);
}
console.log("\n");
// Printing using for...in loop
for (const index in arr) {
  console.log(arr[index]);
}

//create an example of const where we can update on property of the object, where it says const is mutable
console.log("\n4) create an example of const where we can update on property of the object, where it says const is mutable")
const examplePro ={
    name : "John",
    last : "Dow"

}

examplePro.name = "Aieen";

let {name, last} = examplePro;
console.log(name);
console.log(last);

//create a for loop using var and let, print each value in timeout after 2 second and to 
//demonstrate functional scope of var and lexical of let 

console.log("\n5 create a for loop using var and let, print each value in timeout after 2 second and to demonstrate functional scope of var and lexical of let" );

//In the first loop with let, a new index variable is created for each iteration, maintaining separate values for each setTimeout call. 
//This means that when the setTimeout callbacks are executed after 2 seconds, they will log the correct incremented value for each
// iteration because each callback has access to its own index.
for(let index = 0; index < 5; index++){
    setTimeout(() => {
        console.log("Incremented with LET 2 seconds delay " + index) 
    },2000)
}

//In the second loop with var, the index1 variable is hoisted to the top of the function scope, so there is only one variable shared 
//across all setTimeout callbacks. This results in all the setTimeout callbacks logging the final value of index1 after the loop has 
//completed, which is 5 in this case.
console.log("\n\n");
for(var index1 = 0; index1 < 5; index1++){
    setTimeout(() => {
        console.log("Incremented with VAR 2 seconds delay " + index1) 
    },2000)
}

