/*
// Coupon Page 
// Create a component with Name - CouponComponent (Functional Component and Use Hooks)
// On the page add a Button - GenerateCoupon
// Upon Click Generate a random coupon of - 6 digits (basically a numeric random value)
// Dispatch this generated coupon using useDispatch
// Create a Coupon Reducer to have Coupon Value, Use Reducer to update the coupon value (useSelector coupon)
// Create action to pass coupon to reducer, with type and payload


// Part 2 : 
// Hide all the links except : Home, User and About for a user not logged-in
// In Product Component show Save to product section only to a user with name "admin" so that not all users 
// can insert the products to database 
*/


import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { couponActions } from "../../store/Coupon/coupon-sclice"; // Import your actions
import { addDynamicNotification } from "../../store/Notification/notification-action.js";

const Coupon = () => {
    const coupon = useSelector((state) => state.coupon);
    const dispatch = useDispatch();

    const generateCoupon = () => {
        const couponNumber = Math.floor(100000 + Math.random() * 900000);
        let discountPercent;
        if (couponNumber <= 500000) {
            discountPercent = 10;
        } else if (couponNumber <= 800000) {
            discountPercent = 15;
        } else {
            discountPercent = 20;
        }
            console.log("couponNumber:", couponNumber);
            console.log("discountPercent:", discountPercent);
            dispatch(couponActions.addCouponAndDiscount({ couponNumber, discountPercent }));
            let message = "Coupon created...";
       
            dispatch(addDynamicNotification(message));

        };

    return (
        <div id="coupon">
            <h1>Coupon Page</h1>
            <button  className={"btn btn-primary col-md-2"} onClick={generateCoupon} disabled={coupon.couponNumber > 0}>Generate coupon</button>
            {coupon.couponNumber > 0 ? (
                <div>
                    <p>Coupon: {coupon.couponNumber}</p>
                    <p>Discount: {coupon.discountPercent}%</p>
                </div>
                ) : (
                    ""
                )
            }
        </div>
    );
};

export default Coupon;