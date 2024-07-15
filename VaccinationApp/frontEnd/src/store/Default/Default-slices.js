
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    message:""

};

const defaultSlice = createSlice({
    name: "default",
    initialState: initialState,
    reducers: {
        updateToVaccinatedStatusResult(state, action){
            return{
                message:action.payload
            }
        }
    }
});


export const DefaultActions = defaultSlice.actions;
export default defaultSlice.reducer;

