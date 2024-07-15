

import React from "react";

import classes from './AddDisplayHospital.module.css';

import AddHospital from '../Hospital/AddHospital';

import Hospitals from '../Hospital/Hospitals';

const AddDisplayHospital = () => {
    return(
        <div className={classes.addDisplayHospital}>
            <AddHospital /> 
            <hr></hr>
            <Hospitals />
        </div>
    )
}


export default AddDisplayHospital;