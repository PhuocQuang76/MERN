let mongooseObj = require("mongoose");
schemaObj = mongooseObj.Schema; //using the schema class from mongoose


//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18-2"); 

let registerSchema = new schemaObj({
    userId: {type:String,require:true},
    items:[
       
    ]
    
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);

const RegisterDataModel = mongooseObj.model('register',registerSchema)
module.exports = RegisterDataModel;
