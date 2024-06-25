let express = require("express")
let session = require("express-session");

const { generateToken } = require("../Service/tokenGenerator");
const { authenticate } = require("../Middleware/authMidleware");

let userRouter = express.Router({}) // 
let UserDataModel = require("../DataModels/UserDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data


// userRouter.use(session({
//     secret: "your-secret-key",
//     resave: false,
//     saveUninitialized: true
//   }));



//we'll accept the user object as req.body, use it to map with user.schema key value pair
//initialize the userModel, if no validation error, then use the mongoose method to save user
userRouter.post("/api/signinup",(req, res)=>{ //localhost:9000/user/api/signinup
    console.log(req.body) //json data posted from API in body
    //initialize the userSchema


    UserDataModel.findOne({ userName: req.body.userName }).then((existingUser) => {
        if (existingUser) {
            //generateToke by user._id
            generateToken(res, existingUser._id);

            console.log("sign in success", existingUser);
            res.send(existingUser);
        } else {
            let newUser = new UserDataModel(req.body);

            newUser
            .save()
            .then((newUser) => {   
                console.log("successful signup", newUser);
                //will get _id once document is created, and generate toke base on that _id
                generateToken(res, newUser._id);

                res.send(newUser);
            })
            .catch((err1) => {
                console.log("err signup", err1);
                res.send("error while sign up");
            });
        }
    }).catch((err) => {
        console.log("err sign in", err);
        res.send("error while searching user sign in");
    });
});



// //Logout
// userRouter.post("/api/logout", (req, res) => {
//     req.session.destroy((err) => {
//       if (err) {
//         console.log("Error while logging out:", err);
//         res.send("Error while logging out");
//       } else {
//         res.send("Logged out successfully");
//       }
//     });
// });


//code to fetch all the users from user collection and return back 
userRouter.get("/api/users",authenticate,(req, res)=>{
    UserDataModel.find()
    .then((allusers)=>{
        res.send(allusers)
    })
    .catch(()=>{
        res.send("error while fetching users")
    })
})
  


  module.exports = userRouter;