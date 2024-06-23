let express = require("express");

let studentRouter = express.Router({}) //

let studentDataModel = require("../DataModels/StudentDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data
let hobbyDataModel = require("../DataModels/HobbyDataModel"); //this gives access to all the methods defined in mongoose to access mongo db data

studentRouter.post("/save",(req,res) => {
    console.log(req.body) //json data posted from API in body
    
    let newStudent = new studentDataModel(req.body);

    studentDataModel.findOne({studentName:newStudent.studentName})
        .then((existingStudent)=>{
            if(existingStudent) {
                console.log("Student already existed ", existingStudent);
                res.send(existingStudent);
            }
            else {//if user object is not present in users collection so we need to create 
                //new user and this is sign up

                newStudent.save()
                    .then((savedStudent)=>{//will get _id once document is created
                        console.log("successful saved ", savedStudent);
                        res.json(savedStudent);
                    
                    }).catch((err)=>{
                        console.log('Error saving student:', err);
                        res.status(500).send('Error while saving student new object');
                    })
            }
        })
        .catch((err)=>{
            console.log("err sign in", err);
            res.send("error while searching user sign in")
        })
    

})

studentRouter.post("/saveHobby",(req,res) => {
    let newHobby = new hobbyDataModel(req.body);
    
    hobbyDataModel.findOne({name:newHobby.name})
        .then((existingHobby)=>{
            if(existingHobby) {
                console.log("Hobby already existed ", existingHobby);
                res.send(existingHobby);
            }
            else {//if user object is not present in users collection so we need to create 
                //new user and this is sign up

                newHobby.save()
                    .then((savedHobby)=>{//will get _id once document is created
                        console.log("successful saved ", savedHobby);
                        res.json(savedHobby);
                    
                    }).catch((err)=>{
                        console.log('Error saving student:', err);
                        res.status(500).send('Error while saving hobby new object');
                    })
            }
        })
        .catch((err)=>{
            console.log("err sign in", err);
            res.send("error while save hobby")
        })
    
})


module.exports = studentRouter;