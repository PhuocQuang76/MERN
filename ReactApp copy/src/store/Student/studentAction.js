import * as actionTypes from "../actionTypes";
import axios from 'axios';

export const SaveStudentToStore = (student) => {
    return{
        type : actionTypes.SAVE_STUDENT, //actiontype to be matched in user reducer
        payload : student //payload which will update the user state
    }
}


//server call
//to save user to mongo db and do sign-in or sign up
export const SaveStudentToDB = (newStudent)=>{
    return (dispatch)=>{
        axios.post("http://localhost:9000/student/save",//uri or end point of singninup api
            newStudent // the user state object we dispatch from the user component
            ).then((response)=>{
                let savedStudent = response.data
                console.log(savedStudent)
                dispatch(SaveStudentToStore(savedStudent))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}


// export const SaveUserToDBUsingFetch = (newUser)=>{
//     return (dispatch)=>{
//         window.fetch("http://localhost:9000/user/api/signinup",
//             {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/json',
//                 'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(newUser)})
//             .then((response)=>response.json())
//             .then((userData)=>{
//                 console.log(userData)
//                 dispatch(AddUserToStore(userData))
//             }).catch((err)=>{
//                 console.log("error while logging in ", err)
//         })
//     }
// }