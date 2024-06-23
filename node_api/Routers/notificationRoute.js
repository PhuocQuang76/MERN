let express = require("express")

let notifiationRouter = express.Router({}) // 

let notificationDataModel = require('../DataModels/NotificationModel');

// function to create notifications for a user
const createNotification = async (userId, message, url) => {
    // Search for existing notification
    const existingNotification = await Notification.findOne({
      user: userId,
      url,
    });
  
    if (existingNotification) {
      // Update the existing notification
      existingNotification.message = message;
      await existingNotification.save();
    } else {
      const notification = new Notification({
        user: userId,
        message,
        url,
      });
      await notification.save();
    }
  };