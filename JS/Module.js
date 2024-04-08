//Every file in javacript is termed as a module, it could be a single statement or function or a complete application

var User = {
    name : "Bryan",
    address : "Somewhere on earth",
    sessionTraining : "MERNSTack",
    getUserInfo : function () {
        return { 
            name : this.name,
            session : this.sessionTraining,
            address : this.address 
        }
    }
}

var aConstant = 3.1413

globalThis.User = {
    User : "Second User",
    NewUser : "Suyash",
    ConnectionString : "This is the common string for external DB connection "
}


//this helps us to return information from this file to be used in other
module.exports = {
    // User : User, //short hand
    // aConstant :aConstant
    User, //short hand of ES6 reduces same name variable for key and value
    aConstant
}