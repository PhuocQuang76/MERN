import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    vaccine: {
        name: "",
        images:"",
        description: "",
        age: "",
        dose:"",
        type: "",
        price: "",
        contrains: "",
        sideAffect: ""
    },
    vaccines:[]
};

const VaccineSlice = createSlice({
    name: "addVaccine",
    initialState: initialState,
    reducers: {
        addVaccine(state, action) {
            state.vaccine = action.payload;
        },

        getVaccines(state, action) {
            
            return {
                ...state,
                vaccines: action.payload
            };
        },

        getByVaccineId(state, action){
            
        }

    }
});

export const VaccineActions = VaccineSlice.actions; // Correct export of actions
export default VaccineSlice.reducer;