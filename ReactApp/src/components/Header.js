import React, { useEffect } from "react";
import { NavLink , useNavigate} from "react-router-dom";
import { useSelector ,useDispatch} from "react-redux"; //replacement of mapStateToProps
import logoImg from '../assets/logo.jpg';
import Button from "./UI/Button.jsx";
import Cart from "./Cart/Cart.js";
import Notification from "../images/notification.svg";


import { resetUserFromStore,updateLoginStatus } from "../store/User/userAction";// Import the logout action creator
import { GetCardFromDBByUserId ,clearItemsInCart} from '../store/Cart/cart-actions.js';
let Header = (props) => {
    const dispatch = useDispatch(); //Get the dispatch function from react-redux
    const navigate = useNavigate();

    const user = useSelector((state) => state.user.user);
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
      
      
  
    const usrName = user && user.userName ? user.userName : props.userName;
  
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
                
                
                
<               div className="icons">
                    <div className="icon" onClick={() => setOpen(!open)}>
                        <img src={Notification} className="iconImg" alt="" />
                        <div className="counter">2</div>
                        {
                            // notifications.length >0 &&
                            // <div className="counter">{notifications.length}</div>
                        }
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


                     <h4 id="hiUser">Hi {usrName}</h4>  
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
                    </div>
            )}

        
      </>
    );
  };
  
  export default Header;