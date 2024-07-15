import { VaccineActions } from './Vaccine-slice'; // Ensure correct import of VaccineActions
import axios from 'axios';

export const addVaccineToDB = (vaccineObj) => {
    console.log("Adding Vaccine...");
    return async (dispatch) => {
        try {
            const response = await axios.post("http://localhost:9001/admin/addVaccine", vaccineObj);
            const addedVaccine = response.data;
            console.log("Added Vaccine:", addedVaccine);
            dispatch(VaccineActions.addVaccine(addedVaccine));
        } catch (error) {
            console.error('Error adding vaccine item', error);
        }
    };
};

export const getAllVaccines = () => {
    
    return async (dispatch) => {
        
        try {
            const response = await axios.get("http://localhost:9001/admin/getAllVaccines");
            const vaccines = response.data;
            dispatch(VaccineActions.getVaccines(vaccines));
        } catch (error) {
            console.error('Error getting all vaccines item', error);
        }
    };
};