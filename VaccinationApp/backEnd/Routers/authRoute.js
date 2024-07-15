let express = require("express")
const bcrypt = require('bcryptjs');

const { generateToken } = require("../Services/tokenGenerator");
const { authenticate } = require("../Middleware/cookieJwtAuth");
const { isValidEmail, isValidText } = require("../Utils/validation");
const { addUser, getUserByEmail , getUsers} = require("../Utils/userAction");

let authRouter = express.Router({}) // 
let authDataModel = require("../DataModels/authDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data


authRouter.post('/signup', async (req, res, next) => {
    
    const data = req.body;
    let errors = {};
  
    //validate email
    if(!isValidEmail(data.email)){
        errors.email = 'Invalid email.';
    }else {
        try {


            const existingUser = await getUserByEmail(data.email);
            if(existingUser){
                errors.email = "Email is already existed.";
            }
        } catch (error) {}
    }

    //validate password
    if (!isValidText(data.password, 6)) {
        errors.password = 'Invalid password. Must be at least 6 characters long.';
    }

    //Check id error exist. If error exist the return
    if (Object.keys(errors).length > 0) {
        return res.status(422).json({
          message: 'User signup failed due to validation errors.',
          errors,
        });
    }

    try{
        const createdUser = await addUser(data);
        const authToken = generateToken(createdUser.email);
        res.cookie("token", authToken, {
            httpOnly: false,
            maxAge: 60 * 60 * 24, // 1 hour
        });

        res
        .status(201)
        .json({ message: 'User created.', user: createdUser, token: authToken });
    } catch (error) {
      next(error);
    }
});



// authRouter.post('/login', async (req, res, next) => {
//     let errors = {};
//     const { email, password } = req.body;
//     console.log("email:"+ email);
//     console.log("password:"+ password);
//     //validate email
//     // if(!isValidEmail(data.email)){
//     //     errors.email = 'Invalid email.';
//     // else{}
//     try {
//         const user = await getUserByEmail(email);
//         console.log("user:"+ user.email);
//         if (!user) {
//             errors.email = 'Invalid email.';
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         const passwordMatch = await bcrypt.compare(password, user.password);
//         console.log("passwordMatch"+passwordMatch);

//         if (!passwordMatch) {
//             errors.password = 'Invalid password.';
//             return res.status(401).json({ message: 'Invalid credentials' });
//         }

//         //Check id error exist. If error exist the return
//         if (Object.keys(errors).length > 0) {
//             console.log("eer:" + errors);
//             return res.status(422).json({
//             message: 'User login failed due to validation errors.',
//             errors,
//             });
//         }

//         // Passwords match, generate token and return it
//         const authToken = generateToken(user.email);
//         console.log("authToken"+authToken);
//         res.cookie("token", authToken, {
//             httpOnly: false,
//             maxAge: 60 * 60 * 24, // 1 hour
//         });
//         console.log("user:"+user.firstName);

    
//         res.status(200).json({ message: 'Login successful', user:user,token: authToken });


//     } catch (error) {
//         next(error);
//     }
// });

authRouter.post('/login', async (req, res, next) => {
    let errors = {};
    const { email, password } = req.body;

    const user = await authDataModel.findOne({ email});

    if(!user){
        errors.email = 'Invalid email.';
    }else{
        const passwordMatch = await bcrypt.compare(password, user.password);
        console.log("passwordMatch"+passwordMatch);
    
        if (!passwordMatch) {
            errors.password = 'Invalid password.';
            
        }
    }
    
    
    
        //Check id error exist. If error exist the return
    if (Object.keys(errors).length > 0) {
        console.log("eer:" + errors);
        return res.status(422).json({
        message: 'User login failed due to validation errors.',
        errors,
        });
    }

    try{
        // Passwords match, generate token and return it
        const authToken = generateToken(user.email);
        console.log("authToken"+authToken);
        res.cookie("token", authToken, {
            httpOnly: false,
            maxAge: 60 * 60 * 24, // 1 hour
        });
        console.log("user:"+user.firstName);
        res.status(200).json({ message: 'Login successful', user:user,token: authToken });

    } catch (error) {
        next(error);
    }
});

//Get all registerd users
// Route to get all registered users
authRouter.get('/getUsers', async (req, res, next) => {
    try {
        const users = await getUsers(); // Call the function to retrieve users from the database
        res.status(200).json({ message: 'Get users successful', users });
    } catch (error) {
        next(error);
    }
});




module.exports = authRouter;

