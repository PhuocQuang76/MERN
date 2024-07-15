import React, { useState, useRef } from 'react';
import { useDispatch } from "react-redux";
import { addVaccineToDB } from '../../store/Vaccine/Vaccine-actions';

import classes from './AddVaccine.module.css';

const AddVacine = ({onAdd}) => {
const dispatch = useDispatch();

    const nameRef = useRef();
    const imagesRef = useRef();
    const descriptionRef = useRef();
    const ageRef = useRef();
    const doseRef = useRef();
    const typeRef = useRef();
    
    const priceRef = useRef();
    const contrainsRef = useRef();
    const sideAffectRef = useRef();
    

    const addVaccineData = (e) => {
        e.preventDefault();
        const newFormData = {
            name: nameRef.current.value,
            images:imagesRef.current.value,
            description: descriptionRef.current.value,
            age: ageRef.current.value.split(',').map((age) => age.trim()), // Split and trim to create an array of age values
            dose: doseRef.current.value,
            type: typeRef.current.value,
            price: priceRef.current.value,
            contrains: contrainsRef.current.value,
            sideAffect: sideAffectRef.current.value
        };

        dispatch(addVaccineToDB(newFormData));


        // Call the onAdd function after the hospital is successfully added
        //onAdd();



        nameRef.current.value = '';
        imagesRef.current.value = '';
        descriptionRef.current.value = '';
        ageRef.current.value = '';
        doseRef.current.value = '';
        typeRef.current.value = '';
        
        priceRef.current.value = '';
        contrainsRef.current.value = '';
        sideAffectRef.current.value = '';
    };

    return (
        <div className={classes.addVaccine}>
            <h2>Add New Vaccine</h2>

            <form onSubmit={addVaccineData}>
                <div >
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name"  required ref={nameRef} />
                    
                </div>

                <div >
                    <label htmlFor="images">Images</label>
                    <input id="images" name="images"  required ref={imagesRef} />
                    
                </div>

                <div >
                    <label htmlFor="description">Description</label>
                    <textarea  id="description" type="text" name="description" required ref={descriptionRef} />
                </div>
                <div >
                    <label htmlFor="age">Age (Separate multiple ages by commas)</label>
                    <input id="age" type="text" name="age" required ref={ageRef} />
                </div>

                <div >
                    <label htmlFor="dose">Dose Required</label>
                    <input id="dose" type="text" name="dose" required ref={doseRef} />
                </div>

                <div className="form-group ">
                    <label htmlFor="type">Type</label>
                    <input id="type" name="type" rows="5"  required ref={typeRef} />
                </div>
               
                <div className="form-group ">
                    <label htmlFor="price">Price</label>
                    <input id="price" type="number" name="price" ref={priceRef} />
                </div>
                <div className="form-group ">
                    <label htmlFor="contrains">Contrains</label>
                    <input id="contrains" name="contrains"  required ref={contrainsRef} />
                </div>
                <div className="form-group ">
                    <label htmlFor="sideAffect">Side Affect</label>
                    <textarea id="sideAffect" name="sideAffect"  ref={sideAffectRef} />
                </div>
                <br></br>
                <div className="form-group">
                    <button type="button" className="btn btn-secondary">Cancel</button>
                    <button type="submit" className="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddVacine;