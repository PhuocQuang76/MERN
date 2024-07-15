import React, { useState } from "react";
import { BrowserRouter as Router, Routes,Route, Link } from "react-router-dom";
import classes from './Admin.module.css';
import AddVaccine from '../Vaccine/AddVaccine';
import AddHospital from '../Hospital/AddHospital';
import Vaccines from '../Vaccine/Vaccines';
import Hospitals from '../Hospital/Hospitals';

const Admin = () => {
    return (
        <div>
            <h1 className="services">Admin Services</h1>
        </div>
    );
}

export default Admin;