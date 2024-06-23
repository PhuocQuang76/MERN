
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



// 12-06-2024 - Reorder Page
// Reorder
// User to reorder from recent orders or from cancelled orders
// A Simple process just add the order to your cart and replace or merge whatever is present in cart


//https://github.com/CompCodeHub/mern-stack-shopping-cart

// 12-06-2024 - Review Page
// This should get its reviews from recent orders page
// User should be allowed to give ratings and his comments to each products
// Upon successful submission each product should have a link to show its review 
// When user expands product detail we should also see the button to which will take us to its review
// on recent order page we can show a popup to submit rating or a new page its up to you //can use -> react bootstrap
// user should only be able to give rating once cancel button is gone


//JWT authentication
//1) using session cookie
//2 json web token
//JWT module

//https://github.com/CompCodeHub/mern-stack-shopping-cart/tree/main/shopping-cart-project//


//https://github.com/MishraAshish/mernstack18/blob/master/ReactApp/src/app/Common/VaccinationProject.js