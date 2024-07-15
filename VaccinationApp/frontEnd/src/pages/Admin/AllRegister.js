
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleGetAllRegisterByStatus } from '../../store/AllRegister/AllRegister-actions';
import AllRegisterDetail from "./AllRegisterDetail";

import classes from './AllRegister.module.css';

const AllRegister = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.auth.user);

   
   
    const allRegisterItems = useSelector ((store) => store.allRegister.items)
    const [activeTab, setActiveTab] = useState('pending');

    useEffect(() => {
        // Check if user object is empty and navigate to login if it is
        if (Object.keys(user).length === 0) {
            navigate("/auth/login");
        } else {
            
            dispatch(handleGetAllRegisterByStatus(activeTab));
        }
   
    }, [user, activeTab,dispatch, navigate]);


    return(
        <div className={classes.allRegister}>

            <h2>Register List</h2>
          

            <br></br>
            <h3>register vaccines history</h3>
            <div>
                <button 
                    className={activeTab === 'pending' ? classes.activeButton : ''}
                    onClick={() => setActiveTab('pending')}>Pending
                </button>
                <button 
                    className={activeTab === 'accepted' ? classes.activeButton : ''}
                    onClick={() => setActiveTab('accepted')}>Accepted
                </button>
                <button 
                    className={activeTab === 'vaccinated' ? classes.activeButton : ''}
                    onClick={() => setActiveTab('vaccinated')}>Vaccinated
                </button>
                <button 
                    className={activeTab === 'rejected' ? classes.activeButton : ''}
                    onClick={() => setActiveTab('rejected')}>Rejected
                </button>
                <button 
                    className={activeTab === 'canceled' ? classes.activeButton : ''}
                    onClick={() => setActiveTab('canceled')}>Canceled
                </button>
            </div>
            <br></br>

            {
                allRegisterItems && allRegisterItems.length >=1 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>UserId</th>
                                <th>Index</th>
                                <th>Vaccine Name/Dose</th>
                                <th>Hospital Name</th>
                                <th>Hospital Type</th>
                                <th>Appt Date</th>
                                <th>Appt Time</th>
                                <th>Total Paid</th>
                                <th>Status</th>
                                <th>Action</th>
                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allRegisterItems.map((item,index) => {
                                    //return item.name
                                    return <AllRegisterDetail 
                                    key={index} 
                                    item={item} 
                                    currentStatus={activeTab}
                                    />
                                })
                            } 
                        </tbody>
                    </table>
                </>
                : 
                <h4>No registerd vaccines.</h4>
            }

        </div>
    )
}


export default AllRegister;