//Template Literals : Are the upgrades in quotes "" which we use to create dynamic html, string with values etc.

// `` - button below esc - key will start the Template Literals
//If we need to add dynamic or runtime values then ${ dynamicVariable }


let AnimalSoundsES6 = require('./shortHand') //importing animal sound here
let dynVal = 25000

let myNormalString ="Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum "+dynVal+" Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum" +
                    "<h1>Header</h1>"+
                    "\n Lorem Lipsum Lorem Lipsum Lorem Lipsum \n" +
                    JSON.stringify(AnimalSoundsES6);

console.log(myNormalString);

let myNormalStringTemplate =`Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum ${dynVal} Lorem Lipsum
                                            Lorem Lipsum Lorem Lipsum Lorem Lipsum
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum
                        <h1>Header</h1>
                        <b>Your Name</b>
                     Lorem Lipsum Lorem Lipsum Lorem Lipsum 
                    ${JSON.stringify(AnimalSoundsES6)}`;

console.log(myNormalStringTemplate);