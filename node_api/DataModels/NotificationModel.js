

let mongooseObj = require("mongoose");

//using the schema class from mongoose
schemaObj = mongooseObj.Schema; 
//creates db with name mernstack18 or opens a connection if already present
mongooseObj.connect("mongodb://127.0.0.1/mernstack18"); 




let notificationSchema = new schemaObj({
    staticNotifications : 
    [
            {
                staticId:{ type:Number, required: true },
                message: { type: String, required: true }
            }
    ],
    
    dynamicNotification : [
        {
            userId:{type:String, require:true},
            message:{type:String, require:true}
        }
    ]
    
},
{
    versionKey: false // Set to false then it won't create in MongoDB
});

// Create the student model
const NotificationModel = mongooseObj.model('notification', notificationSchema);


module.exports = NotificationModel;

