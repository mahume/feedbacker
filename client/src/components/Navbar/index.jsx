import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a className="left brand-logo">Feedbacker</a>
        <ul className="right">
          <li><a>Login with Google</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;