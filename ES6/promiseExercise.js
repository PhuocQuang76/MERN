// **** Exercise ***** ///
// create a promise object with name student on it after 2 seconds student is pass (resolved case)
// and set status stating learnt es6
// then for rejected case set that status - i am progressing
console.log("\n1) Create a promise object with name student on it after 2 seconds student is pass (resolved case)");
let student = new Promise((resolve, reject) => {
    setTimeout(() => {
        let data = {
            status: "stating learnt es6"
        };
        resolve(data);
    }, 2000);

    setTimeout(() => {
        let data = {
            status: "i am progressing"
        };
        reject(data);
    }, 3000); // Increased the time to show a delay in rejection
});

console.log(student);

student.then((resolve) => {
    console.log("Success fetching data:", resolve);
}).catch((reject) => {
    console.error("Error fetching data:", reject);
});



console.log("Promise Completed!!!");
console.log(student)