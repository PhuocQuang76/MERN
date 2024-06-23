import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
    couponNumber:0,
    discountPercent:0,
    useCoupon:false
}

const couponSlice = createSlice({
    name: "coupon",
    initialState:initialState,
    reducers:{
        addCouponAndDiscount(state, action){
            const {couponNumber,discountPercent} = action.payload;
            return{
                ...state,couponNumber:action.payload.couponNumber,discountPercent:action.payload.discountPercent
            }
        },

        applyCoupon(state, action){
            return{
                ...state,useCoupon:action.payload
            }
        }
    }
});
export const couponActions = couponSlice.actions;
export default couponSlice.reducer;
