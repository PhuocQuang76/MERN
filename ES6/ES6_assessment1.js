
// 1. How to preserve the immutability on my heroes list? Solve below problems using the same
// a. Get heroes who are not evils
// b. Print Unique family names
// c. Print Hero Names from given objects, and append sir in each of them before printing
// d. Do we have any hero in Marvel Family who is not evil

const heroes = [
  { name: 'Wolverine',      family: 'Marvel',    isEvil: false },
  { name: 'Deadpool',       family: 'Marvel',    isEvil: false },
  { name: 'Magneto',        family: 'Marvel',    isEvil: true  },
  { name: 'Charles Xavier', family: 'Marvel',    isEvil: false },
  { name: 'Batman',         family: 'DC Comics', isEvil: false },
  { name: 'Harley Quinn',   family: 'DC Comics', isEvil: true  },
  { name: 'Legolas',        family: 'Tolkien',   isEvil: false },
  { name: 'Gandalf',        family: 'Tolkien',   isEvil: false },
  { name: 'Saruman',        family: 'Tolkien',   isEvil: true  }
]

console.log("\n1)******************************************   ");
console.log("\n1a)Get heroes who are not evils")
let heroesNotEvil = heroes.filter(h => h.isEvil == false);
console.log(heroesNotEvil);

console.log("\n1b) Print Unique family names");
let uniqueFamilies = heroes.reduce((acc, curr) => {
    acc[curr.family] = acc[curr.family] ? acc[curr.family] + 1 : 1;
    return acc;
}, []).filter(key => acc[key] === 1);
console.log(uniqueFamilies);

/*
let uniqueFamilies = heroes.reduce((acc, curr) => {
    acc[curr.family] = acc[curr.family] ? acc[curr.family] + 1 : 1;
    return acc;
}, {}).filter(key => acc[key] === 1);

If we use object , will cause error beacause we try to use the filter method directy on the result of the reduce opareation which is an 
object, not anarray. Objects do not hava a filter method.
*/

console.log("\n1c) Print Hero Names from given objects, and append sir in each of them before printing");

let attachSirwithName = heroes.map(h => h.name = h.name + " sir");
console.log(attachSirwithName);


console.log("\n1d)Do we have any hero in Marvel Family who is not evil");
let hasFamilyWihoutEvil = heroes.some(h => h.family != false);
console.log(hasFamilyWihoutEvil);


//2. Use the spread and rest operator to create a function which can multiply numbers from 1...n (n is the number of choice)

console.log("\n2)******************************************   ");
console.log("\nUse the spread and rest operator to create a function which can multiply numbers from 1...n ")  
function multiplyNumbers(...numbers) {
    const result = numbers.reduce((acc, num) => {
       return acc * num;
    }, 1);

    return result;
}

console.log(multiplyNumbers(1, 2, 3, 4, 5));

//3. Print the last name through destructuring and add a contact number:9119119110 as well

console.log("\n3)******************************************   ");
console.log("\nPrint the last name through destructuring and add a contact number:9119119110 as well")

const person = {
    userDetails :{
        first: "FirstName",
        last: "LastName"
    }
}

const {userDetails : {last,contactNumber = 9119119110}} = person;

console.log(last);
console.log(contactNumber)


//4. Give me an example of const data manipulation

console.log("\n4)****************************************** ");
console.log("\nGive me an example of const data manipulation")
const sutdent = {
    name: "Alice",
    age: 30
};

// Manipulating data within a const object
person.age += 1; // Incrementing age by 1
console.log(person); // Output: { name: "Alice", age: 31 }

//In this example, we have a const object person with properties name and age. 
//Even though person is declared as a const, we can still manipulate the 
//age property by incrementing it by 1. The object itself (i.e., person) remains constant and cannot be reassigned.

//5. What is the difference between for-of and for-in show with examples
console.log("\n5)****************************************** ");
console.log("\nWhat is the difference between for-of and for-in show with examples")

//for...of is used for iterating over values of iterable objects
//for...in is used for iterating over the keys (properties) of an object.

//for...of loop:
//Used to iterate over iterable objects such as arrays, strings, maps, sets, etc.
//Provides direct access to the values of the elements in the collection.
//Example:
console.log("\nfor...of loop:")
const arr = [1,2,3];
for(let i of arr){
    console.log(i);
}


//Used to iterate over the enumerable properties of an object.
//Provides access to the keys (property names) of the object.
//Example:
console.log("\nfor...in loop:")
const obj = {a: 1,b: 2,c: 3}
for(let key in obj){
    console.log(key)
    console.log(obj[key])
}


//6. Give me an example of bind and write its usage, comparison with arrow function
console.log("\n6)****************************************** ");
console.log("\nBind()  vs arrow function")
//bind() method is used to create a new function with a specified this value.
//It allows to explicitly set the this value for a fucntion regardless of how the function is called.
const person1 = {name:"Alice"};



