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

let schemaObj = mongooseObj.Schema;

// Create a connection to the database
mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2");

let ReportDataModel;
// Check if the model already exists before defining it
if (mongooseObj.models['Report']) {
    ReportDataModel = mongooseObj.model('Report');
} else {
    let reportSchema = new schemaObj({
        age10: Number,
        age20: Number,
        age30: Number,
        age40: Number,
        age50: Number,
        age60: Number,
        age70: Number,
        age80: Number,
        age90: Number,
        age100: Number,
        otherAge:Number,
        numberOfMan: Number,
        numberOfWomen:Number

        
    }, { versionKey: false });

    ReportDataModel = mongooseObj.model("Report", reportSchema);
}

module.exports = ReportDataModel;