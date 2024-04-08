//literals represent memory allocation of some/few values
//User1
var name = "Bryan"
var age = 99
var address = "Somewhere on earth"

//User2
var name2 = "Gauri"
var age2 = 98
var address2 = "Somewhere in US"

//Using Object Literals

var User = {
    name : "Wanda",
    age : 26,
    address : "Somewhere in Canada"
}

//when we need to read
var readName = User.name; 





//when we need to update
User.name = "David"


console.log(readName);

var User2 = User;

console.log(User2.name);

var User2 = {
    name : "David1",
    age : 26,
    address : "Somewhere in Canada"
}
console.log(User2.name);




//what is object literal in js
//In JavaScript, an object literal is a way to create and initialize an object in a single expression. It is a concise way to represent an object with a set of properties and their values.
//An object literal is denoted by curly braces {} and the properties and their values are specified using key-value pairs. Here's an example of an object literal in JavaScript:

const person = {
  name: 'John',
  age: 30,
  city: 'New York'
};

//In this example, person is an object with three properties: name, age, and city. The values of these properties are 'John', 30, and 'New York' respectively.

//Object literals are commonly used to define objects with a small number of properties, and they provide a convenient way to create and initialize objects in JavaScript.



//Here are a few examples of object literals in JavaScript:

//Simple object with properties:

const person1 = {
  name: 'Alice',
  age: 25,
  city: 'London'
};


//Object with nested objects:
const car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2020,
  owner: {
    name: 'Bob',
    age: 35
  }
};

//Object with a method:
const calculator = {
  add: function(a, b) {
    return a + b;
  },
  subtract: function(a, b) {
    return a - b;
  }
};

//Object with dynamic property names:
const key = 'dynamicKey';
const obj = {
  [key]: 'dynamicValue'
};

//**** These examples showcase different ways you can use object literals in JavaScript to create objects with various structures and functionalities.