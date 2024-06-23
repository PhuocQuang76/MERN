const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
    user:{type:String, require:true},
    message:{type:String, require:true},
    url:{type:String, require:true},
},
{
    versionKey: false //false - set to false then it wont create in mongodb
}
);


// Create the  Notification model
const NotificationtModel = mongooseObj.model('notification', notificationSchema);

// Export the  Notification model
module.exports = NotificationtModel;