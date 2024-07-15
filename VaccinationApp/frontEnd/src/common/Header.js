import React, { useEffect, useState } from "react";
import { useSelector ,useDispatch} from "react-redux"; 
import { NavLink , useNavigate} from "react-router-dom";
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import {logoutFromStore} from '.././store/Auth/auth-action';
import './Navbar/Navbar.css';


import {navItems } from "./Navbar/NavItems";
import {chartDropdown} from "./Navbar/NavItems";
import Dropdown from "./Dropdown/Dropdown";
import ChartDropdown from "./Dropdown/ChartDropDown.js";

import logoImg from '../images/vaccine-icon.svg';
import phoneImg from '../images/phone-icon.png';
import {updateToVaccinatedStatus} from "../store/Default/Default-actions";


let Header = (props) => {
    const [dropdown, setDropdown] = useState(false);
    const [chartDropdown, setChartDropdown] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector((state) => state.auth.user);
    const isLoginSuccess = useSelector((state) => state.auth.isLoginSuccess);
    
    


    const userFirstName = user && user.firstName ? user.firstName  : "";

    const logout = () => {
        dispatch(logoutFromStore());
        navigate('/home');

    }

    useEffect(()=> {
        dispatch(updateToVaccinatedStatus());
    },[]);

    return (
        <>
            <header id="main-header">
                <div id="title">
                    <img src={logoImg} alt="A restaurant" />
                    <div id="header-title">
                        <h1>NVAC CARE</h1>
                        <p>Care to improve your life</p>
                    </div>

                    <div className="navLink">
                        <ul className="navItems">
                            {navItems.map((item) => {
                                if (item.title === "Admin") {
                                    return (
                                        <li
                                            key={item.id}
                                            className={item.cName}
                                            onMouseEnter={() => setDropdown(true)}
                                            onMouseLeave={() => setDropdown(false)}
                                        >
                                            <Link to={item.path}>{item.title}</Link>
                                            {dropdown && <Dropdown />}
                                        </li>
                                    );
                                }else if(item.title === "MyChart") {
                                    return (
                                        <li
                                            key={item.id}
                                            className={item.cName}
                                            onMouseEnter={() => setChartDropdown(true)}
                                            onMouseLeave={() => setChartDropdown(false)}
                                        >
                                            <Link to={item.path}>{item.title}</Link>
                                            {chartDropdown && <ChartDropdown />}
                                        </li>
                                    );
                                
                                } else {
                                    return (
                                        <li key={item.id} className={item.cName}>
                                            <NavLink to={item.path} activeclassname="active">
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    );
                                }
                            })}
                        </ul>
                    </div>
                      
                        {/* // <NavLink to="/home"  activeclassname="true">
                        //     Home
                        // </NavLink>
                        // <NavLink to="/register"  activeclassname="true">
                        //     Register
                        // </NavLink>
                        // <NavLink to="/contact"  activeclassname="true">
                        //     Contact
                        // </NavLink>
                    
                        // <NavLink to="/vaccine"  activeclassname="true">
                        //     Vaccine
                        // </NavLink>

                        // <NavLink to="/hospital"  activeclassname="true">
                        //     Hospital
                        // </NavLink>

                        // <NavLink to="/admin"  activeclassname="true">
                        //     AdminInfo
                        // </NavLink>


                        // <NavLink to="/profile"  activeclassname="true">
                        //     MyProfile
                        // </NavLink>

                        // <NavLink to="/userList"  activeclassname="true">
                        //     UserList
                        // </NavLink>

                        // <NavLink to="/registersList"  activeclassname="true">
                        //     RegistersList
                        // </NavLink> */}
                   
                </div>
               
                <nav>       
                    <h4 id="hiUser">Hello, {userFirstName}</h4>   
                    {isLoginSuccess ? (
                        <button onClick={logout} className={classes.loginButton}>Logout</button>
                    ) : (
                        <button className={classes.loginButton} onClick={() => navigate('/auth/login')}>Login</button>
                    )}      
                </nav>
            </header>

            <div className={classes.subHeaderBar}>
                <Link to="/contact">  {/* Use Link component with "to" prop to navigate to "/contact" */}
                    <img src={phoneImg} alt="phone" />
                    <h4>Contact Us</h4>
                    
                </Link>
                <p>For Afterhours Please Call Your Nearest Health Center</p>
            </div>
        
      </>
    );
  };
  
  export default Header;





//     return (
//         <>
//             <header id="main-header">
//                 <div id="title">
//                     <img src={logoImg} alt="A restaurant" />
//                     <div id="header-title">
//                         <h1>NVAC CARE</h1>
//                         <p>Care to improve your life</p>
//                     </div>
//                     <div className={classes.navLink}>
                    
//                         <NavLink to="/home"  activeclassname="true">
//                             Home
//                         </NavLink>
//                         <NavLink to="/register"  activeclassname="true">
//                             Register
//                         </NavLink>
//                         <NavLink to="/contact"  activeclassname="true">
//                             Contact
//                         </NavLink>
                    
//                         <NavLink to="/vaccine"  activeclassname="true">
//                             Vaccine
//                         </NavLink>

//                         <NavLink to="/hospital"  activeclassname="true">
//                             Hospital
//                         </NavLink>

//                         <NavLink to="/admin"  activeclassname="true">
//                             AdminInfo
//                         </NavLink>


//                         <NavLink to="/profile"  activeclassname="true">
//                             MyProfile
//                         </NavLink>

//                         <NavLink to="/userList"  activeclassname="true">
//                             UserList
//                         </NavLink>

//                         <NavLink to="/registersList"  activeclassname="true">
//                             RegistersList
//                         </NavLink>
//                     </div>
//                 </div>
               
//                 <nav>       
//                     <h4 id="hiUser">Hello, {userFirstName}</h4>   
//                     {isLoginSuccess ? (
//                         <button onClick={logout} className={classes.loginButton}>Logout</button>
//                     ) : (
//                         <button className={classes.loginButton} onClick={() => navigate('/auth/login')}>Login</button>
//                     )}      
//                 </nav>
//             </header>

//             <div className={classes.subHeaderBar}>
//                 <Link to="/contact">  {/* Use Link component with "to" prop to navigate to "/contact" */}
//                     <img src={phoneImg} alt="phone" />
//                     <h4>Contact Us</h4>
                    
//                 </Link>
//                 <p>For Afterhours Please Call Your Nearest Health Center</p>
//             </div>
        
//       </>
//     );
//   };
  
//   export default Header;