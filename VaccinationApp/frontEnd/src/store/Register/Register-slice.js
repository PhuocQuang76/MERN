import { createSlice } from '@reduxjs/toolkit';
import { getByStatus } from './Register-actions';

const initialState = {
    userId:"",
    status:"",
    item:{},
    items:[]
    
};

const RegisterSlice = createSlice({
    name: "register",
    initialState: initialState,
    reducers: {
        addRegisterItem(state, action){
            return{
                ...state, item:action.payload
            }
            
        },
        getByStatus(state, action){
            return{
                ...state,
                userId:action.payload.userId,
                status:action.payload.status,
                items:action.payload.items
            }

        },

        getAllRegisterByStatus(state, action){
            
            return{
                ...state,
            
                status:action.payload.status,
                items:action.payload.items
            }
        }
    }
});


export const RegisterActions = RegisterSlice.actions; // Correct export of actions
export default RegisterSlice.reducer;
