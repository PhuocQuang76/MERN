
//express router - class to create the route table
//define the API verbs
//define the API verbs restrictions
//doesn't needs express app invocation
//we can work same way we did with express app

let express = require("express")

let defaultRouter = express.Router({caseSensitive:true}) // can set some configurations for api at top level


defaultRouter.get('/', function (req, res) {
    res.send('Hello World!!! From Wanda!!')
  })
  
  
//QUERY: 
//http://localhost:4000/data?name=suyash&session=express
//req.query - is used to read the values present after ? in api path

  defaultRouter.get('/data', function (req, res) {
      let queryString = req.query //req.query - is used to read the values present after ? in api path
   
      //console.log(queryString)
      //console.log(res)
      console.log(req)
      if (queryString.session == "express") {
          res.json({"name " : queryString.name})
      }else{
          res.json(queryString)
      }
  })
  
  
  
//PARAM 
//http://localhost:4000/nameByID/2000
//req.params["id"] //reads the parameter passed in path of API, we can have multiple query params

  defaultRouter.get('/nameByID/:id', function (req, res) {
      let queryParam = req.params["id"] //reads the parameter passed in path of API, we can have multiple query params
   
      console.log(queryParam)
      if (queryParam == 2000) {
          res.send("<h1>User is present</h1>")
      }else{
          res.send("<h1>User is not present</h1>")
      }
  })
  
  
  defaultRouter.post('/adduser', function (req, res) {
      let data = req.body // {} this will contain the information passed as req.body as JSON object
  
      res.json(data)
  })
  
  
  defaultRouter.get('/getAlert', function (req, res) {
      res.sendFile(__dirname+"/Public/index.html") //http://localhost:4000/static/index.html
  })
  
  // a hack to handle static files but a feasible approach
  // defaultRouter.get('/alert_me.js', function (req, res) {
  //     res.sendFile(__dirname+"/Public/alert_me.js")
  // })
  
  
  //fallback for every API not available
  //this is wild card to accept all calls
  // defaultRouter.all('*', function (req, res) {
  //     res.sendFile(__dirname+"/Public/index.html")
  // })
  

  module.exports = defaultRouter;
