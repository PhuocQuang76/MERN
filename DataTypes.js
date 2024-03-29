
// Six data types are present in Javascript
// Primitive Types (assinged as value)
// String, Number, Boolean, Undefined, Null

// Non-Primitive Types (assinged as reference)
// Object

//console.log(data_name1) //data_name1 is not defined : error

console.log(data_name) // undefined - hoisting - (default value to variable in js)

//var - is a keyword used in core-js to declare variables, function etc

var data_name = "Learning MERNStack" //declare and assign value to the variable

console.log(data_name);
console.log("Data Type ", typeof data_name) //data type of data - string

var data_name = "Learning Vanila Javascript" //re-declare and re-assign value to the variable
data_name = "Learning Ecma Script basics" // re-assign value to the variable

var data_name = 2024  //dynamically changes the type depending on the value assigned
data_name = 20.24 //float

console.log(data_name)
console.log("Data Type ", typeof data_name) //data type of data - number

var data_name = undefined

console.log(data_name)
console.log("Data Type ", typeof data_name) //data type of data - undefined

data_name = null //data value

console.log(data_name)
console.log("Data Type ", typeof data_name) //data type of data - object

data_name = {} //creating a object, json object, object literal

console.log(data_name)
console.log("Data Type ", typeof data_name)
data_name = {
    FirstName : "Hemant", 
    Address : "Somewhere on earth"
}

console.log(data_name)
console.log("Data Type ", typeof data_name) //data type of data - object

data_name = null

console.log(data_name)
console.log("Data Type ", typeof data_name) 

data_name = {
    FirstName : "Mark", 
    Address : "Somewhere in London"
}

data_name = 1 == 2//true // default value for bool is false

console.log(data_name)
console.log("Data Type ", typeof data_name) 

// //empty object how js see this

var emptyObj =  {"age":1} //obj1 // 213-address
var emptyObj2 =  {"age":1} //obj1 // 214-address

console.log("Data Type 1", typeof emptyObj2)
data_name = emptyObj == emptyObj2 // ==> true 
console.log(data_name)




// //ES-6 : Symbol - (ES6 : class based implementation of JS)
// // used to create customized variable of our choice
var symbol_1 = Symbol("New Value of my choice")


console.log(symbol_1)
console.log("Data Type 1", typeof symbol_1) 

var aileen = Symbol("HI Aileen")
console.log(aileen)
console.log("Data Type 2", typeof aileen) 