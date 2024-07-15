// const { sign, verify } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
// const { compare } = require('bcryptjs');
// const { NotAuthError } = require('./errors');

// const KEY = 'supersecret';


//Create a toke expire in 1h
// const createJSONToken = (res, userId) => {
//     return sign({userId},KEY, { expiresIn: '1h' });
// }


const generateToken = (res, email) => {
    const token = jwt.sign({ email }, process.env.MY_SECRET, { expiresIn: '1h' });
    console.log("Generated Token:", token);
    return token;
    

    // // Set jwt as cookie
    // res.cookie("token", token, {
    //     httpOnly: false,
    //     maxAge: 60 * 60 * 24, // 1 hour
    //     // maxAge: 1000 * 60 * 60 * 24, // 1 day
    //     // sameSite: "strict",
    //     // secure: process.env.NODE_ENV !== "development",
    // });
};

module.exports = { generateToken };

