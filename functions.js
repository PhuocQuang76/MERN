//functions in javascript are first class member citizens and hold almost all power present in runtime

session = "MERNStack Session"

//class - template/abstraction - Area
//functions/methods circle, rectangle, square, etc
// Area arr = new Area()
// arr.circle() //
// arr.rectangle() //
// arr.square() //

//keyword is function, name of the function, then params
// return - is mandatory in js functions, bydefault js will return default value - undefined
// Pure Functions - which must have something returned

//1.  Named function 
function UserName(params) {
    console.log(params)
    console.log(this.session)
    //definition and the scope of the function    
    //console.log(this)
}

UserName("Ramant") // it executes in global scope - this (global object, execution context)

//2. Function Expression - when we assign func definition to a var its termed as Function Expression

//console.log(validUser)


console.log("\n.....test Function Expression")

console.log(add(1,9)); //test it and see
function add (a, b) {
    return a + b
}

//console.log(validUser(5,9)); //test it and see... //TypeError: validUser is not a function
var validUser = function (a, b) {
    return a + b
}


console.log("\n.....test Immediately Invoked Function Expressions ");
//3. IIFE - Immediately Invoked Function Expressions - helps us to execute a function for one time only

// UserName("DAvid") 
// UserName("Anna") 
// UserName("Mayuri") 

(function A(firstName, lastName) {
    console.log(firstName)
    console.log(lastName)
    console.log(this.session)
})("David", "Miller");

//as soon as function executes at ln:44 it can't be accessed any further
A("Steve", "Smith")

//4. Constructor Function : Is used to create a class like structure using functions


/*
function Area(length, width, radius){
    this.length = length
    this.width = width
    this.radius = radius

    this.rectangle = function () {
        return this.length * this.width
    }

    this.square = function () {
        return this.length * this.length
    }

    this.circle = function () {
        return 3.1412 * this.radius * this.radius
    }
}

var areaObj = new Area(2, 5, 10) // initialzied as constructor

console.log(areaObj.rectangle()) //executes in the context of Area (constructor function object/ class)
console.log(areaObj.square())
console.log(areaObj.circle())

var areaObj = new Area(20, 50, 30)


*/
//this - is reserved keyword used to define the scope and execution context or dynamic context for js function/object