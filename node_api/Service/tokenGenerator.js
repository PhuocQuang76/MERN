// const { sign, verify } = require('jsonwebtoken');
const jwt = require('jsonwebtoken');
// const { compare } = require('bcryptjs');
// const { NotAuthError } = require('./errors');

const KEY = 'supersecret';


//Create a toke expire in 1h
// const createJSONToken = (res, userId) => {
//     return sign({userId},KEY, { expiresIn: '1h' });
// }


const generateToken = (res, userId) => {
    const token = jwt.sign({ userId }, KEY, { expiresIn: '1h' });
    console.log("Generated Token:", token);
    

    // Set jwt as cookie
    res.cookie("jwt", token, {
        httpOnly: false,
        maxAge: 1000 * 60 * 60 * 24, // 1 day
        sameSite: "strict",
        secure: process.env.NODE_ENV !== "development",
    });
};

module.exports = { generateToken };

