//we have 99000+ package in node js which we use for various tasks

//In Node.js, the console object is a global object that provides a simple debugging console that is similar to 
//the JavaScript console mechanism provided by web browsers. You can directly use console.log without needing 
//to require the console module.
console.log("This is going to log information we want!!!")

//The log function is extracted using destructuring from the console module and then used to log information to the console.
const {log} = require("console") //console module to print/log data in terminal

log("This is going to log information we want!!!")

log(__dirname) //returns fullpath of directory in which file is present
log(__filename) //returns fullpath + filename of directory in which file is present

const os = require("os") //os - is the operating system package
const path = require('path') //will be helpful to rectify the correct path to file or directory, relative path
const util = require('util')
const v8 = require("v8")//gives access to V8 engine of node

//const { http, get } = require("http") //helps us build the restful API's

//http.get()
//http.put()
//http.post()


//event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })

const { EventEmitter } = require("events");

const myEmitter = new EventEmitter();

// Define the request and response objects
const req = {};
const res = {};

myEmitter.on("request", (req, res) => {
    //res.send("Information to be shared with user");
  console.log("Information to be shared with user");
});

// Emit the "request" event
myEmitter.emit("request", req, res);
/*
In this example, the req and res objects are defined before using them in the myEmitter.emit method. This ensures that the variables are properly defined and can be passed as arguments to the event listener.
*/

// const {EventEmitter} = require("events")
// //event emitter - on is custom event
// EventEmitter.on("request","get",(req, res)=>{
//     res.send("Information to be shared with user")
// })

//log(os.userInfo()) 
/*
{
  uid: 501,
  gid: 20,
  username: 'aileen',
  homedir: '/Users/aileen',
  shell: '/bin/zsh'
}
*/
// log(os.cpus())
// const cpuCount = os.cpus().length
// log("CPU Count ", cpuCount)
//console.log(os.hostname()); //aileens-mbp.lan
console.log(os.release()); //22.6.0

//path
console.log(`The file name is - ${path.dirname(__filename)}`); //full path
console.log(`The file name is - ${path.basename(__filename)}`) // current dir only The file name is - bsc_command.js
console.log(`The file name is abosolute - ${path.isAbsolute(__dirname)}`); //true


//callback with data inserted
// process.stdin.on('data', data =>{
//     process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
//     process.exit();
// })

/*
The code snippet you provided is using Node.js's process.stdin to read input from the console and then output the trimmed input using process.stdout.write. Finally, it exits the process using process.exit().

This code listens for the 'data' event on the process.stdin stream, which is emitted when data is available to be read. When data is received, it trims the data, writes it to the process.stdout, and then exits the process.

It's a simple example of reading input from the console in Node.js.

*/
process.stdin.on('exit', data =>{
    log("we are exiting")
    process.stdout.write(`\n\n ${data.toString().trim()} \n\n`)
    
})



// log(v8.getHeapSnapshot())
// log(v8.getHeapStatistics())

//utility module
// util.log(path.basename(__filename))
// util.log(path.basename(__dirname))
// log(util.debuglog())

// process.nextTick(()=>{log("Next Tick Called!!")})