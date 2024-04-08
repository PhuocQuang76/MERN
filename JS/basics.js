/*
//Q1. Create a file with name basics and show all the features that you know about javascript:

Data types:
Javascript has dynamic typing, meaning you can declare variables without  explicitly specifying their data type. 
It supports various data types like numbers, strings, booleans, undefine, arrays, objects.

Functions:
avaScript supports function declarations and expressions. Functions can take parameters, 
have a return value, and be assigned to variables or passed as arguments to other functions.

Arrays:
JavaScript provides built-in methods for working with arrays, such as push, pop, shift, unshift,
 splice, and more. Arrays can also be iterated using loops.

Objects:
JavaScript uses objects to store data in key-value pairs. Objects can have properties and methods.

Asynchronous Programming: 
JavaScript has built-in support for asynchronous programming using callbacks, promises, and async/await.
This allows you to handle events and perform non-blocking operations.

//Q2. As javascript is not a type safe and has auto cast feature - try showing below values from the same variable
//and its type as well :values are - "Robert ", .0266, false, {myname : "Test Me"}, 25166665, undefined, true, "Robert Jr.", null, {}, -32767

*/
let variable = "Robert ";
console.log(variable, typeof variable); //string

variable = .0266;
console.log(variable, typeof variable); //number

variable = false;
console.log(variable, typeof variable); //boolean

variable = {myname: "Test Me"};
console.log(variable, typeof variable); //object

variable = 25166665;
console.log(variable, typeof variable); //number

variable = undefined;
console.log(variable, typeof variable); //undefined

variable = true;
console.log(variable, typeof variable); //boolean

variable = "Robert Jr.";
console.log(variable, typeof variable); //string

variable = null;
console.log(variable, typeof variable); //object

variable = {};
console.log(variable, typeof variable); //object

variable = -32767;
console.log(variable, typeof variable); //number

//Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age
//  print all the details in the given function

console.log("\n----------------");
console.log("Q3. Create a function with name show user info, this function expects three params, firstname, lastname and age");

function printUserDetail(firstName, lastName, age){
    console.log(firstName + " " + lastName + " is " + age + " year old.");
}

function showUserInfo(firstname, lastname ,age, callbackFunc){
    callbackFunc(firstname,lastname,age);
}

showUserInfo("John", "Doe", 30,printUserDetail);






//Q4. Create a function with name doaddition, pass three parameters and return the sum of all the three numbers
// below output needs to be monitored - add(2,3,4), add(2), add(2.3,3), add("first", 2, "three")
// analyse the outputs we got and try explaining the reasons behind

console.log("\n----------------");
console.log("Q4 Create a function with name doaddition, pass three parameters and return the sum ");
function doAddition(num1,  num2, num3){
    return num1 + num2 + num3;
}

console.log(doAddition(2, 3, 4)); // Output: 9
console.log(doAddition(2)); // Output: NaN (Not a Number)
console.log(doAddition(2.3, 3)); // Output: 5.3
console.log(doAddition("first", 2, "three")); // Output: "first2three"

//Q5. Give me an example of your choice on closure, hoisting, constructor function, each.

console.log("\n----------------");
console.log("Q5 Closures");
function outerFunction(){
    var outerVariable = "I am outer";
    function innerFunction(){
        console.log(outerVariable);
    }
    return innerFunction;
}

var innerFunc = outerFunction();
innerFunc(); //I am outer

//innerFunction has access to outerVariable even after outerFunction has finished executing.
//This is closures where the inner function retains access to its outer fucntion's scope.

console.log("\n----------------");
console.log("Q5 Hoisting");

console.log(myVar); // Output: undefined
var myVar = 5;
//In JavaScript, variable and function declarations are hoisted to the top of their containing scope during the compilation phase. 
//This means that the above code is essentially interpreted as below. :
//This is why console.log(myVar) does not throw a ReferenceError, but rather outputs undefined.
var myVar;
console.log(myVar); // Output: undefined
myVar = 5;

console.log("\n----------------");
console.log("Q5 Constuctor Function");

function Person(name, age){
    this.name = name;
    this.age = age;
    this.sayHello = function(){
        console.log("Hello, my name is " + this.name + " and I'm " + this.age + " years old.");
    }
}

let person1 = new Person("Alice", 35);
person1.sayHello();


//In JavaScript, a constructor function is used to create objects with a specific structure. 
//In this example, Person is a constructor function that creates objects with name, age, and a sayHello method.


console.log("\n----------------");
console.log("Q6 Optional Question - what will the following code output? why?");
//Optional Question - what will the following code output? why?

var arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 1000);
}

//The code above is how JS handle closures and the setTimeout.
//The setTimeout function create a closure, and when the inner function is executed after the timout, it looks up the value of i.
//However, by the time the inner function is executed, the loop has finished and the value of i is 4 (one more than the length of the array). 
//As a result, arr[4] is undefined. This is why all the log statements output "Index: 4, element: undefined".