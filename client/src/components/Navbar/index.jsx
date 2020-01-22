import React, { useState, useContext } from "react";
import { IsLoggedInContext } from "../../context/Store";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useContext(IsLoggedInContext);

  const renderLoggedIn = () => {
    switch (isLoggedIn) {
      case null:
        return <li><p>Loading</p></li>;
      case false:
        return <li><a href="/auth/google">Login with Google</a></li>;
      default:
        return <li><a>Logout</a></li>;
    }
  }

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">Feedbacker</a>
        <ul className="right">
          {renderLoggedIn()}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;