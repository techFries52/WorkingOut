import React from "react";
import { Router, NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {color: "orange"};
  return (
    <div className="container">
      <div className="header">
        <nav className="bold">
            
            <NavLink activeStyle={activeStyle} exact to="/">
                Home
            </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/workout1">
                Workout 1
            </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/workout2">
                Workout 2
            </NavLink>     
          
        </nav>
      </div>
    </div>
    
  );
}

export default Header;