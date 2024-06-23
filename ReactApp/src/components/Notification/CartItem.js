import React, { useEffect, useState } from "react";
import { useDispatch,useSelector } from 'react-redux';

import { useNavigate} from "react-router-dom";

import classes from './CartItem.module.css';
import { cartActions } from '../store/Cart/cart-actions';


import {} from "../store/User/userReducer.js";
import axios from 'axios';


const CartItem = (props) => {
    const { name, quantity, total, price, productCode } = props.item;
    const { userName } = useSelector((store) => store.user.user);
    const navigate = useNavigate();

  


    const increaseItemHandler = () => {
        // dispatch(cartActions.removeItemFromCart(id));
    };
    
    const reduceItemHandler = () => {
        const reduceCard = {
            userName:userName,
            item:{
                productCode:productCode,
            }
        }

        async function reduceItem() {
            try {
               const response = await axios.patch("http://localhost:9000/cart/reduceItem",reduceCard);

              
                const reduceItem = response.data;
                
            } catch (error) {
              console.error('Error reducing items:', error);
            }
        }
      
          
      
        reduceItem();
    };

    const removeItemHandler = () => {
    // dispatch(cartActions.removeItemFromCart(id));
    };
    return (
      <div className={classes.item} >
        <header>
          <h3>{name}</h3>
          <div className={classes.price}>
            ${total.toFixed(2)}{' '}
            <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
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