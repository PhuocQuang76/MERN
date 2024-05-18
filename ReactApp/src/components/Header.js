import React from "react";
import { NavLink } from "react-router-dom";

let Header = (props)=>{
    return(
        <div className="headerDiv">
            <h2>Header Component</h2>
            <h3>{ props.userName }</h3>
                <NavLink to="/home"  className="button" activeclassname="true" > Home </NavLink>
                <NavLink to="/user"  className="button" activeclassname="true" > Login </NavLink>
                <NavLink to="/about"  className="button" activeclassname="true" > About </NavLink>
                <NavLink to="/about/2500"  className="button" activeclassname="true" > About with Param</NavLink>
            <hr/>
        </div>
    )

}  

export default Header;