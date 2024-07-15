
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getByStatusFromDB } from '../../store/Register/Register-actions';


import classes from './Registers.module.css';
import RegisterDetail from './RegisterDetail';
import UserInfo from "../Auth/UserInfo";

const Registers = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((store) => store.auth.user);
    debugger;
    const registerItems = useSelector ((store) => store.register.items)
    const [activeTab, setActiveTab] = useState('pending');

    useEffect(() => {
        // Check if user object is empty and navigate to login if it is
        if (Object.keys(user).length === 0) {
            navigate("/auth/login");
        } else {
            const userId = user._id;
            let getStatusObject = {
                userId: userId,
                status: activeTab
            }
            dispatch(getByStatusFromDB(getStatusObject));
        }
    }, [user, activeTab, dispatch, navigate]);

    

    return(
        <div className={classes.registers}>

            <h2>User Profile</h2>
            {user &&
                <UserInfo />
            }

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
                registerItems && registerItems.length >=1 ? 
                <>
                    <table>
                        <thead>
                            <tr>
                                <th>Vaccine Name/Dose</th>
                                <th>Age</th>
                                <th>Hospital Name</th>
                                <th>Hospital Type</th>
                                <th>Appt Date</th>
                                <th>Appt Time</th>
                                <th>Total Paid</th>
                                <th>Status</th>
                                <th>Actions</th>
                                

                                
                            </tr>
                        </thead>
                        <tbody>
                            {
                                registerItems.map((item,index) => {
                                    //return item.name
                                    return <RegisterDetail 
                                    key={index} 
                                    item={item}
                                    userId={user._id}
                                
                                    currentStatus = {activeTab}
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


export  default Registers;