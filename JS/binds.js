//call and apply help us to set the context by immediately executing the function
//whenever we need to have some delay for execution like - button click, mouse - hover

const obj = {
    name: 'Alice',
    greet: function() {
        var innerFunction = function(){
            console.log(`Hello, ${this.name}!`);
        }.bind({name:"nhon"});

        innerFunction();
    }
};

obj.greet(); // Output: Hello, Alice!

console.log("Print starts!!")

setTimeout(clbkFunc, 1000) //will execute clbkFunc after 1 second but will not hold other executions

console.log("Print ends!!")

//call back function to print in setTimeout
function clbkFunc(params) {
    console.log("Prints after 1 second!!")
}

var User = {
    Name : "Otoi",
    Address : "In France",

    GetUserInfo : function () {
        console.log(this) //User - as context

        console.log(`User Info ${this.Name} and ${this.Address}`);

        setTimeout((function () {
            console.log(this) //this - the context gets updated with Timeout, which doesnot have Name and Address in it

            console.log(`SetTimeOut User Info ${this.Name} and ${this.Address}`);    
        }).bind(User), 2000) //bind sets the context back to User after 2 seconds and retruns the function as its, 
                            //unlike call and apply which executes immediately


        var that = this; //that - copies dynamic context
        setTimeout((function () {
            console.log(`SetTimeOut 2 User Info ${that.Name} and ${that.Address}`);// that is copy of this in parent function
        }).bind(this), 2000) 

        setTimeout((function () {
            console.log(`SetTimeOut 3 User Info ${this.Name} and ${this.Address}`);// that is copy of this in parent function
        }).bind({Name:"AIleen", Address:"test"}), 2000) 
    }
}

User.GetUserInfo() //GetUserInfo gets the context (this) as User itself, as it is executing over User

//an example on UI, by doing DOM manipulation

//html example
{/* <button id="newBtnBind">Practice Div</button> */}
// var btn = document.getElementById("newBtnBind")
// var onclick = function(){alert("The name is "+ this.name)}

// btn.addEventListener("click", this.onclick.bind(user1), false) // changing context to user1 upon click
// btn.addEventListener("click", this.onclick, false) //without bind context remains global

// var user1 = {
//     name : "Mueen"
// }

// btn.removeEventListener("click",this.onclick)


//second example

//<button id=​"newBtnBind">​Practice Bind​</button>​
//var selectBtn = document.getElementById("newBtnBind")
//var info = {"Event" : "Click", "Topic" : "Bind"}

//var clickFunc = function(){alert(`The Event is ${this.Event} and topic is  ${this.Topic}`)}
//selectBtn.addEventListener("click", clickFunc.bind(info), false)

//var info2 = {"Event" : "Multiple Click", "Topic" : "UnderStood Bind Purpose"}
//selectBtn.addEventListener("click", clickFunc.bind(info2), false)