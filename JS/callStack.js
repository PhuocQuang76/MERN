//blow up the stack - RangeError: Maximum call stack size exceeded

// function User(params) {
//     User()
// }

// User()


//stacksize is very limited it gets blown up if we do not control the iterations

function foo(params) {
    // throw "This is executed on stack!!"
    console.log("test")
}

function bar(params) {
    foo()   
}

function baz(params) {
    bar()
}

baz()