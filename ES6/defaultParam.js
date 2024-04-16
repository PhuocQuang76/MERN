//Default parameters are used to pass and assign in a function where we may or may not be able to pass the values

function Sum(a = 0, b) {
    console.log(a)
    console.log(b)

    return a + b
}


console.log(Sum(10, 9)) // 19
console.log(Sum(9)) // 9 , NaN
console.log(Sum()) // 0 , Undefined