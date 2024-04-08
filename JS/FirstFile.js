



var user_name = "Aileen"

PrintName(user_name);

function PrintName(name){
    console.log(name)
}

employee("aillen", 32, "HR");

function employee(name, age,position){
    name = name;
    age = age;
    this.position = position;
    console.log("my name is " + name + " " + age + " age and work at " + position + " department"); 
}

// employee("aillen", 32, "HR");