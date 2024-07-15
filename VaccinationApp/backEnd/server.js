// Imports the Express.js module into your Node.js application. Express is a popular Node.js
// web application framework that provides a robust set of features for building web servers and APIs.
// Express.js application by requiring the Express module and creating an Express application instance, which sets up 
// the foundation for building a web server or API using the Express framework in a Node.js application.
const express = require('express');
const cookieParser = require("cookie-parser");

// creates an instance of the Express application. This app object represents your Express server and allows you to 
// define routes, middleware, and other configurations for your web application.
const app = express(); //invoking the class to create express app server

// Load environment variables from a .env file
const dotenv = require('dotenv');
dotenv.config();


//CORS (Cross-Origin Resource Sharing) is a mechanism that allows resources on a web page to be requested from another
// domain outside the domain from which the resource originated.

//In the context of ports, when a web application makes a request to a different domain, the browser enforces the Same-Origin Policy 
//by default, which restricts the web page from making requests to a different domain, protocol, or port. CORS is a way to relax 
//this restriction and allow cross-origin requests under controlled conditions.
const cors = require("cors")

const authRouter = require("./Routers/authRoute");
const adminRouter = require("./Routers/adminRoute");
const userRouter = require("./Routers/userRoute");
const defaultRouter = require("./Routers/defaultRoute");

//In a Node.js application, the line global.rootDir = __dirname; is setting a global variable rootDir 
//to the current working directory of the Node.js application.
//global.rootDir = __dirname;: By assigning __dirname to global.rootDir, you are creating a global variable rootDir that
// holds the absolute path of the directory where the current module is located.
global.rootDir = __dirname;

//we can have one main and multiple other express apps at a place
const authApp = express();
const adminApp = express(); // a new express app to handle requests mounted with admin in path
const userApp = express();
const defaultApp = express();


//path mounting to other express app
app.use(cors({ origin: "http://localhost:9091", credentials: true })); //enabling cross origin resource sharing at root level
/*
MaIn Express.js, the express.static middleware function is used to serve static files such as images, 
CSS, JavaScript, etc. It takes a directory path as an argument and serves files from that directory
 when requested
*/
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('Public')) //localhost:9000/static/alert.js


//configuring your Express application to parse incoming JSON data up to 2 megabytes in size and ensuring that the parsed 
//data is a simple JSON object.//
//json middle-ware for setting request content type to json in body
app.use(express.json({limit:'2mb', extended:false})); 


app.use(cookieParser());

app.use("/auth", authApp)
authApp.use(authRouter)

app.use("/admin", adminApp)
adminApp.use(adminRouter)

//api path signinup => localhost:9000/user/api/signinup
app.use("/user", userApp)
userApp.use(userRouter)

app.use("/default", defaultApp)
defaultApp.use(defaultRouter);



// Start the server and listen on port 4000 (for example)
// This line starts the Express server and makes it listen for incoming requests on the port specified by the PORT variable. 
// The callback function () => { ... } is executed once the server starts successfully.
// Specify the desired port number, and let the backEnd use the port 9001
const PORT = 9001; 
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


