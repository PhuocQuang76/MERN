import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import {NavLink, Link } from "react-router-dom";
import { caculateReportValues } from "../../store/Report/Report-actions";
import './Chart.css';


const Admin = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(caculateReportValues());
    });

    return (
        <div className="chartService">
            <h2 className="services">Chart Services</h2>
            <div className="chartLinks">
                <NavLink  to="/ageBarchart" >Age Bar Chart </NavLink>
                <NavLink  to="/agePiechart" >Age Pie Chart </NavLink>
                <NavLink  to="/genderBarchart" >Gender Bar Chart </NavLink>
                <NavLink  to="/genderPiechart" >Gender Pie Chart </NavLink>
            </div>
        </div>
    );
}

export default Admin;