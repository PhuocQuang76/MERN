//importing express top class and then creating express server
console.log("In server js");


// Imports the Express.js module into your Node.js application. Express is a popular Node.js
// web application framework that provides a robust set of features for building web servers and APIs.
// Express.js application by requiring the Express module and creating an Express application instance, which sets up 
// the foundation for building a web server or API using the Express framework in a Node.js application.
const express = require('express');

// creates an instance of the Express application. This app object represents your Express server and allows you to 
// define routes, middleware, and other configurations for your web application.
const app = express(); //invoking the class to create express app server



/*
Node.js with the Express.js framework, you can create multiple instances of Express applications by
 invoking express() multiple times. Each instance of Express represents a separate Express application 
 with its own settings, middleware, and routes. This can be useful for modularizing different parts of
  your server logic or creating separate microservices within a single Node.js application.
*/
const adminApp = express(); // a new express app to handle requests mounted with admin in path

//import Routers APIs from outer
const defaultRouter = require("./Routers/defaultRoute")
const adminRouter = require("./Routers/adminRoute")

/*
aIn Express.js, the express.static middleware function is used to serve static files such as images, 
CSS, JavaScript, etc. It takes a directory path as an argument and serves files from that directory
 when requested
*/
//setting up the middleware static to handle all the static files we need to serve to client
// serve static files like images css using static middleware 
app.use('/static', express.static('Public')) //localhost:9000/static/alert.js






// app.all('*', function(req,res){
//     res.sendFile(__dirname+"/Public/index.html");
// })


//path mounting to another express app
app.use("/admin",adminApp);
adminApp.use(adminRouter);

app.use("/", defaultRouter);



// Start the server and listen on port 4000 (for example)
// This line starts the Express server and makes it listen for incoming requests on the port specified by the PORT variable. 
// The callback function () => { ... } is executed once the server starts successfully.
const PORT = 4000; // Specify the desired port number
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// app.use("/",defaultRouter)

// app.listen(port)

// console.log("api launched at - localhost:"+port)