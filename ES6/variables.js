/*
var, which is hoisted to the top of its scope and can be accessed before it's declared, 
let and const are not hoisted. This means you cannot access them before they are declared 
in the code. It's one of the reasons why let and const are preferred over var in modern JavaScript development.

var is function-scoped and can be redeclared and reassigned.
let is block-scoped (within curly braces {}) and can be reassigned but not redeclared.
const is also block-scoped and cannot be reassigned or redeclared after initialization.
*/


{

    let my_var = 2014;
}
let name;
name = "phuoc";
name = "a"

console.log(name)

let User = {
    session: 2020
}

let User2 = {
    session: 2021
}

User = User2;
console.log(User)

/*

//The setTimeout function creates a closure over the index variable,
// and by the time the timeout fires, the loop has already completed and index is equal to 5.
for(var index = 0; index < 5; index++){
    setTimeout(()=> {
        console.log("hi" + index);
    },2000)
}



//To fix this, you can use an immediately invoked function expression (IIFE) to create a new scope 
//for each iteration of the loop. However, you also need to pass the index as an argument to the IIFE to capture its value for each iteration.
for(var index = 0; index < 5; index++){
    (function (index){
        setTimeout(()=> {
            console.log("hi" + index);
        },2000)
    })(index);
}

console.log("breaking condition " + index)

// When you declare a constant using const and assign an object to it, the constant itself cannot
// be reassigned to a different object. However, the properties of the object, such as name and
// age in your example, can still be modified. This is because const creates a constant reference to the object, not a constant value for the object's properties. 

const person = {name:"phuoc",age:34} 
const person2 = {name:"phuoc2",age:32} 


//person = person2; //error

person.name = person2.name;
console.log(person.name)



//1. Scope <Functional and Lexical or block {}>
{
    var my_var = 2024
    let my_let = 2015 // let and const can't be accessed out side the block
    const my_const = 2015.1

    // console.log(my_let)
    // console.log(my_const)
}

//console.log(my_var) // 2024 instead of error or undefined as var is not limited with block
//console.log(my_let) // is out side the boundery of block {} so not accessible //error - my_let is not defined

//2. let and const have no hoisting present

{
    // console.log(my_let) //no hoisting - Cannot access 'my_let' before initialization
    // console.log(my_const)

    let my_let = 2015 // let and const can't be accessed out side the block
    const my_const = 2015.1
}

//3. re-assignment and re-declaration

{
    //var my_var -> var can be reassigned, re-declared anytime anywhere


    let my_let; //= 2015 //we can declare and assign value later
    my_let = 2015
    //console.log(my_let) 
    
    my_let = 2015.2015
    //console.log(my_let) // re-assignment is possible

    //let my_let = "David Js Scholar" //re-declaration is not allowed

    //constant needs to be declared and is immutable
    //const my_const; //2015.1 //we can't declare without initialization

    const my_const = 2015.1
    
    //const my_const = 2015.2 // re-declaration not allowed
    //my_const = 2015.1 // re-assignment not allowed
    //console.log(my_const)

    //hack for const - value is immutable but reference can be changed

    const User = {
        session : "Javascript - OOJS"
    }

    const User2 = {
        session : "ES6"
    }

    //User = User2 //Assignment to constant variable.

    User.session = "ES6 Variables" //updating the value of reference i.e. = session
    console.log(User)
}
*/

//4. let and const get evaluated and not passed as reference as var 

console.log("var outside: " + index);
for (var index = 1; index < 5; index++) {
    console.log("var: " + index);
    setTimeout(() => {
        console.log("Incremented with 1 seconds delay " + index)    
    }, 2000);
}

console.log("Breaking Condition "+ index)


for (let index1 = 0; index1 < 5; index1++) {
    console.log("let: " + index);
    setTimeout(() => {
        console.log("Incremented with 2 seconds delay using let " + index1)    
    }, 2000);    
}

/*
var index:

The variable index is declared using var in the first for loop. Since var is function-scoped, the index variable will exist outside the loop.
After the loop finishes, the value of index will be 5 because the loop increments index until it is no longer less than 5.
The setTimeout functions inside the loop will all log the value of index as 5 because the loop has already completed by the time the functions are executed.
let index1:

The variable index1 is declared using let in the second for loop. let is block-scoped, so each iteration of the loop will have its own index1 variable.
The setTimeout functions inside the loop will log the value of index1 for each iteration because let preserves the value of index1 at the time the setTimeout is scheduled.
*/

//console.log("Breaking Condition using let "+ index1)


