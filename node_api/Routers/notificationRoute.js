let express = require("express")

let notificationRouter = express.Router({}) // 

let notificationDataModel = require('../DataModels/NotificationModel');// Define the POST API endpoint to set static notifications in the database



notificationRouter.post('/addStaticNotifications', async (req, res) => {
  try {
      const staticNotifications = req.body.staticNotifications;
      
      // Find the notification document
      let notificationDocument = await notificationDataModel.findOne(); // Assuming you have only one document

      if (!notificationDocument) {
          // If no document is found, create a new one
          notificationDocument = new notificationDataModel({});
      }

      // Loop through the staticNotifications array and add new items to staticNotifications field
      for (const notification of staticNotifications) {
          const existingNotification = notificationDocument.staticNotifications.find(n => n.staticId === notification.staticId);
          if (!existingNotification) {
              notificationDocument.staticNotifications.push(notification);
          }
      }

      // Save the updated document
      await notificationDocument.save();
      // const responseData = notificationDocument.staticNotifications

      res.status(200).json( notificationDocument.staticNotifications);
  } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Error adding static notifications" });
  }
});

notificationRouter.post('/addDynamicNotification', async(req,res) => {
  try {
    const staticNotifications = req.body

  }catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error adding dynamic notifications" });
  }
})














notificationRouter.post('/addDynamicNotification', async (req, res) => {
  try {
    const { userId, message } = req.body;

    // Check if userId and message are provided in the request body
    if (!userId || !message) {
      return res.status(400).json({ error: "userId and message are required fields" });
    }

    // Create a new notification object with userId and message
    const newNotification = { userId, message };

    // Find a document and update it by adding the new notification to the dynamicNotification array
    const updatedNotification = await notificationDataModel.findOneAndUpdate(
      {},
      { $push: { dynamicNotification: newNotification } },
      { new: true }
    );

    // Respond with a success message and the updated notification
    res.status(200).json({ message: "Dynamic notification added successfully", notification: updatedNotification });
  } catch (error) {
    // Handle any errors that occur during the process
    res.status(500).json({ error: "Error adding dynamic notification" });
  }
});


notificationRouter.get('/getAllNotifications', async (req, res) => {
  try {
    // Fetch all notifications from the database
    const allNotifications = await notificationDataModel.find();
    res.status(200).json({ notifications: allNotifications });
  } catch (error) {
    res.status(500).json({ error: "Error getting all notifications" });
  }
}),

notificationRouter.delete('/deleteotificationById',async(req,res) => {
  try {
    // Fetch all notifications from the database
    
  } catch (error) {
    res.status(500).json({ error: "Error getting all notifications" });
  }
});




notificationRouter.delete('/deleteDynamicNotificationByIndex/:index', async (req, res) => {
  try {
    const { index } = req.params;

    // Find the document using the correct model
    const notification = await notificationDataModel.findOne();

    // Check if the index is valid
    if (index >= 0 && index < notification.dynamicNotification.length) {
      // Remove the item at the specified index
      notification.dynamicNotification.splice(index, 1);

      // Save the updated document
      const updatedNotification = await notification.save();

      res.status(200).json({ message: "Dynamic notification deleted successfully", notification: updatedNotification });
    } else {
      res.status(404).json({ error: "Invalid index provided" });
    }
  } catch (error) {
    res.status(500).json({ error: "Error deleting dynamic notification" });
  }
});

module.exports = notificationRouter;








