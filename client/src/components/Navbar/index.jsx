import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="nav-wrapper">
        <a href="/" className="left brand-logo">Feedbacker</a>
        <ul className="right">
          <li><a href="/api/test">Login with Google</a></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;