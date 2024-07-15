let mongooseObj = require("mongoose");

schemaObj = mongooseObj.Schema;//using the schema class from mongoose
mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2");

const hospitalSchema = new schemaObj({
    name:{ type:String, required:true},
    address : String,
    type : String,
    charge: Number
},{
    versionKey : false //false - set to false then it wont create in mongodb
});

// Create the student model
const HospitalDataModel = mongooseObj.model('hospital', hospitalSchema);

// Export the student model
module.exports = HospitalDataModel;
