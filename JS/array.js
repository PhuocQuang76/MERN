//destructuring array
const [fistName, lastName] = ["Micheal", "Sangalang"];
console.log(fistName);
console.log(lastName);

//destructuring object
const {first:firstN,age} = {
    first:"Micheal", 
    age: 35
    
};
console.log(firstN);
console.log(age);

//merge array 1
const hobbies = ["Sport","cooking"];
const newHobbies = ["reading"];

const mergeHobbies = [hobbies, newHobbies];
console.log(mergeHobbies);      //[ [ 'Sport', 'cooking' ], [ 'reading' ] ]


//merge array 2
const mergeHobbies2 = [...hobbies, ...newHobbies];
console.log(mergeHobbies2);      //[ 'Sport', 'cooking', 'reading' ]

//merge object
const user = {
    first:"Micheal", 
    age: 35
    
};
const extendUser = {
    key:true,
    ...user
}
console.log(extendUser);    // { key: true, first: 'Micheal', age: 35 }

//Loop
const arr = ["phuoc",35];

for(const n of arr){
    console.log(n + " ");
}