

import React from "react";
import classes from "./HospitalDetail.module.css"

const HospitalDetail = ({hospital})=> {
    return(
        
        <div className={classes.hospitalDetail}>
            <h3>{hospital.name}</h3>
            <p>Address: {hospital.address}</p>
            <p>Type: {hospital.type}</p>
            <p>Charge: ${hospital.charge}</p>
            
            <hr></hr>
        </div>
        
    )
}


export default HospitalDetail;