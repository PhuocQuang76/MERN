import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { addHospitalToDB } from '../../store/Hospital/Hospital-actions';

import classes from './AddHospital.module.css';

const AddHospital = () => {

    const [selectedGovernment,setSelectedGovernment] = useState('');


    const nameRef = useRef();
    const addressRef = useRef();
    const chargeRef = useRef();
    // const governmentRef = useRef();

    const dispatch = useDispatch();

    const addHospitalData = (e) => {
        e.preventDefault();
        const newHospitalData = {
            name: nameRef.current.value,
            address: addressRef.current.value,
            charge: chargeRef.current.value,
            type: selectedGovernment
            // government: governmentRef.current.value
        };

        dispatch(addHospitalToDB(newHospitalData));

        // Call the onAdd function after the hospital is successfully added
        // onAdd();

        // Clear input fields
        nameRef.current.value = '';
        addressRef.current.value = '';
        chargeRef.current.value = '';
        setSelectedGovernment(null);
    };

    const handleGovermentChange = (e) => {
        setSelectedGovernment(e.target.value);
    };

    return (
        <div className={classes.addHospital}>
            <h2>Add New Hospital</h2>

            <form onSubmit={addHospitalData}>
                <div >
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" required ref={nameRef} />
                </div>

                <div >
                    <label htmlFor="address">Address</label>
                    <input  id="address" name="address" required ref={addressRef} />
                </div>
                
                <div>
                    <label htmlFor="charge">Charge</label>
                    <input id="charge" type="number" name="charge" required ref={chargeRef} />
                </div>
                
                <div>
                    <label htmlFor="type">Type</label>
                    
                    <div className={classes.radioContainer}>
                        <input 
                            type="radio" 
                            value="government" 
                            checked={selectedGovernment === 'government'} 
                            onChange={handleGovermentChange}    
                        />
                        <p>Government</p>
                    </div>
                    <div className={classes.radioContainer} id="lastRadio">
                        <input 
                            type="radio" 
                            value="private" 
                            checked={selectedGovernment === 'private'} 
                            onChange={handleGovermentChange} 
                        />
                        <p>Private</p>
                    </div>
                </div>

                
                

                
                
                <br></br>
                <div className={classes.buttons}>
                    <button type="button" className="btn btn-primary">Cancel</button>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>

                
            </form>
        </div>
    );
};

export default AddHospital;