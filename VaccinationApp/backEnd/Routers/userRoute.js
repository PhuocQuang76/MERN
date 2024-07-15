let express = require("express")

const { generateToken } = require("../Services/tokenGenerator");
const { authenticate } = require("../Middleware/cookieJwtAuth");
const { isValidEmail, isValidText } = require("../Utils/validation");
const { addUser, getUser } = require("../Utils/userAction");


let userRouter = express.Router({}) // 
let RegisterDataModel = require("../DataModels/registerDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data

userRouter.post('/addRegister', async (req, res) => {
    // Request body logging
    console.log("requestBodyUserId: " + req.body.userId);

    try {
        const { userId, item } = req.body;
        
        // console.log("item:" + item.amount);
        

        // Check if the user's register entry already exists
        let existingRegister = await RegisterDataModel.findOne({ userId });


        if (!existingRegister) {
            // Create a new register entry if it does not exist
            existingRegister = new RegisterDataModel({ userId, items: [item] });
            await existingRegister.save();
            console.log("New register entry created.");
            
        } else {
            // Add the item to the existing register entry
            existingRegister.items.push(item);
            await existingRegister.save();
            console.log("Item added to existing register entry.");
        }

        res.status(200).json({ message: 'Register entry added successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

//http://localhost:9091/getByStatus/userId/status
userRouter.get('/getByStatus/:userId/:status', async (req, res) => {
    const status = req.params.status;
    console.log(status);
    const userId = req.params.userId;
    console.log(userId);
    try {
        const registeredData = await RegisterDataModel.find({ userId }); // Use find instead of findOne
        if (!registeredData || registeredData.length === 0) {
            res.status(404).json({ error: 'Cart not found' });
        } else {
            const filteredItems = registeredData.reduce((acc, curr) => {
                curr.items.forEach((item, index) => {
                    if (item.status === status) {
                        acc.push({ _id: curr._id, itemIndex: index, item });
                    }
                });
                return acc;
            }, []);
            console.log("filteredItems:" + filteredItems);
            res.json(filteredItems);
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// userRouter.get('/getByStatus/:userId/:status', async(req,res)=> {
//     const status = req.params.status;
//     console.log(status);
//     const userId = req.params.userId;
//     console.log(userId);
//     try{
//         const register = await RegisterDataModel.findOne({userId});
//         // console.log(register.userId);
//         if (!register) {
//             res.status(404).json({ error: 'Cart not found' });
//         } else {
//             const statusItems = register.items.filter((item) => item.status === status);
//             res.status(200).json(statusItems);
//         }


//     }catch(error){
//         console.error(error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// });




module.exports = userRouter;