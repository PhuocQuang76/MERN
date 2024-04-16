//for ->  array[1].key
//foreach -> (this)
//1. loops through length
//2. to access the value we pass key as index for current object array[1].key , (this)

// for in loop - iterates over the property value, basically meant for json objects with - key values

//for in loop  
let person = {fname:"John", lname:"Doe", age:25, address : {}}; 

console.log("In: ====")
for (const key in person) {
    //if (Object.hasOwnProperty.call(person, key)) { //this is a check to confirm that key is present else set  the context to current key
        const element = person[key];
        //console.log(`${key}  ${element}`)
    //}
}

let arr = [3,5,7]; //{0:3, 1:5, 2:7, newKey : "Sierra"}
//arr[3] = "Mayuri"

for (const key in arr) {
    console.log(key);
}

let arr1 = {a:1,b:2,c:3}
arr1.d = 4
for (const key in arr1) {
    console.log(key);
    console.log(arr1[key]);
}


console.log("Of: ====")
/*
const myObject = { a: 1, b: 2, c: 3 };

// Using Object.keys() to iterate over keys
for (let key of Object.keys(myObject)) {
    console.log(key);
}

// Using Object.entries() to iterate over key-value pairs
for (let [key, value] of Object.entries(myObject)) {
    console.log(`${key}: ${value}`);
}
In the first loop, Object.keys(myObject) returns an array of the object's keys (['a', 'b', 'c']) which are then iterated over using a for-of loop to log each key.

In the second loop, Object.entries(myObject) returns an array of key-value pairs ([['a', 1], ['b', 2], ['c', 3]]) which are destructured into key and value variables to log the key and value pairs.

*/


console.log("ADD more value into array ====")
console.log("============");
let arr2 = [3,5,7]; //{0:3, 1:5, 2:7, newKey : "Sierra"}
arr2[3] = "ann"
arr2.newV = "phu"

for (const key in arr2) {
    console.log(key);
}
console.log(arr2)