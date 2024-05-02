/*
n Node.js, a Buffer is different from a standard JavaScript array. Here are some key differences:

Binary Data Handling: Buffers in Node.js are designed for handling binary data, while arrays in JavaScript are typically used for storing and manipulating collections of elements.

Fixed Size: Buffers have a fixed size when created, meaning you cannot easily resize them like you can with JavaScript arrays using methods like push or splice.

Raw Memory Allocation: Buffers in Node.js correspond to raw memory allocated outside the V8 JavaScript engine, allowing for efficient manipulation of binary data.

Data Encoding: Buffers can be created with different encodings (e.g., UTF-8, ASCII) to handle different types of data, while standard JavaScript arrays do not have this concept.

Buffer Methods: Buffers have methods specific to handling binary data efficiently, such as Buffer.alloc(), Buffer.from(), and methods for reading and writing data.

 Overall, while both Buffers and arrays can store data, Buffers are optimized for handling binary data efficiently
  and are commonly used in Node.js for tasks like reading from streams, handling network data, and working with
   file system operations

let buf = Buffer.alloc(256);

let buf = Buffer.from(Array(256).fill(0));

Array(256).fill(0) creates an array of length 256 filled with zeros, 
and Buffer.from() is used to create a buffer from this array.
*/

// a special memory created out side the v8 heap which can be utilized for moderate set of data

let buf = Buffer.alloc(256);
console.log(buf); //<Buffer 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 206 more bytes>

let len = buf.write("We are learning node implementation");

console.log("Output from a buffer " + len) //octet length  //35

console.log(buf); //<Buffer 57 65 20 61 72 65 20 6c 65 61 72 6e 69 6e 67 20 6e 6f 64 65 20 69 6d 70 6c 65 6d 65 6e 74 61 74 69 6f 6e 00 00 00 00 00 00 00 00 00 00 00 00 00 00 00 ... 206 more bytes>

console.log("\nutf8")
console.log(buf.toString("utf8")) //We are learning node implementation

console.log("\nbase64")
console.log(buf.toString("base64")) //V2UgYXJlIGxlYXJuaW5nIG5vZGUgaW1wbGVtZW50YXRpb24AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA==

let buf26 = Buffer.alloc(26);
for(let i = 0; i < 26; i++){
    buf26[i] = i + 97;
}

console.log(buf26); //<Buffer 61 62 63 64 65 66 67 68 69 6a 6b 6c 6d 6e 6f 70 71 72 73 74 75 76 77 78 79 7a>

console.log( buf26.toString('ascii')); // outputs: abcdefghijklmnopqrstuvwxyz 
console.log( buf26.toString('ascii',0,5)); // outputs: abcde 
console.log( buf26.toString('utf8',0,5)); // outputs: abcde 
console.log( buf26.toString('base64',0,5)); // outputs: YWJjZGU= 
console.log( buf26.toString('base64')); // outputs: YWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXo= 
console.log( buf26.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

