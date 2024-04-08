//Polymorphism - No overloading present in JS functions it gets over-written by last definition

//1. Overriding - runtime polymorphism,  <we'll explore, through objects>
//2. Overloading - compile time polymorphism <same name multiple methods with different params and their types>

PrintData(); // No Param

var PrintData = function (param1, param2, param3, param4){
    console.log("4 - Params ", param1, param2, param3, param4)  
}

PrintData("One", "Two", "Three", "Four");

function PrintData() {
    console.log("No Param ")    
}

PrintData(); // No Param

function PrintData(param1) {
    console.log("1 - Param ", param1)    
}
var PrintData = function (param1, param2, param3, param4){
    console.log("5 - Params ", param1, param2, param3, param4)  
}

PrintData("One"); // 1 - Param

function PrintData(param1, param2) {
    console.log("2 - Params ", param1, param2)    
}

PrintData("One", "Two"); // 2 - Params

function PrintData(param1, param2, param3) {
    console.log("3 - Params ", param1, param2, param3)    
}

PrintData("One", "Two", "Three"); // 3 - Params


// var PrintData = function (param1, param2, param3, param4){
//     console.log("4 - Params ", param1, param2, param3, param4)  
// }

// PrintData("One", "Two", "Three", "Four");