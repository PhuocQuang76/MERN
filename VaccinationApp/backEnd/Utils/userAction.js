const { hash } = require('bcryptjs');
let authrDataModel = require("../DataModels/authDataModel");


const addUser = async (data) => {
    const { email, password } = data;

    try {
        const existingUser = await authrDataModel.findOne({ email: email });
        if (existingUser) {
            throw new Error("User already exists");
        }

        const hashedPw = await hash(password, 12);
        data.password = hashedPw;
        const newUser = new authrDataModel(data);
        return await newUser.save();
    } catch (error) {
        throw new Error("Error adding user: " + error.message);
    }
};

// const getUserByEmail = async (email) => {
//     try {
//         const user =  authrDataModel.findOne({ email: email });
//         return user;
//     } catch (error) {
//         return(error);
        
//     }
// };

const getUsers = async () => {
    try {
        const users = await authrDataModel.find(); // Assuming User is your Mongoose model for users
        return users; // Return the array of users
    } catch (error) {
        throw new Error("Error getting all users: " + error.message);
    }
}

// Existing code for addUser and getUser functions

module.exports = { addUser,getUsers };