import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';

import { useNavigate} from "react-router-dom";

import classes from './CartItem.module.css';
// import { cartActions } from '../../store/Cart/cart-actions.js';

import { reduceItemQuantity,increaseItemQuantity,GetCardFromDBByUserName,removeItemInCart } from '../../store/Cart/cart-actions.js';
import {} from "../../store/User/userReducer.js";
import axios from 'axios';


const CartItem = (props) => {
  // debugger;
    const { name, quantity, total, price, productId,productCode,image } = props.item;
    
    console.log("productId:"+productId);
    const user = useSelector((store) => store.user.user);
    const userId = user._id;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const actionCartItem = {
      userId:userId,
        item:{
          productId:productId
        }
    }

    useEffect(() => {
      //alert("call me");
    }, [dispatch, userId]);


    const increaseItemHandler = () => {
         dispatch(increaseItemQuantity(actionCartItem));
         
    };
    
    const reduceItemHandler = () => { 
        dispatch(reduceItemQuantity(actionCartItem));
        // dispatch(GetCardFromDBByUserName(userName));    
    };

    const removeItemHandler = () => {
        dispatch(removeItemInCart(userId, productId));
    };



    return (
      <div className={classes.item} >
        <header> 
          <div>
            <img src={`http://localhost:9090/${image}`} alt={image} />
          </div>
          <h3>{name} <span className={classes.itemprice}>({productCode})</span></h3>

          <div className={classes.price}>
            {/* ${total.toFixed(2)}{' '} */}
            ${total}{' '}
            {/* <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span> */}
            <span className={classes.itemprice}>(${price}/item)</span>
          </div>
        </header>
        <div className={classes.details}>
          <div className={classes.quantity}>
            x <span>{quantity}</span>
          </div>
          <div className={classes.actions}>
            <button onClick={reduceItemHandler}>-</button>
            <button onClick={increaseItemHandler}>+</button>
            <button onClick={removeItemHandler}>Remove</button>
          </div>
        </div>
        <hr></hr>
      </div>
    );
  };

  export default CartItem;