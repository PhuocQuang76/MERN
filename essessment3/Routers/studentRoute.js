const express = require('express');

const studentRoute = express.Router({caseSensitive:true});
let fs = require('fs');

// Define student routes
studentRoute.get('/', (req, res) => {
    res.send('This is the student API');
  });

console.log("=============== File write starts ==============")
//4. Create API's in default setup - getStudentDetails - Pass Student info like 
// - Name, Age, Address, Session as query string
//5. Save this information received in #4  to a file named studentIfo using fs module async way
//http://localhost:3000/api/student/getStudentDetails?name=Aileen&age=34&address=LosAngeles&session=essessment3


studentRoute.get('/getStudentDetails', async (req, res) => {
    const { name, age, address, session } = req.query;
    const studentData = { name, age, address, session };

    try {
        // Read the existing data from the file
        const retrievedData = await new Promise((resolve, reject) => {
            fs.readFile('StudentList.json', 'utf-8', (err, retrivedData) => {
                if(err){
                    reject(err);
                }else{
                    resolve(retrivedData);
                }
            });
        });

        console.log("retrievedData: " + retrievedData);

        let newData;
        if(retrievedData){
            const oldData = JSON.parse(retrievedData);
            newData = JSON.stringify([...oldData, studentData]);
        }else{
            newData = JSON.stringify([studentData]);
        }

        // Write the updated data back to the file
        await new Promise((resolve, reject) => {
            fs.writeFile('StudentList.json', newData, 'utf-8', (err) => {
                if (err) {
                    reject(err);
                } else {
                    resolve();
                }
            });
        })
        

        res.send('Student data saved successfully\n' + newData + '\n');


    } catch (err) {
        console.error(err);
        res.status(500).send('Error reading student data');
    }
});


//6. Give me an example of map and set collection each with at least four properties implemented - 
//like get, set, clear, etc

console.log("=========== MAP ===========");
let studentMap = new Map();
studentMap.set("name","Aileen");
studentMap.set("age",34);
studentMap.set("class","Java");

let getDataFromMap_Before = studentMap.get("name");
console.log(getDataFromMap_Before);

studentMap.clear();

let getDataFromMap_After = studentMap.get("name");

console.log(getDataFromMap_After);

console.log("=========== SET ===========");
let studentSet = new Set();
studentSet.add("Aileen");
studentSet.add("Aileen");
studentSet.add("Micheal");
studentSet.add("Mark");

studentSet.forEach(name =>{
    console.log(name);
})

studentSet.clear();
console.log("after clear data ...")
studentSet.forEach(name2 =>{
    console.log(name2);
})


//7. Create a promise object that get resloved after two seconds and rejected after three. 
// Also it returns five ES6 features on resolved

/*
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Arrow functions", "const", "let", "classes", "modules"]);
    }, 2000);

    setTimeout(() => {
        reject("execution is failed  ");
    }, 3000);
});

myPromise.then((response)=> {
    console.log("Execution is successful.\n", response);
}).catch((error)=>{
    console.log("execution is failed\n", error);
})

// console.log("multiple numbers...");


*/
//8. Use the spread and rest operator to create a function which can multiple numbers 
// from 1...n (n is the number of choice)

function multiplyCal(...nums){
    const total = nums.reduce((ini,num)=>{
        return ini * num;
    },1)
    return total;
}

let result = multiplyCal(1,2,3,4,5);
console.log("\nMultiple numbers...");
console.log(result);



//9. Use the question #7 to build promises using async and await - with multithread
console.log("\nAsync Await.....")

let myPromisse2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(["Arrow functions", "const", "let", "classes", "modules"]);
    }, 2000);
    setTimeout(() => {
        reject("execution is failed");
    }, 3000);
});

async function myAsyncFunction() {
    console.log("Async start..")
    try {
        const response = await myPromisse2;
        console.log("Resolved with ES6 features:", response);
    } catch (error) {
        console.log("Rejected with error:", error);
    }
    console.log("Async end..")
}

myAsyncFunction();

// async function combinedFunction(){
//     console.log("Start Async.");
//     try{
//         const result = await myAsyncFunction();
//         if (result.status == "resolve") {
//             console.log("Resolved with ES6 features:", result.features);
//         }
//     }catch(error){
//         console.log("Rejected with error:", error);
//     }

//     console.log("End async.");
// }

// combinedFunction();



//10. Create an example of generator function of your choice
function* sumOddAndSumEven(num){
    let sumOdd = 0;
    let sumEven = 0;
    for(let i = 0; i < num; i++){
        if(i % 2 === 0){
            sumEven += i;
           
        }else{
            sumOdd += i;
            
        }
    }
    //yield { sumOdd, sumEven };
    yield sumOdd;
    yield sumEven;
}
const returnResult = sumOddAndSumEven(5);

console.log("Total sum of odd numbers from 1 to 5:", returnResult.next().done);
console.log("Total sum of even numbers from 1 to 5:", returnResult.next().value);
    





module.exports = studentRoute;


