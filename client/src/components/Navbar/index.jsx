import React, { useState, useContext } from "react";
import { IsLoggedInContext } from "../../context/Store";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  const renderLoggedIn = () => {
    switch (isLoggedIn) {
      case null:
        return "Loading";
      case false:
        return "Logged out";
      default:
        return "Logged in";
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">Feedbacker</a>
        <ul className="right">
          <li>
            <p>{renderLoggedIn()}</p>
            <a href="/api/test">Login with Google</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;