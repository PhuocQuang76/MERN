

import {createSlice} from "@reduxjs/toolkit";
import {toast} from "react-toastify";

const initalState = {
    user:{},
    users:[],
    isLoginSuccess:false,
    errors:{},
    message:{}
}

const authSlice = createSlice({
    name:"auth",
    initialState : initalState,
    reducers:{
        addUserToStore(state, action){
            return{...state, user:action.payload}
        },

        fetchUserToStore(state, action){
            return{...state,
                users:action.payload
            }
        },

        changeStatusOfIsLoginSuccess(state, action){
            return{
                ...state,
                isLoginSuccess:action.payload
            }
        },

        resetForLogout(state, action) {
            return {
                ...state,
                user: {},
                isLoginSuccess: false
            };
        },
        setError(state, action){
            return{
                ...state,
                errors:action.payload
            }
        },
        clearError(state,action){
            return{
                ...state,
                errors:{}
            }
        },

        fetchAllUsersToStore(state, action){
            return{
                ...state,
                users:action.payload
            }
        }
    }
});

export const authActions = authSlice.actions;
export default authSlice.reducer;
