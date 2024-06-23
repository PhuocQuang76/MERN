

let mongooseObj = require("mongoose");


schemaObj = mongooseObj.Schema; //using the schema class from mongoose
const cron = require('node-cron');


mongooseObj.connect("mongodb://127.0.0.1/mernstack18");


const cartSchema = new schemaObj({
    
    userId: { type:String, required:true},
    items: [
        // {
        //     productCode:{type:String, required:true},
        //     name : {type:String, require:true},
        //     price : {type:Number, require:true},
        //     totalPrice : {type:Number, require:true},
        //     image : String,
        //     desc : String,
        //     rating: String,
        //     quantity: {type: Number,default: 1}
        // }
    ],
    
}
,
{
    versionKey: false //false - set to false then it wont create in mongodb
});


// Create the student model
const CartModel = mongooseObj.model('cart', cartSchema);


//Update items status to "delivered" after 2 days of being in "accepted" status

cron.schedule('* * * * *', async () => { // Run every minute
    
    const oneMinuteAgo = moment().subtract(1, 'minutes');

    try {
        const cart = await CartModel.findOne(); // Assuming you have a way to retrieve the cart document

        for (const item of cart.items) {
            const itemDate = moment(item.date);
            const timeDiff = moment.duration(oneMinuteAgo.diff(itemDate)).asMinutes(); // Calculate difference in minutes

            if (timeDiff <= 1 && item.status === "Accepted") {
                item.status = "Delivered";
            }
        }

        await cart.save();

        console.log("Items status updated to 'Delivered' after 1 minute if date has just passed 1 minute and status is 'Accepted'.");
    } catch (err) {
        console.error("Error updating items status:", err);
    }
});
module.exports = CartModel;

