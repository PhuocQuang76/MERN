
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    hospital: {
        name: "",
        address: "",
        type: "",
        charge: ""
    },
    hospitals:[]
};

const HospitalSlice = createSlice({
    name: "Hospital",
    initialState: initialState,
    reducers: {
        addHospital(state, action) {
            state.hospital = action.payload;
        },

        getHospitals(state, action) {   
            return {
                ...state,
                hospitals: action.payload
            };
        },

        getByHospitalId(state, action){
            
        }


    }
});

export const HospitalActions = HospitalSlice.actions;
export default HospitalSlice.reducer;