let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose


//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 

let studentSchema = new schemaObj({
    studentName: {type:String, required:true },
    studentAge : Number,
    studentAddress : String
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

// Create the student model
const StudentModel = mongooseObj.model('student', studentSchema);

// Export the student model
module.exports = StudentModel;