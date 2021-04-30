import React from "react";
import { NavLink } from "react-router-dom";

function Header() {
  const activeStyle = {color: "orange"};
  return (
    <div className="container-fluid">
      <div className="header">
        <nav className="bold">
            
            <NavLink activeStyle={activeStyle} exact to="/">
                Home
            </NavLink>
            {" | "}
            <NavLink activeStyle={activeStyle} to="/workout">
                Workout
            </NavLink>
                 
          
        </nav>        
      </div>
      <div className="jumbotron">
          <h2>Home Workout Exercise Selector</h2>
          <p>hit the <i className="fa fa-plus"></i> symbol to add it your workout list, the <i className="fa fa-trash"></i> to remove it, and the <i className="fa fa-check"></i> to complete it!</p>
        </div>
    </div>
    
  );
}

export default Header;