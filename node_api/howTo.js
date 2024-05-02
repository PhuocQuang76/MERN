
//let express = require("express")

//let environment = process.environment // dev/local , production or testing

//let devHelper = require("chat-gpt")

//yarn - explicitely install and then use
//npm - comes with nodejs

//we need to initialize npm in our directory

// npm init => package.json <with meta data of the project>

//installation

// npm i <module_name>

// dependencies - will be installed locally and in prod server

// npm i <module_name> -D

// dev-dependencies - will be installed locally and but not in prod server 


//to install all packages present in package.json use below -

// npm i  [no need to mention module]


// to uninstall the packages 
// npm uninstall <module_name>

// cyclic dependencies - when we are not able to resolve the dependencies of dependencies
// package.lock.json - helps us to avoid such problems


/*
npm stands for Node Package Manager. 
It is the default package manager for Node.js and JavaScript runtime environment. 
npm is used to install, manage, and share packages or modules of JavaScript code written by other developers.

package-lock.json 
file plays a crucial role in maintaining dependency consistency, version locking, and deterministic behavior 
in Node.js projects managed with npm.

nodemon //use for all files, so have to install by -g 
is a development utility that helps in automatically restarting the Node.js application whenever changes are 
made to the source code files. It is commonly used during the development phase to avoid the manual restart
 of the server after every code change.
 you must run by "npm run start"
 to change it to "start" only; 
 1) open the shel : code ~/.zshrc
 2) add code : alias start="npm start"
 3) reload: source ~/.zshrc

 payload:
 data we pass along with request
*/