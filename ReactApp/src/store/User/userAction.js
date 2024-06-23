
import * as actionTypes from "../actionTypes";
import axios from 'axios';

export const AddUserToStore = (user) => {
    return{
        type : actionTypes.ADD_USER_TO_STORE, //actiontype to be matched in user reducer
        payload : user //payload which will update the user state
    }
}

export const resetUserFromStore = () => {
    return{
        type:actionTypes.RESET_USER_FROM_STORE,
    
    }
}

export const updateLoginStatus = (status) => {
    return {
        type: actionTypes.UPDATE_LOGIN_STATUS,
        payload: status,
    };
};

// export const UpdateUserName = newUserName => {
//     return {
//         type : actionTypes.UPDATE_USERNAME, 
//         payload : newUserName
//     }
// }


//server call
//to save user to mongo db and do sign-in or sign up
export const SaveUserToDB = (newUser)=>{
    const isLogin  = newUser.isLogin;
    
    return (dispatch)=>{
        axios.post("http://localhost:9000/user/api/signinup",//uri or end point of singninup api
                newUser // the user state object we dispatch from the user component
            ).then((collection)=>{
                let loggedUser = collection.data
                console.log(loggedUser)
                dispatch(AddUserToStore(loggedUser));
                dispatch(updateLoginStatus(isLogin));
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}


export const SaveUserToDBUsingFetch = (newUser)=>{
    return (dispatch)=>{
        window.fetch("http://localhost:9000/user/api/signinup",
            {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newUser)})
            .then((response)=>response.json())
            .then((userData)=>{
                console.log(userData)
                dispatch(AddUserToStore(userData))
            }).catch((err)=>{
                console.log("error while logging in ", err)
        })
    }
}

