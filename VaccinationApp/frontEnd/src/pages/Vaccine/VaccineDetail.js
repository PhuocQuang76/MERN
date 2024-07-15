

import React from "react";
import classes from "./VaccineDetail.module.css";

const VaccineDetail = ({vaccine})=> {
     // Extract the first and second items from the age array
     const firstAge = vaccine.age && vaccine.age.length > 0 ? vaccine.age[0] : "";
     const secondAge = vaccine.age && vaccine.age.length > 1 ? vaccine.age[1] : "";
 
     // Initialize ageDisplay with let instead of const
     let ageDisplay;
 
     // Conditionally format the age display based on the first item
     if (firstAge === ">") {
         ageDisplay = firstAge + secondAge;
         
     } else {
         ageDisplay = secondAge ? `${firstAge} - ${secondAge}` : firstAge;
     }
    return(
        <div className={classes.vaccineDetail}>
            <h3>{vaccine.name}</h3>
            <h4>{vaccine.description}</h4>
            <p>age: {ageDisplay} year old</p>
            <p>type: {vaccine.type}</p>
            <p>price: ${vaccine.price} </p>
            <p>constrains: {vaccine.contrains}</p>
            <p>side affect: {vaccine.sideAffect}</p>
            <hr></hr>
        </div>
    )
}


export default VaccineDetail;