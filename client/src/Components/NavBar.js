import React from "react";
import { NavLink } from "react-router-dom";

function NavBar(){

  return(
    <nav id="navbar">
      <div className="nav-wrapper light-green lighten-2">
        <NavLink className="left black-text logo" exact to="/">Sunset Hills</NavLink>
        <NavLink className="right black-text navuser" exact to="/login">Login</NavLink>
      </div>
    </nav>
  )
}
export default NavBar