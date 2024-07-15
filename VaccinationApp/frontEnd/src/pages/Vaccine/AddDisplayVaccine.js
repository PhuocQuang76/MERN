

import React from "react";
import AddVacine from "./AddVaccine";
import classes from './AddDisplayVaccine.module.css';
import AddVaccine from '../Vaccine/AddVaccine';
import AddHospital from '../Hospital/AddHospital';
import Vaccines from '../Vaccine/Vaccines';
import Hospitals from '../Hospital/Hospitals';

const AddDisplayVaccine = () => {
    return(
        <div className={classes.addDisplayVaccine}>
            <AddVacine /> 
            <hr></hr>
            <Vaccines />
        </div>
    )
}


export default AddDisplayVaccine;