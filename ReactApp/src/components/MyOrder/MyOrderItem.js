import React, { useEffect, useState,   useRef, Fragment } from "react";
import { useDispatch,useSelector } from 'react-redux';

import { useNavigate} from "react-router-dom";

import classes from './MyOrderItem.module.css';
// import { cartActions } from '../../store/Cart/cart-actions.js';
import {updateQuantity,cancelPendingItemFromCart,updateStatusToDeliveredOrCancel,reOrderItemFromCanceled,updateModal} from "../../store/MyOrder/myOrder-action";
import {removeItemInCart } from '../../store/Cart/cart-actions.js';
import ReviewModal from '../Modal/ReviewModal'; // Import the ReviewModal component
import {GetReviewsFromDBByUserId} from '../../store/Reviews/review-action.js';
import { addDynamicNotification } from "../../store/Notification/notification-action.js";
import axios from 'axios';


const MyOrderItem = (props) => {
  // debugger;
   
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReviewed, setIsReviewed] = useState(false);
    const { productId, date,quantity, price,status } = props.item;
    const user = useSelector((store) => store.user.user);

    
    const reviews = useSelector((store) => store.review.reviews);
    
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const userId = user._id;

    const quantityInputRef = useRef(null);

   // alert("quanity: " + quantityInputRef.current); // Move this line to useEffect or after ensuring quantityInputRef.current is not null
    


   const handleSaveClick = () => {
    const updatedQuantity = quantityInputRef.current.value;
    const quantityUpdateObj = {
        userId: userId,
        productId: productId,
        updatedQuantity: updatedQuantity,
        status: status
    }
    dispatch(updateQuantity(quantityUpdateObj));
    setIsEditing(false);
}

    const handleEditClick = () => {
        setIsEditing(true);
    }


    const handleReviewClick = () => {
        let modalObj = {
            productId:productId,
            isOpen:true
        }
        dispatch(updateModal(modalObj));
        let message = "Review created ...";
        dispatch(addDynamicNotification(message));
    }
    
    const closeReviewModal = () => {
        dispatch
        setIsModalOpen(false);
    };

    const handlePendingCancelClick = () => {
        
        let cancelPendingItemObj = {
            userId: userId,
            productId: productId,
            status:status
        }
        dispatch(cancelPendingItemFromCart(cancelPendingItemObj));
        let message = "Removed items from cart...";
        dispatch(addDynamicNotification(message));
    }

    const handleReOrderClick = () => {
        let reOrderObj = {
            userId: userId,
            productId: productId,
            date:date, // Get the value from the input element
            status:status
        }
        dispatch(reOrderItemFromCanceled(reOrderObj));
        let message = "Reordered Items...";
        dispatch(addDynamicNotification(message));
    }

    const handleDeliveryClick = () => {
        let cancelObj = {
            userId:userId,
            productId:productId,
            date:date,
            status:status,
            action:"delivery"
        }

       
        dispatch(updateStatusToDeliveredOrCancel(cancelObj));
        let message = "Order delivered...";
        dispatch(addDynamicNotification(message));
    }

    const handleCancelClick = () => {
        let cancelObj = {
            userId:userId,
            productId:productId,
            date:date,
            status:status,
            action:"cancel"
        }

       
        dispatch(updateStatusToDeliveredOrCancel(cancelObj));
    }
   

    const isReviewExisted = reviews.some(review => review.productId === productId);
    

    useEffect(() => {
        const isReviewExisted = reviews.some(review => review.productId === productId);
        setIsReviewed(isReviewExisted);
        dispatch(GetReviewsFromDBByUserId(userId));
    }, [isReviewExisted]);


    return (
       <Fragment>
       
            <tr className={classes.myOrderItem}>
                <td>{productId}</td>
                <td>{date}</td>
                <td>
                    {
                        isEditing? (
                        <input 
                            type="text" 
                            
                            ref={quantityInputRef} 
                        />
                        ):(
                            <span>{quantity}</span>
                        )
                    }
                </td>
                <td>{price}</td>
                
                <td>{status}</td>
                <td>
                    {status === "Pending" ? (
                        <>
                            {isEditing ? (
                                <button onClick={handleSaveClick}>Save</button>
                            ) : (
                                <button onClick={handleEditClick}>Edit</button>
                            )}
                        </>
                        ) : (
                            ""
                        )
                    }

                    {
                        status === "Pending" ? (
                            <button onClick={handlePendingCancelClick}>Cancel</button>
                        ):(
                            ""
                        )
                    }
                    {
                        status ==="Accepted" ? (
                            <button onClick={handleCancelClick}>Cancel</button>
                        ):(
                            ""
                        )
                    }
                    {
                        !isReviewExisted && status === "Delivered" ?(
                            <button onClick={handleReviewClick}>Review</button>
                        ):(
                            ""
                        )
                    }

                    {
                        status === "Accepted" ? (
                            <button onClick={handleDeliveryClick}>Delivery</button>
                        ):(
                            ""
                        )
                    }
                    {
                        status =="Canceled"? (
                            <button onClick={handleReOrderClick}>Re-Order</button>      
                        ):(
                            ""
                        )
                    }
                </td>
            </tr>
        </Fragment>
    );
  };

  export default MyOrderItem;