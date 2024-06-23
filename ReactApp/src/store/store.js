
//store : is a redux object which helps us handle state changes
//reducer : is a function which works with switch case (for each action type) and updates the state
// for every change returns new state, each component will have its respective reducer 
//action : is the object a reducer accepts to create a new state
//action : object => action type (increment) ,payload (+5)

import { combineReducers, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit';

import userReducer from "./User/userReducer";
import studentReducer from "./Student/studentReducer";
import productReducer from "./Product/productReducer";
import cartReducer from "./Cart/cart-slice";
import couponReducer from "./Coupon/coupon-sclice";
import myOrderReducer from "./MyOrder/myOrder-slice";
import reviewReducer from "./Reviews/review-slice";
import notificationReducer from "./Notification/notification-slice";
// store.js



let rootReducer = combineReducers({ 
   user : userReducer, //userReducer : userReducer
   student : studentReducer,
   product : productReducer,
   cart: cartReducer, // Add the cart reducer here
   coupon: couponReducer,
   myOrder:myOrderReducer,
   review:reviewReducer,
   notification:notificationReducer
})

//create or configure and export the store from this code

const store =  configureStore(
    {reducer : rootReducer},
    {},//inital state if we want to set from store instead of reducer
)

export default store;