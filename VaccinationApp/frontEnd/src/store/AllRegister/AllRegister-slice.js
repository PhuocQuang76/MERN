import { createSlice } from '@reduxjs/toolkit';
import { getByStatus } from './AllRegister-actions';

const initialState = {
    userId:"",
    status:"",
    item:{},
    items:[]
    
};

const AllRegisterSlice = createSlice({
    name: "allRegister",
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
            const {status,items} = action.payload;
            
            return{
                ...state,
                status:status,
                items:items
            }
        }
    }
});


export const AllRegisterActions = AllRegisterSlice.actions; // Correct export of actions
export default AllRegisterSlice.reducer;
