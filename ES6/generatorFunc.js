// function name(params) {
//     return 1000
// }

// name()//invocation
// name()//invocation
// name()//invocation
// name()//invocation


/*
Generator functions are used when you want to create a function that can generate a sequence of values over time, rather than computing all the values at once and returning them as a single result. They provide a way to generate values on-demand, which can be useful in scenarios where you have a large amount of data or where you want to conserve memory.

Here are a few reasons why you might want to use a generator function:

1) Efficient memory usage: Generator functions allow you to generate values one at a time, which can be more memory-efficient than generating all the values at once and storing them in memory. This is especially useful when dealing with large datasets or when you don't need to process all the data at once.

2) Lazy evaluation: Generator functions allow you to defer the computation of values until they are actually needed. This is known as lazy evaluation or lazy evaluation of sequences. It can be beneficial when you have expensive computations or when you want to avoid unnecessary computations.

3) Iteration control: Generator functions provide a way to control the iteration process by using the yield keyword. This allows you to control the flow of the iteration and return values at specific points. You can also use yield* to delegate the iteration to another generator function.1)

In JavaScript, the yield keyword is used in a generator function to pause the function's execution and yield a value.
 When a generator function encounters a yield statement, it temporarily suspends its execution and returns an object 
 with two properties: value, which is the value being yielded, and done, which indicates whether the generator has
  completed its iteration.

1)  Pauses Execution: When a yield statement is reached in a generator function, the function pauses at that point. It allows the generator function to yield a value without completing its execution.

2) Returns a Value: The value specified after yield is returned to the caller each time the generator is iterated over.

3) Resumes Execution: When the generator is iterated over again (using next()), the function resumes execution from where it was paused by the previous yield.
*/

function getIncrements(incrementedValue = 0) {
    return incrementedValue+1
}

function *ShowpopupaltionIncremnt(baseValue, reduceByDeaths) {
    var incrementedValue = getIncrements(incrementedValue) 

    console.log(baseValue + incrementedValue)

    yield {count : baseValue + incrementedValue} //when we call for first yield

    incrementedValue = getIncrements(incrementedValue) 

    yield {count : baseValue + incrementedValue} //when we call for first yield

    incrementedValue = getIncrements(incrementedValue) 
    yield {count : baseValue + incrementedValue} //when we call for first yield

    //return means end of invocation
    return baseValue + incrementedValue   
}

let populationPointer = ShowpopupaltionIncremnt(80000, 1000) //initializing with data

console.log(populationPointer.next()) //first yeild
console.log(populationPointer.next()) //second yeild
console.log(populationPointer.next()) //third yeild

console.log(populationPointer.next()) //returns from execution

console.log(populationPointer.next()) //no further yeild is done



//arithmaticCalculator using - generator function - (a,b), 
//add, subtract, multiply, divide - all this we need to yield

//Arithmatic Calculator
function *arithmetic(num1, num2){
    
    yield console.log("Addition : " + (num1+num2));
    yield console.log("Subtraction : " + (num1-num2));
    yield console.log("Multiply : " + (num1*num2));
    yield console.log("Division : " + (num1/num2));
    
    return "Done";
}

let calObj = arithmetic(6,2);

calObj.next()
calObj.next()
calObj.next()
calObj.next()
console.log(calObj.next())
console.log(calObj.next())

// ************************************* Practice ***********
console.log("\n")

function* fibonacciSequence(n) {
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < n; i++) {
      yield b;
    
      [a, b] = [b, a + b];
    }
  }
  
  const sequence = fibonacciSequence(10);
  
  // Using for...of loop
  for (const value of sequence) {
    console.log(value);
  }
  
  // Manually calling next()
  let currentValue = sequence.next();
  while (!currentValue.done) {
    console.log(currentValue.value);
    currentValue = sequence.next();
  }