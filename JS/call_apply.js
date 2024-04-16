 // call and apply are the functions present in any function which will help us to decide the run time context of 
// executing function, this way we can associate any object as the run time context (this)

// call - whenever we need to pass parameter we pass it one by one after the object
// apply - we can pass all the parameters as an array after the object


var user = { name:"Bryan", age : 21, session : "Javascript" }
var user2 = { name:"Joel", age : 20, session : "OOJS" }

//this - execution context of executing function

function PrintDetails(comment) {
    //console.log("this", this)

    console.log(comment)

    console.log(this.name, this.age, this.session)
}

PrintDetails("Executing PrintDetail in global context!!")
PrintDetails.call(user, "Executing PrintDetail in user context!!") 
PrintDetails.call(user2, "Executing PrintDetail in user2 context!!")


function GetDetails(concept, session1, session2, session3, session4, session5) {
    //console.log(this)
    console.log(`Call Extension - ${concept}`)  //`asdasda  ${session1} asdasd`

    console.log(`${session1} 
                    ${session2} 
                        ${session3} 
                            ${session4} 
                                ${session5} `)

            
    console.log(`The User Details are as below 
                Name is - ${this.name}
                Age is - ${this.age}
                Session is - ${this.session} `)
    
}

GetDetails.call(user, "Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure")

var Sessions = ["Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure"];

GetDetails.apply(user, ["Web Tech", "AWS", "MERNStack", "DevOPs", "Data Science","Data Structure"])
GetDetails.apply(user2, Sessions)



//GetSessionList - returns list of sessions []

var seesionList = ["JS","ES6","NODEJS","Express","React","Redux"];

GetDetails.apply(user, seesionList)
GetDetails.apply(user2, seesionList)

//just in case we dont want to pass any context but we need to set parameters as array
GetDetails.apply(null, seesionList)

//Create two examples to set the context using student and list of subject attended by students, 
//it should use call and apply do describe both the cases