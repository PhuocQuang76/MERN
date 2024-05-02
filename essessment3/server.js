const express = require('express');
//default app server
const app = express();


//import Routers APIs from outer
const studentRouter = require("./Routers/studentRoute");

//path mounting to studentRouter
app.use("/api/student", studentRouter);


// Change the port number in your server.js file
const PORT = 3000; // Change the port number to 3000 or any other available port
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

/*
//Assessment NodeAPI and ES6 - 01-May-2024

//1. Create a setup for Express Web Server
//2. Configure a route name - Student
//3. Create a express app and configure in server.js to delegate routes with - "Student"
//4. Create API's in default setup - getStudentDetails - Pass Student info like - Name, Age, Address, Session as query string
//5. Save this information received in #4  to a file named studentIfo using fs module async way

//6. Give me an example of map and set collection each with at least four properties implemented - like get, set, clear, etc
//7. Create a promise object that get resloved after two seconds and rejected after three. Also it returns five ES6 features on resolved

//8. Use the spread and rest operator to create a function which can multiple numbers from 1...n (n is the number of choice)
//9. Use the question #7 to build promises using async and await - with multithread
//10. Create an example of generator function of your choice
*/