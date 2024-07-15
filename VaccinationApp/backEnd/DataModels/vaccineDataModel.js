// let mongooseObj = require("mongoose");

// schemaObj = mongooseObj.Schema;//using the schema class from mongoose
// mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2");

// const vaccineSchema = new schemaObj({
//     name: { type:String, required:true},
//     images: String,
//     description: String,
//     age: { type:String, required:true},
//     dose:{ type:String, required:true},
//     type: String,
//     price: { type:String, required:true},
//     contrains: String,
//     sideAffect: String
// },{
//     versionKey : false //false - set to false then it wont create in mongodb
// });

// // Create the student model
// const VaccineDataModel = mongooseObj.model('vaccine', vaccineSchema);

// // Export the student model
// module.exports = VaccineDataModel;


let mongooseObj = require("mongoose");

schemaObj = mongooseObj.Schema;//using the schema class from mongoose
mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2");

const vaccineSchema = new schemaObj({
    name: { type:String, required:true},
    images: String,
    description: String,
    age: [{ type:String, required:true}],
    dose:{ type:String, required:true},
    type: String,
    price: { type:Number, required:true},
    contrains: String,
    sideAffect: String
},{
    versionKey : false //false - set to false then it wont create in mongodb
});

// Create the student model
const VaccineDataModel = mongooseObj.model('vaccine', vaccineSchema);

// Export the student model
module.exports = VaccineDataModel;
