

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    userId:"",
    status:"",
    modal:{
        productId:"",
        isOpen:false
    },
    items:[]
}

const MyOrderSlice = createSlice({
    name:"myOrder",
    initialState: initialState,
    reducers:{
        fetchMyOrderItems(state, action) {
            return {
                ...state,
                userId: action.payload.userId,
                items: action.payload.items,
                status: action.payload.status
            };
        },
        updateModal(state, action){
            return{
                ...state,
                modal:action.payload
            }
        }
    }
})


export const myOrderActions = MyOrderSlice.actions;
export default MyOrderSlice.reducer;
