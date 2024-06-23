import {createSlice} from '@reduxjs/toolkit';
const initialState = {

}

const checkoutSlice = createSlice({
    name:"checkout",
    initialState:initialState,
    reducers:{
        updateItemsFromDB(state,action){
            return{
                ...state,
                items:action.payload
            }
        }
    }
})



