//Inheritance
//Encapsulation - Private, Public, internal, protected,...
//Polymorphism
//Abstarction
//Encapsulation - access modifiers : in languages like java help us to prevent/limit the usage of class members

//In Javascript : When we have a function within a function and parent function returns child function, 
// then we can limit what can be accessed by external user through child function this is termed as closure

//currying - when a function returns another instead of values and also repeats same thing we call it currying

function Parent(userName, userPin) {
    //Private scope of parent function
    var name = "David"
    var pin = "25694158"
    var accountName = "Savings Account" // public - on authentication success
    var accountBalance = "$20000" // public - on authentication success
    var accountPassword = "32gfc79s0dd" //private - shouldn't be accesses outside
    
    var child = function(getBalance) { //getBalance - is the parameted for child function
        //Public scope which is accessible to others
        if (getBalance && name==userName && pin==userPin) {
            return {
                name : name, //key value pair 
                accountName : accountName,
                accountBalance : accountBalance
            }
        }
    }

    return child;
}


var closureFuntion = Parent("David", "25694158") //balanceInfo

console.log(closureFuntion(true)); //bool value for getBalance - parameter


//create a sample of your own implementation for closure
console.log("\n Another example 1")
function displayChildrenName(){
    var firstName1 = "Alex";
    var lastName1 = "John";
    var age1 = 24;

    var firstName2 = "Mike";
    var lastName2 = "Lim";
    var age2= 34;

    var childName = function(number){
        if(number == 1){
            return{
                fisrtName : firstName1,
                lastName : lastName1,
                age : age1,
            }
        }else if(number == 2){
            return{
                fisrtName : firstName2,
                lastName : lastName2,
                age : age2,
            }
        }else{
            {}
        }
    }
    return childName;
}

var myChildName = displayChildrenName();
console.log(myChildName(2));


console.log("\nAnother example 2")
// Outer function
function outer1() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        // storing anonymous function
        arr[i] = function () { 
            return i; 
        }
    }

    // returning the array.
    return arr;
}

let get_arr1= outer1();

console.log(get_arr1[0]()); ///4
console.log(get_arr1[1]()); //4
console.log(get_arr1[2]());//4
console.log(get_arr1[3]());//4
/*
Closure doesn’t remember the value of the variable it only points to the variable or stores the reference of the variable and hence, 
returns the current value. In the above code when we try to update the value it gets reflected all because the closure stores the reference. 
*/

//Let’s see the correct way to write the above code so as to get different values of i at different indexes. 
// Outer function
console.log("\n Another example 3")
function outer() {
    let arr = [];
    let i;
    for (i = 0; i < 4; i++) {
        arr[i] = create_Closure(i);
    }

    function create_Closure(val) {
        // return function () {
            return val;
        // }
    }
    
    return arr;
}


let get_arr = outer();
console.log(get_arr[0]);
console.log(get_arr[1]);
console.log(get_arr[2]);
console.log(get_arr[3]);
//In the above code we are updating the argument of the function create_Closure with every call. Hence, we get different values of i at different indexes.