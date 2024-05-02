// http, req, req, routes, data-encoder, query, 
// configurator to define public or private access
// we will need multiple modules to integrate to build a web server

// express - is a web server which uses node modules to provide us the structure for web server

// a. lightweight
// b. supports http/s restful API's
// c. supported and maintained by node js team

// 
// REST - way of building your API, stateless API, HTTP, JSON - data
// A set of specification, if followed to build a API- webserver is termed as Restful API

// REST - Representational State Transfer Protocol
// 1. http/s - protocol
// 2. http - hypertext type protocol <html - hypertext markup language>
// 3. the information shown is stateless - <to avoid loss of information we save it to server using http verbs>

// 4. http - verbs Post, Get,GetByID,  Put,Patch, Delete <CRUD - Create, Read, Update, Delete>
// Create - Post => whenever we create information
// Read - Get/GetByID => whenever we need to read information
// Update - Put/Patch => {UserName, Address, ID, Mobile, Session}
            //Put - to update the <Address + whole User Object> we need to pass all the user object information
            //Patch - <Address, ID> => New address to update over the ID works for Patch
// Delete - Delete => verb to delete data as all or by ID
// 5. Proper Response with Status Code is required


// Get/UserDetails?name=Wanda ==> the name can be saved

// setup using npm for express js and the API's