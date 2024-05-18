import React from "react";
import { NavLink } from "react-router-dom";

let Header = () => {
    return (
        <div className="headerDiv">
            <h2>Essessment 4</h2>
           
            <NavLink to="/" className="button" activeclassname="true">SignIn</NavLink>
            {/* <NavLink to="/success_child" className="button" activeclassname="true">Success_Child</NavLink>
            <NavLink to="/success_story" className="button" activeclassname="true">Success_Story</NavLink> */}
            <NavLink to="/success" className="button" activeclassname="true">Success</NavLink>
         
        
        </div>
    );
}

export default Header;