import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo2.png";

import "./header.css";

function Header() {
  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top logo"
            />
            <span className="header ms-3">BookTicket</span>
            <span className="header ms-3">MyTickets</span>
            <span className="header ms-3">About</span>
            <span className="header ms-3">Contact</span>
          </span>
          <span>
            {" "}
            {/* Logout button */}
            <button className="ms-1 signout">Logout</button>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
