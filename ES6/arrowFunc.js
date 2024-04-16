
// Arrow Function or FAT Arrow function or Lambda Expressions are ways to create functions with following benefits


//1. Creates Shorter approach to write function


function Add(a, b) {
    return a + b
}


// User.Details()
// Add.call(User);
//Add();



() => {} //Arrow function


let Func_Arrow = (a, b)=> a+b


//console.log(Func_Arrow(5,9))


let Func_Arrow_1 = (a = 0, b = 0)=> 
        {
            if(a+b >= 15)
                return "Greater Than or Equal to 15 " +(a+b)
            else
                return "Less than 15 " +(a+b)
        }


// console.log(Func_Arrow_1(7,9))
// console.log(Func_Arrow_1(9))



//2. Arrow function copies the context of parent as its own context


//global - context
// Name
// Address

/*


var User = {
    Name : "Otoi",
    Address : "In Paris",


    GetUserInfo : ()=>{
    //    console.log(this) //User - as context
        console.log(`User Info ${this.name} and ${this.Address}`);


        var that = this; //that - copies dynamic context
        setTimeout(function () {
                console.log(`SetTimeOut User Info ${that.Name} and ${that.Address}`);// that is copy of this in parent function
        }, 2000) 


        //copies the context of immediate parent //User
        // _this = this
        setTimeout(() => {
            console.log(`SetTimeOut User Info ${this.Name} and ${this.Address}`);    //_this.Name & _this.Address
        }, 2000) 


       }
}


User.GetUserInfo()

*/

var User = {
    Name: "Otoi",
    Address: "In Paris",
    age: 45,
    GetUserInfo: function() {
        let age = 34;
        console.log(`User Info ${this.Name} and ${this.Address}`);
        person = () => {
            console.log(age);
            
        }
        
        person(); // Call the person function to see the output
        setTimeout(() => {
            console.log(`SetTimeOut User Info ${this.Name} and ${this.Address}`);
        }, 2000);
    }
};

User.GetUserInfo();
