

import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllHospitals } from '../../store/Hospital/Hospital-actions';
import HospitalDetail from "./HospitalDetail";
import classes from './Hospitals.module.css';


const Hospitals = ()=> {
    const dispatch = useDispatch();
    
    const hospitals = useSelector((store) => store.hospital.hospitals);
    
   
    useEffect(() => {
        dispatch(getAllHospitals());
       
    }, []);

    return (
        <div className={classes.hospitals}>
            <h2>Hospitals List</h2>
            <ul style={{ listStyleType: 'none'}}>
                {hospitals.length > 0 ? (
                    hospitals.map((hospitalItem) => (
                        
                        <li key={hospitalItem._id}>
                           
                            <HospitalDetail hospital={hospitalItem}/>
                        </li>
                    ))
                ):(
                    <p>No hospital found.</p>
                )

                }

            </ul>
        </div>
    );
};


export default Hospitals;