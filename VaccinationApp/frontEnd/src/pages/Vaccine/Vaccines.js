import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getAllVaccines } from '../../store/Vaccine/Vaccine-actions';
import VaccineDetail from "./VaccineDetail";
import classes from './Vaccines.module.css';

const Vaccines = () => {
    const dispatch = useDispatch();
    
    const vaccines = useSelector((store) => store.vaccine.vaccines);
   
    useEffect(() => {
        dispatch(getAllVaccines());
    
    }, []);

    return (
        <div className={classes.vaccines}>
            <h2>Vaccines List</h2>
            <ul style={{ listStyleType: 'none'}}>
                {vaccines.length > 0 ? (
                    vaccines.map((vaccineItem) => (
                    <li key={vaccineItem._id}>
                        <VaccineDetail vaccine={vaccineItem}/>
                    </li>
                    ))
                ):(
                    <p>No vaccine found.</p>
                )

                }

            </ul>
        </div>
    );
};

export default Vaccines;