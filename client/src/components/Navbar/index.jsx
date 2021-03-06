import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { IsLoggedInContext } from "../../context/Store";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  const logout = async () => {
    const user = await axios.get("/api/logout")
    setIsLoggedIn(false);
  }

  const renderLoggedIn = () => {
    switch (isLoggedIn) {
      case null:
        return <li><p>Loading</p></li>;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return <li><a onClick={logout}>Logout</a></li>;
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <Link 
          to={isLoggedIn ? "/surveys" : "/"} 
          className="left brand-logo"
        >
          Feedbacker
        </Link>
        <ul className="right">
          {renderLoggedIn()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;