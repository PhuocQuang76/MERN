import React, { useEffect} from "react";
import { useDispatch } from "react-redux";
import { caculateReportValues } from "../../store/Report/Report-actions";
import './Chart.css';


const Admin = () => {
    const dispatch = useDispatch();
    useEffect(()=> {
        dispatch(caculateReportValues());
    });

    return (
        <div>
            <h1 className="services">Chart Services</h1>
        </div>
    );
}

export default Admin;