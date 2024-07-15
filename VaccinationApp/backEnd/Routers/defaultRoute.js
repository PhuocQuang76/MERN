let express = require("express");


let defaultRouter = express.Router({});
const registerDataModel = require("../DataModels/registerDataModel");


defaultRouter.patch('/checkAndUpdateStatus', async(req, res) => {
    try {
        const registers = await registerDataModel.find();
        const currentDate = new Date();
        console.log("currentDate: " + currentDate);

        for (let acc of registers) {
            for (let i = 0; i < acc.items.length; i++) {
                const e = acc.items[i];
                if (e.status === "accepted") {
                    const appointmentDateTime = new Date(`${e.appointmentDate} ${e.appointmentTime}`);
                    console.log("appointmentDateTime: " + appointmentDateTime);
                    if (appointmentDateTime < currentDate) {
                        const updateItem = acc.items[i];
                        updateItem.status = "vaccinated";
                        acc.items[i] = updateItem;
                    }
                }
            }
            await acc.save(); // Save the updated register
        }

        res.status(200).json({ message: 'Status updated successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
})


// module.exports = defaultRouter;

// adminRouter.patch('/statusUpdate',async (req,res) => {
//     console.log("check");
//      try{
//          const {userId, itemIndex} = req.body;
//          console.log("userId:"+userId);
//          console.log("itemIndex:"+itemIndex);
 
//          const updateRegister = await registerDataModel.findOne({userId});
 
//          if (!updateRegister) {
//              return res.status(404).json({ error: 'Not found the register' });
//          }
 
//          const updateItem = updateRegister.items[itemIndex];
//          updateItem.status = "accepted";
 
//          updateRegister.items[itemIndex] = updateItem;
 
//          await updateRegister.save();
//          res.status(200).json(updateRegister);
 
//      }catch (error) {
//          console.error(error);
//          res.status(500).json({ error: 'Internal server error' });
//      }
//  });


//  adminRouter.get("/getRegisteredByStatus/:status", async (req, res) => {
//     const status = req.params.status;
//     console.log("status: " + status);
//     try {
//         const registeredData = await registerDataModel.find();
//         const filteredItems = registeredData.reduce((acc, curr) => {
//             curr.items.forEach((item, index) => {
//                 if (item.status === status) {
//                     acc.push({ _id: curr._id, userId: curr.userId, itemIndex: index, item });
//                 }
//             });
//             return acc;
//         }, []);
//         res.json(filteredItems);
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });

module.exports = defaultRouter;