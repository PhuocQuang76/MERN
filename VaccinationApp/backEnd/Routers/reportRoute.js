
let express = require("express");
const { getUsers  } = require("../Utils/userAction");

let reportRouter = express.Router({});

// Route to get all registered users
reportRouter.get('/getUsers', async (req, res, next) => {
    try {
        const users = await getUsers(); // Call the function to retrieve users from the database
        res.status(200).json({ message: 'Get users successful', users });
    } catch (error) {
        next(error);
    }
});



module.exports = adminRouter;