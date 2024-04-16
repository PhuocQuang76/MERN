//1.Filter, 2.Map, 3.Some and 4.Reduce
// When we do new changes it should not impact the core object, preserve the immutability

let personsList = [
    {id : 1, name : "John", savedby : "CaptainAmerica"},
    {id : 2, name : "Alice", savedby : "IronMan"},
    {id : 3, name : "Roger", savedby : "CaptainAmerica"},
    {id : 4, name : "Adam", savedby : "IronMan"},
    {id : 5, name : "Alex", savedby : "SpiderMan"},
    {id : 6, name : "Robin", savedby : "Batman"}
];

//1. Print the persons saved by captain america
let savedByCA = personsList.filter(person=>person.savedby == "CaptainAmerica" ? person : "");
console.log(savedByCA);

//2. List the Names saved by Iron Man and add Super Hero before the name 
//let savedByIronMan = personsList.map(person => person.savedby=="IronMan" ? person.name : "").filter(names=> names != "")

let savedByIronMan = personsList.map(person => {
    if(person.savedby == "IronMan"){
        return {"Name" : "Super Hero " + person.name}
    }
    
}).filter(p => p != undefined);

console.log(savedByIronMan);

//3. Check if some one is saved by BlackPanther 
//The some() method is used to check if at least one element in the personsList array has a 
//savedBy property with the value "Batman". If any element satisfies this condition, 
//savedByBatman will be assigned true; otherwise, it will be assigned false.

let checkBlackPanther = personsList.some(p => p.savedby=="IronMan");
console.log(checkBlackPanther);

console.log("\n ==============");
//4. Give me the number of persons saved by each super hero uniquely
let personsSavedUniquely = personsList.reduce((prevVal, currVal, index)=>{
    console.log(prevVal)
    console.log(currVal)
    console.log(index)
    // console.log(array)
    prevVal[currVal.savedby] = prevVal[currVal.savedby] ? prevVal[currVal.savedby] + 1 : 1
   
    console.log(prevVal[currVal.savedby] )
    return prevVal 
}, {}) //new Set()

console.log(personsSavedUniquely)


/*
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
0 is initial value for return 

console.log(sum); // Output: 15
*/

//Question :
///////////////////////////

let persons = [
    {id : 1, name : "John", tags : "javascript"},
    {id : 2, name : "Alice", tags : "dontnet"},
    {id : 3, name : "Roger", tags : "java"},
    {id : 4, name : "Adam", tags : "javascript"},
    {id : 5, name : "Alex", tags : "java"}
];

//1. List the person with javascript tag
//2. List the same on person using java and put programmer after their name, change the name key to Developer
//3. If we have anyone with tag python
//4. Find the number of unique tags and their count present in list

console.log("\n 1) List the person with javascript tag");
let psersonJavaScript = persons.filter(p => p.tags == "javascript");
console.log(psersonJavaScript)


console.log("\n 2) List the same on person using java and put programmer after their name, change the name key to Developer");
let personToProgramer = persons.map(p => {
    if(p.tags == "java"){
        return {"Developer" : p.name + " programmer"}
    }
}).filter(d => d != undefined);
console.log(personToProgramer);


console.log("\n 3) If we have anyone with tag python");
let personsHasTagPython = persons.some(p => p.tags == "python");
console.log(personsHasTagPython);



console.log("\n 4) Find the number of unique tags and their count present in list");
let personUniqueTagsAndCount = persons.reduce((preV, currV, index, array)=>{
    preV[currV.tags] = preV[currV.tags] ? preV[currV.tags] + 1 : 1;
    return preV;
},new Set())
console.log(personUniqueTagsAndCount)