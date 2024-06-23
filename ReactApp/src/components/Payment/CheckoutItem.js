import React, { useEffect, useState } from "react";
import classes from './CheckoutItem.module.css';

const CheckoutItem = (props) => {
    const { name, quantity, totalPrice } = props.item;
    return (
        <>
 
            <div className="row">
                
                {/* <div className={classes.parentDiv}> */}
                    <div className="col-md-7" >
                        <p>{name}</p>
                        
                    </div>
                {/* </div> */}
                <div className="col-md-3"><p>{quantity}</p></div>
                <div className="col-md-2"><p>{totalPrice}</p></div>
            </div>
            
        </>
    );
  };
  
  export default CheckoutItem;