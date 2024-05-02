//To do the IO operation we have fs module/package present in node framework
//using the same we can do read write operations following ways
// synchronously - blocking
// asynchronously - non-blocking
// read stream
// write stream

//*** When you write require: we will get the module build-in provided by the Nodejs runtime.
// Then we can use the modethos provided by the module you required */

let fs = require("fs");

console.log("File read starts");

//asynchronous - non-blocking -- file read operation

// fs.readFile(__dirname+"/shortHand.js","utf-8",(err, data)=>{
//     console.log("error ", err)
//     console.log("data ", data)
// })

//synchronous - blocking -- file read operation

let data = fs.readFileSync(__dirname+"/shortHand.js", "utf-8")
console.log(data)
console.log("waitimg for filke is reading")

/*
This code snippet reads the contents of a file named "shortHand.js" located in the same directory as the current file. Here's a breakdown of the code:

fs.readFile(): This function is used to asynchronously read the contents of a file.
__dirname+"/shortHand.js": This represents the path to the file "shortHand.js" relative to the current directory. 

__dirname is a global variable in Node.js that contains the path of the current directory.
"utf-8": This specifies the encoding of the file being read as UTF-8.
The function (err, data) => {...} is a callback function that will be executed after the file is read. It takes two parameters:
err: This parameter contains any error that occurred during the file reading process. If no errors occurred, err will be null.

data: This parameter contains the contents of the file if the file was read successfully.
Inside the callback function:

console.log("error ", err): This logs any error that occurred during the file reading process.
console.log("data ", data): This logs the data read from the file. If there was an error, data will be undefined.
Overall, this code reads the contents of the "shortHand.js" file and logs any errors that occur during the process as well as the data read from the file.
*/


//Writing into a file using write stream
/*
if the "Text.json" file already exists and you create a writable stream using fs.createWriteStream() without specifying
 any additional options, it will not create another "Text.json" file. Instead, it will overwrite the existing file 
 with the new data.

 If the "Text.json" file already exists and you want to write new content to it using fs.createWriteStream(), 
 you can specify an additional option to append data to the existing file without overwriting its contents.
*/
console.log("******** WRITE STREAM ***************");

let userDetails = {
    name:'Aileen',
    age : 21,
    city : "Somewhere on earth ",
    session : "MernStack"
}

//continues update in file, appending one after another

fs.readFile('Text.json','utf8',(err, data)=>{
    console.log("information " + data); //information undefined


/*
This code snippet creates a writable stream to a file named "Text.json" with the UTF-8 encoding 
using fs.createWriteStream() in Node.js.

However, it is important to note that in this code snippet, no data is being written to 
the writable stream. If you intend to write data to the file using this writable stream, 
you would need to use methods like write() or end() on the stream to actually write data to the file.
*/
    let writerStream = fs.createWriteStream("Text.json","utf8");
    console.log("writeStream " + writerStream); //[object Object]

    if(data){
        let oldData = JSON.parse(data);
        console.log(oldData)
        writerStream.write(JSON.stringify([...oldData, userDetails]));
        writerStream.end();
        /*
        The writerStream.end() method in Node.js is used to signal that no more data will be written to the 
        writable stream writerStream. It effectively closes the stream for writing.

        After calling writerStream.end(), you can no longer write any more data to the stream. 
        It is a way to indicate the end of the writing process and allows the stream to finish any 
        remaining writing operations and emit the 'finish' event when all data has been flushed to 
        the underlying file.
        */
    }else{
        writerStream.write(JSON.stringify([
            { name : "Nhan",
            age : 22,
            city : "California ",
            session : "MernStack"
        }]));
        writerStream.end();
    }
})

/*
In the context of the code snippet you provided, writerStream.write([...old,...new]) is attempting to write the concatenated arrays old and new to the writable stream writerStream.

The spread syntax [...old, ...new] is used to concatenate two arrays (old and new) into a single array. This operation creates a new array that contains all the elements of old followed by all the elements of new.

When you call writerStream.write([...old, ...new]), you are trying to write the combined elements of old and new arrays to the writable stream.
*/

//save the data in json object that are making MERN stack and MEAN stack as acronym
//write using writestream and also read and print using readtream upon finish
//expand it like - M-Mongo, E-Express, R-React and N-Node in JSON format


//REPL

//R - Read
//E - Evaluate
//P - Print
//L - Loop

//we need to stop it with ctrl+c cmd+c (sometimes we need to do it twice) s