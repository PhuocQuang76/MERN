

import React, { useState, useRef, useEffect } from 'react';
import { useDispatch,useSelector } from 'react-redux';
import { Form, Link, useSearchParams, useNavigate } from 'react-router-dom';
import classes from './UserInfo.module.css';
import { addUser,login ,handleClearErrors} from '../../store/Auth/auth-action';


const UserInfo = () => {
    const user = useSelector((store)=> store.auth.user);

    return(
        <div>
            <h3>User Information</h3>
            <div>
                <p><span className={classes.spanText}>UsreId:</span>: {user._id}</p>
                <p><span className={classes.spanText}>FirstName:</span>: {user.firstName}</p>
                <p><span className={classes.spanText}>LastName:</span>: {user.lastName}</p>
                <p><span className={classes.spanText}>Age:</span>: {user.age}</p>
                <p><span className={classes.spanText}>Gender:</span>: {user.gender}</p>
                <p><span className={classes.spanText}>Profession:</span>: {user.profession}</p>
                <p><span className={classes.spanText}>Emamil:</span>: {user.email}</p>
                <p><span className={classes.spanText}>Password:</span>: {user.password}</p>
            </div>

        </div>
    )
}

export default UserInfo;