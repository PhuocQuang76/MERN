
import { HospitalActions }  from './Hospital-slice';
import axios from 'axios';

export const addHospitalToDB = (hospitalObj) => {
    console.log("adding Hospital...");
    const {type} = hospitalObj;
    return async (dispatch) => {
        try{
            axios.post("http://localhost:9001/admin/addHospital",hospitalObj)
            .then((response) => {
                let addedHospital = response.data;
                console.log("addedHospital:" + addedHospital);
                dispatch(HospitalActions.addHospital(addedHospital));

            })
            .catch((err) => {
                console.log("error while addding hospital in ", err);
            });
           
        }catch (error) {
            console.error('Error adding hospital item', error);
        }
        
    }
}


export const getAllHospitals = () => {
    
    return async (dispatch) => {
        
        try {
            const response = await axios.get("http://localhost:9001/admin/getAllHospitals");
            const hospitals = response.data;
            dispatch(HospitalActions.getHospitals(hospitals));
        } catch (error) {
            console.error('Error getting all hospitals item', error);
        }
    };
};