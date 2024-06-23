import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import classes from './Checkout.module.css';
import CheckoutItem from './CheckoutItem';
import { couponActions } from '../../store/Coupon/coupon-sclice';
import { acceptedStatusUpdate } from '../../store/Cart/cart-actions';

const Checkout = ()=> {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [totalAmount, setTotalAmount]= useState(0);
    const [discountPer,setDiscountPer] = useState(0);

    const user = useSelector((store) => store.user.user);
    let cart = useSelector((store) => store.cart);
    const coupon = useSelector((state) => state.coupon);
    
    const { cartTotalQuantity, cartTotalAmount } = useSelector((state) => state.cart);
    
    const userName = user.userName;
    let userId = user._id;
    
    let items = cart.items;
    
  

    function returnToCart(){
        navigate("/cart");
    }
   
    function payment(){
        alert("userId:" + userId);
        alert("items:" + items);
        alert("Thank you for your purchase.");
        let paymentObject = {
            userId:userId,
            items:items
        }
        dispatch(acceptedStatusUpdate(paymentObject));
       

        navigate("/home");
        //evt.preventDefault();//it stops the default behaviour like event propagation
    }

    function applyCoupon() {
   
        setDiscountPer(coupon.discountPercent);
        calculateTotal();
       
        dispatch(couponActions.applyCoupon(true));

        
    }

    function calculateTotal() {
        
        let taxAmount = (cartTotalAmount * 10) / 100;;
        if (coupon.useCoupon){
            let discountAmount = (cartTotalAmount * discountPer) / 100;
            
            let totalA = cartTotalAmount - discountAmount - taxAmount;
            setTotalAmount(totalA.toFixed(2));
        }else{
            let totalA = cartTotalAmount - taxAmount;
            setTotalAmount(totalA.toFixed(2));
        }
    }

    useEffect(() => {
        setDiscountPer(coupon.discountPercent);
        calculateTotal()
    }, [coupon.useCoupon]);

    return(
        <div className={classes.checkout}>
            <header >
                <h1>Current Cart</h1>
                <button  onClick={returnToCart} >
                    back to cart
                </button>
                <hr></hr>
            </header>

            <div className="row">
                <div className="col-md-6">
                    <h2>Shipping Option </h2>
                    <select>
                        <option value="USPS">USPS</option>
                        <option value="FedEx">FedEx</option>
                        <option value="UPS">UPS</option>
                    </select>
                

                    
                    <h2>Discount Code</h2>
                    <div className={classes.couponDiv}>
                        <p>{coupon.couponNumber}</p>
                        <button onClick={applyCoupon} >Apply</button>
                    </div>
                </div>
                

                
                    <div className="col-md-6">
                        <h2>Cart Total</h2>

                        <div className="row">
                            <div className="col-md-7" >
                                <h6>Product Name</h6>
                            </div>
                           
                            <div className="col-md-3"><h6>Quantity</h6></div>
                            <div className="col-md-2"><h6>totalPrice</h6> </div>
                        </div>
                        <hr></hr>

                        {items.map((item) => (
                            <CheckoutItem 
                                key={item.productId} 
                                item={{
                                    name:item.name,
                                    quantity:item.quantity,
                                    totalPrice:item.totalPrice
                                }}
                            />
                        ))
                        }

                        <hr></hr>
                        <div className="row">
                            <div className="col-md-5" ></div>
                            <div className="col-md-5" >
                                <h6>Total Quantity</h6>
                                <h6>SubTotal</h6>
                                <h6>Discount</h6>
                                <h6>Tax</h6>
                                <h6>Total</h6>
                            </div>
                           
                            <div className="col-md-2">
                                <h6>{cartTotalQuantity}</h6>
                                <h6>{cartTotalAmount}</h6>
                                {
                                    coupon.useCoupon ?
                                        <h6>{coupon.discountPercent}%</h6>
                                        :
                                        <h6>0%</h6>
                                }
                                <h6>10%</h6>
                                <h6>{totalAmount}</h6>
                                
                            </div>
                            
                        </div>      

                        <hr></hr>
                        <button  onClick={payment} >
                            PAY
                        </button>
                    </div>
                  
            </div>

            {/* <div>
                <h5>Shipping Option </h5>
                <div>
                    <select>
                        <option value="USPS">USPS</option>
                        <option value="FedEx">FedEx</option>
                        <option value="UPS">UPS</option>
                    </select>
                </div>

                <p>--------------------------------------------</p>
                <h5>Discount Code</h5>
                <div className={classes.couponDiv}>
                    <p>{coupon.couponNumber}</p>
                    <button  >Use Code</button>
                </div>

                <p>--------------------------------------------</p>
                <h5>Cart Total</h5>
                <h1>{}</h1>

                <p>--------------------------------------------</p>
                <button  onClick={payment} >
                    PAY
                </button>
            </div> */}
            

        </div>
    )
}

export default Checkout;

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