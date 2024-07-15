
import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import authReducer from "./Auth/auth-slice";
import vaccineReducer from "./Vaccine/Vaccine-slice";
import hospitalReducer from "./Hospital/Hospital-slice";
import registerReducer from "./Register/Register-slice";
import allRegisterReducer from "./AllRegister/AllRegister-slice";
import reportReducer from "./Report/Report-slice";
import defaultReducer from "./Default/Default-slices";

let rootReducer = combineReducers({ 
    auth:authReducer,
    vaccine:vaccineReducer,
    hospital: hospitalReducer,
    register:registerReducer,
    allRegister:allRegisterReducer,
    report:reportReducer,
    default:defaultReducer
})



const store =  configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
)

export default store;