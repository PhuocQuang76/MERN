let mongooseObj = require("mongoose");

//using the schema class from mongoose
schemaObj = mongooseObj.Schema; 

//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let hobbySchema = new schemaObj({
    name: {type:String, required:true },
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

// Create the student model
const HobbytModel = mongooseObj.model('hobby', hobbySchema);

// Export the student model
module.exports = HobbytModel;