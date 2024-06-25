import React, { useEffect, useState } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';

import { useSelector ,useDispatch} from "react-redux"; //replacement of mapStateToProps
import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import Cart from "./Cart/Cart.js";
import Notification from "../images/notification.svg";


import { resetUserFromStore,updateLoginStatus } from "../store/User/userAction";// Import the logout action creator
import { GetCardFromDBByUserId ,clearItemsInCart} from '../store/Cart/cart-actions.js';

import { addStaticNotification ,removeDynamicNotificationItem} from "../store/Notification/notification-action.js";

let Header = (props) => {
// Define openNotification state variable
const [openNotification, setOpenNotification] = useState(false);

    const dispatch = useDispatch(); //Get the dispatch function from react-redux
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);

  
    const notification = useSelector((state => state.notification.staticNotification));

    const dynamicNotification = useSelector((state) => state.notification.dynamicNotifications);
    let len = dynamicNotification.length;
    

    const userId = user._id;
    
    const { cartTotalQuantity } = useSelector((state) => state.cart);

    console.log("cartTotalQuantity: " + cartTotalQuantity);

    // useEffect(() => {
    //     dispatch(GetCardFromDBByUserId(userId))
    // },[totalQuantity])
  
   

    const handleLogout = () => {
        dispatch(resetUserFromStore());
        dispatch(updateLoginStatus(false)); // Dispatch the action to update isLogin status
        navigate("/home");
    };
      
    const handleRemoveItem = (index) => {
        dispatch(removeDynamicNotificationItem(index));
        closeNotificationDropdown();
    };
  
    const usrName = user && user.userName ? user.userName : props.userName;

    const staticNotificationObj = {
        "staticNotifications": [
            {
                "staticId": 1,
                "message": "Add Products"
            },
            {
                "staticId": 2,
                "message": "Go to cart page"
            },
            {
                "staticId": 3,
                "message": "Review cart"
            },
            {
                "staticId": 4,
                "message": "Create Coupon"
            },
            {
                "staticId": 5,
                "message": "Check order status"
            }
        ]
    };
    useEffect(() => {
        dispatch(addStaticNotification(staticNotificationObj));
    }, [dispatch]);
  

    useEffect(() => {
        if (dynamicNotification.length > 0) {
            setOpenNotification(true); // Open the notification dropdown
            const timer = setTimeout(() => {
                closeNotificationDropdown();
            }, 5000); // Close the notification dropdown after 5 seconds

            return () => clearTimeout(timer); // Clear the timer on component unmount
        }
    }, [dynamicNotification]);

    const closeNotificationDropdown = () => {
        setOpenNotification(false);
    };


    return (
        <>
            <header id="main-header">
            <div id="title">
                <img src={logoImg} alt="A restaurant" />
                <h1>ReactFood</h1>
            </div>
            <nav>

                {/* <Button textOnly>Cart (0)</Button> */}
                {/* <NavLink to="/cart"  activeclassname="true">
                    Cart 
                </NavLink> */}
                
                
                
<div className="icons">



<div className={`notification ${openNotification ? 'active' : ''}`}>
    <div className="icon" onClick={() => setOpenNotification(!openNotification)}>
        <img src={Notification} className="iconImg" alt="" />
        <div className="counter">{len}</div>
    </div>
    {/* Render notification dropdown based on openNotification state */}
    {openNotification &&  user._id && (
        <div className="notification-dropdown">
            {/* Map over the notification array and render each item's message */}
            {notification[0].map((item, index) => (
                <div key={item._id}>
                    <Link to={index === 0 ? "/product" : index === 1 ? "/cart" : index === 2 ? "/checkout" : index === 3 ? "/coupon" : "/order"}
                        onClick={() => setOpenNotification(false)} // Close dropdown when link is clicked
                    >
                        <div>
                            {item.message}
                        </div>
                    </Link>
                </div>
            ))}
            
            <div className="dynamicNotification">
                {dynamicNotification.length > 0 && (
                    <>
                        {dynamicNotification.map((item, index) => (
                            <h6 key={index} onClick={() => handleRemoveItem(index)}>{item}</h6>
                        ))}
                    </>
                )}
            </div>



        </div>
    )}
</div>


                     {userId && (
                    <NavLink to="/cart">
                        <div className="nav-bag">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="25"
                                height="25"
                                fill="currentColor"
                                className="bi bi-handbag-fill"
                                viewBox="0 0 16 16"
                                >
                                <path d="M8 1a2 2 0 0 0-2 2v2H5V3a3 3 0 1 1 6 0v2h-1V3a2 2 0 0 0-2-2zM5 5H3.36a1.5 1.5 0 0 0-1.483 1.277L.85 13.13A2.5 2.5 0 0 0 3.322 16h9.355a2.5 2.5 0 0 0 2.473-2.87l-1.028-6.853A1.5 1.5 0 0 0 12.64 5H11v1.5a.5.5 0 0 1-1 0V5H6v1.5a.5.5 0 0 1-1 0V5z" />
                            </svg>
                            <span className="bag-quantity">
                                <span>{cartTotalQuantity}</span>
                            </span>
                        </div>
                    </NavLink>
                )}

                    {usrName && 
                     <h4 id="hiUser">Hello, {usrName}</h4>  
                    }
                </div>

                 
            </nav>
        
            </header>
        
            
            {userId ? (
                <div className="nav-bar">
                <NavLink to="/home" className="button" activeclassname="true">
                    Home
                </NavLink>
                <NavLink to="/about" className="button" activeclassname="true">
                    About
                </NavLink>
                <NavLink to="/product" className="button" activeclassname="true">
                    Add Product
                </NavLink>

                <NavLink to="/coupon" className="button" activeclassname="true">
                    Coupon
                </NavLink>
                <NavLink to="/order" className="button" activeclassname="true">
                    MyOrders
                </NavLink>

            
                <button id="logout_button" onClick={handleLogout}>Logout</button>
                </div>
            ) : (
                <div className="nav-bar">
                    <NavLink to="/home" className="button" activeclassname="true">
                    Home
                    </NavLink>
                    <NavLink to="/user" className="button" activeclassname="true">
                        Login
                    </NavLink>
                    <NavLink to="/auth" className="button" activeclassname="true">
                        Authentication
                    </NavLink>
                </div>
            )}

        
      </>
    );
  };
  
  export default Header;