const obj1 = {
    first: "Alice",
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, my name is ${this.first}`);
        }, 1000);
    }
};

obj1.greet(); //undefined

const obj2 = {
    first: "Alice2",
    greet: function() {
        setTimeout(function() {
            console.log(`Hello, my name is ${this.first}`);
        }.bind(this), 1000);
    }
};
obj2.greet(); //hi Alice2

const obj3= {
    first: "Alice3",
    greet: function() {
        setTimeout(()=> {
            console.log(`Hello, my name is ${this.first}`);
        }, 1000);
    }
}

obj3.greet(); 
/*
Explain: 
When a regular function is used as a callback for setTimeout, the this value inside that 
function will refer to the global object (in non-strict mode) or be undefined (in strict mode). 
This behavior causes the this.first to be undefined because this does not refer to the 
obj1 object inside the callback function.

when we use bind(this), the value of this inside a function can change depending on
 how the function is called. By using bind(this), you are explicitly setting the value 
 of this to the outer scope (the greet function) so that when the setTimeout callback function is executed, 
 it can access the first property of the object correctly.

 Arrow functions in JavaScript capture the this value of the surrounding context, so in this case, 
 the arrow function preserves the value of this from the greet method. This means that inside the arrow function,
  this will refer to the obj3 object, allowing you to access the first property correctly.

So, the key difference is that bind() allows you to explicitly set the value of this, while arrow functions
 inherit the this value from the surrounding context.
*/



//7. Create an example showing usage of event loop in concurrent execution cycle
console.log("\n7)****************************************** ");
console.log("\nCreate an example showing usage of event loop in concurrent execution cycle")

console.log("Start of the script");

setTimeout(() => {
    console.log("Inside setTimeout 1");
}, 0);

setTimeout(() => {
    console.log("Inside setTimeout 2");
}, 0);

console.log("End of the script");

/*
In this example, we have two setTimeout functions with a delay of 0 milliseconds. 
Despite the delay being 0, JavaScript still schedules these functions to run in the event 
loop after the current script has finished executing. This demonstrates how JavaScript 
handles asynchronous operations like timers through the event loop, enabling concurrent
 execution with non-blocking behavior.
*/


//8. create an example showing usage of short hand and default param.
console.log("\n8)****************************************** ");
console.log("\nCcreate an example showing usage of short hand.")
let first2 = "Alice", last2 = "Dow", age2=45;
let student = {first2,last2,age2};
console.log(student)

console.log("\nCcreate an example showing usage of default param.")
function Sum(a = 0, b) {
    console.log(a)
    console.log(b)

    return a + b
}

console.log(Sum(10, 9)) // 19
console.log(Sum(9)) // 9 , NaN
console.log(Sum()) // 0 , Undefined

//9. Create two objects with some properties and merge them using Object method and ES6 way
console.log("\n9)****************************************** ");
console.log("\nCreate two objects with some properties and merge them using Object method and ES6 way")
// Creating two objects with properties
const obj4 = { a: 1, b: 2 };
const obj5 = { b: 3, c: 4 };

// Merging objects using Object.assign() method
const mergedObj1 = Object.assign({}, obj4, obj5);
console.log("Merged object using Object.assign():", mergedObj1);
/*
In the context of the Object.assign() method, the {} represents an empty object literal which serves as 
the target object for the merge operation. When merging objects using Object.assign(), 
the first parameter is the target object where the properties of the source objects will be copied to.

In the code const mergedObj1 = Object.assign({}, obj4, obj5);, the {} creates a new empty object 
that will receive the properties from obj4 and obj5 during the merge operation.
*/

// Merging objects using the ES6 spread operator
const mergedObj2 = { ...obj4, ...obj5 };
console.log("Merged object using ES6 spread operator:", mergedObj2);


//10. Give me an example of call and apply each with it's usage
console.log("\n10)****************************************** ");
console.log("\nGive me an example of call with it's usage")
const emp1 = {
    firstName: "John",
    lastName: "Doe"
};
const emp2 = {
    firstName: "Jane",
    lastName: "Smith"
};


function employee(city, country) {
    return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
}

const result = employee.call(emp1, "New York", "USA"); //John Doe, New York, USA
const result2 = employee.call(emp2,"London", "UK"); // Output: Jane Smith, London, UK
console.log(result)
console.log(result2)




console.log("\nGive me an apply with it's usage");
// Using apply() method
const employee2 = {
    fullName: function(city, country) {
        return `${this.firstName} ${this.lastName}, ${city}, ${country}`;
    }
};

const emp3 = {
    firstName: "John",
    lastName: "Doe"
};

const emp4 = {
    firstName: "Jane",
    lastName: "Smith"
};
const location = ["Paris", "France"];

console.log(employee2.fullName.apply(emp3, location)); // Output: John Doe, Paris, France
console.log(employee2.fullName.apply(emp4, location)); // Output: Jane Smith, Paris, France