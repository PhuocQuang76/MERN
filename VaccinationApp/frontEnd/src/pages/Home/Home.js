import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import classes from './Home.module.css';
import {updateToVaccinatedStatus} from '../../store/Default/Default-actions';

import CarouselComponent from '../Carousel/CarouselComponent';


const HomePage = () => {
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(updateToVaccinatedStatus());
    },[])


    const [isLogIn, setIsLogIn] = useState(true);

    return (
        <>
            <div className={classes.homepage}>
                <h2>Welcome to Vaccination Center</h2>
            </div>

            <CarouselComponent />
        </>
    );
}

export default HomePage;