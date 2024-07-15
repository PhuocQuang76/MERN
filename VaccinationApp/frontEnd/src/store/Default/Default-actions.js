
import React from "react"
import axios from "axios"
import {DefaultActions} from "./Default-slices";

export const updateToVaccinatedStatus = ()=> {
   
    return async (dispatch)=> {
        const response = axios.patch("http://localhost:9001/default/checkAndUpdateStatus");
        dispatch(DefaultActions.updateToVaccinatedStatusResult());
    }
}