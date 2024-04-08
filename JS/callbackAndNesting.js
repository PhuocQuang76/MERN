//Callback - we pass a function as parameter to another function to increase the resusability is termed as callback function

//a common feature enabled function can be created and used as callback function when in need
function PrintDetails(printMsg, param1, param2) {
    console.log(printMsg, param1, param2)
}


function GetUserInfo(firstName, lastName, printCallBk) {
    printCallBk("User Details are ", firstName, lastName)   //callback function executes to give desired result
}

GetUserInfo("David", "Miller", PrintDetails)

function GetSesionInfo(sessionName, sessionTopic, printCallBk) {
    printCallBk("Session details are ", sessionName, sessionTopic)    
}

GetSesionInfo("MERNSTack", "Core Javascript - CallBack ", PrintDetails)


//nested function and javascript currying (arrange raw, )

var number1 = 20;

function A(a) {
    //console.log(d) //- scope of variables decrease when we go up
    
    return function B(b) {
        
        return function C(c) {
            
            return function D(d) {
                   return  a + b + c + d + number1
            }
        }
    }   
}

var objA = A(5) //returns function B
var objB = objA(10) //returns function C
var objC = objB(15) //returns function D

var result = objC(20) //returns result a+b+c+d+20 = 70

console.log(result)


//chained execution

var result2 = A(5)(10)(15)(30)  //A()=>B()=>C()=>D()
console.log(result2)