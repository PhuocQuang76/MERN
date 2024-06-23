let mongooseObj = require("mongoose");
const { ObjectId } = require('mongodb');
schemaObj = mongooseObj.Schema; //using the schema class from mongoose


mongooseObj.connect("mongodb://127.0.0.1/mernstack18");


const productSchema = new schemaObj({
    productCode:{type:String, required:true},
    name : {type:String, require:true},
    price : {type:Number, require:true},
    image : String,
    desc : String,
    rating: String,
    reviews : [{
        userId:String,
        rating:Number,
        comment:String
    }]
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);


// Create the student model
const ProducttModel = mongooseObj.model('product', productSchema);


module.exports = ProducttModel;



// 30-05-2024 - Create Product and Display Them

// Create a product component using functional component and hooks (try using useRef as react hook and implement accordingly)
// Create a form to allow user to submit Product Details - name, price, desc, rating
// Create an action method to add the detail to database using a server api
// Server Side - Create product router and api to save the product using productdatamodel
// Everything should be done in continuation with shopping cart project