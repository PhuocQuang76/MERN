//import mongoose, use the mongoose to create db if not there a connection
//a schema to demonstrate the data key value pairs + validations
//using schema create a datamodel to provide mongoose methods to access modify data
//and create the collection
//This data model will allow us to do mapping with mongodb using mongoose
//MongoDB - non-relational, document oriented DB, non-schema
//create a connection using mongodb client, 
//use mongoose to make connection to mongodb
//get schema object created and also develop data model to be used in api
//set validations and data types in schema
//although mongodb is schema less but with mongoose we can create schema to start with
let mongooseObj = require("mongoose");
const { isValidEmail, isValidText } = require("../Utils/validation");
const { addUser, getUser } = require("../Utils/userAction");

let schemaObj = mongooseObj.Schema;

// Create a connection to the database
mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2");

let AuthDataModel;
// Check if the model already exists before defining it
if (mongooseObj.models['Auth']) {
    AuthDataModel = mongooseObj.model('Auth');
} else {
    let authSchema = new schemaObj({
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        age : { type :Number, require:true },
        gender : {type:String, require:true},
        profession: String,
        diseases:String,
        email: { type: String, required: true },
        password: { type: String, required: true }
        
    }, { versionKey: false });

    AuthDataModel = mongooseObj.model("Auth", authSchema);
}

module.exports = AuthDataModel;