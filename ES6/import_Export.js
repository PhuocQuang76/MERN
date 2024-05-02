
// require - import, module.exports - export
//ES6- import and export

//User.js

const User = {"New" : "UserName"}
export default User; //only one default export is allowed from one module/file

export let UserInfo = ()=>{
    return "FirstName, LastName"
}

//constants.js - filename and path
export const pi = 3.141
export const xi = 9.18
export const refKey = 5.25
export let UserInfo1 = 200000

//OurFile.js

import User from "./User" //default import - generally the same/similar name as file doesn't use {}
import {UserInfo} from "./User" //named - import (named is used to export/import multiple items to/from files )

import {pi, xi, refKey} from "./constants"  //multiple named imports

import * as Constants from "./constants"  //imports everything as wild card in one constant// all imports

console.log(Constants.pi)
console.log(Constants.xi)

import {UserInfo as constUserInfo} from "./constants" //aliasing if we have duplicate import
