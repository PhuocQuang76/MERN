import { authActions } from './auth-slice';
import axios from 'axios';


export const addUser = (userObj) => {
    if (!userObj) {
        console.log("User data is error...");
        return;
    }

    return async (dispatch) => {
        try {
            // uri or end point of singninup api, 
            // the user state object we dispatch from the user component
            const response = await axios.post("http://localhost:9001/auth/signup", userObj);
            const signupUser = response.data;
            console.log("Signup User:", signupUser);
            // Dispatch an action from your auth slice to update the Redux store with the signup user data
           
            dispatch(authActions.addUserToStore(signupUser));
        } catch (error) {
            if (error.response) {
                console.log("error:"+error.response)
                const errorMessage = error.response.data.message; // Extract the error message from the response
                dispatch(authActions.setError(errorMessage)); // Dispatch an action to update the Redux store with the error message
            } else {
                console.error("Error message:", error.message);
            }
        }
    };
};


export const login = (userObj)=> {
    
    if (!userObj) {
        console.log("User data is error...");
        return;
    }

    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:9001/auth/login", userObj);
            
            const userLogin = response.data.user; 
            const message = response.data.message;
            const name = userLogin.firstName;
            dispatch(authActions.changeStatusOfIsLoginSuccess(true));
            dispatch(authActions.addUserToStore(userLogin));
            

        } catch (error) {
            if (error.response) {
            
                console.log("error:"+error.response.data.message)
                const errorMessage = error.response.data.message; // Extract the error message from the response
                dispatch(authActions.setError(errorMessage)); // Dispatch an action to update the Redux store with the error message
            } else {
                console.error("Error message:", error.message);
            }
        }
    }
}

export const logoutFromStore = () => {
    return async (dispatch) => {
        dispatch(authActions.resetForLogout());
    }
}

export const handleClearErrors = ()=> {
    return async (dispatch)=> {
        dispatch(authActions.clearError());
    }
}


export const handleGetAllUsers = () => {
    return async (dispatch) => {
        try{
            const response = await axios.get("http://localhost:9001/admin/getUsers");
            
            dispatch(authActions.fetchAllUsersToStore(response.data));
        }catch (error){
            console.error('Error fetching users items:', error);
        }
    }
}