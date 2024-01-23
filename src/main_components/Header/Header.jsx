import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../assets/logo2.png";
import { useNavigate, Link } from "react-router-dom";

import "./header.css";

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    alert("Logged out Successfully");
    navigate("/", { replace: true });
  };

   const handleLogoClick = () => {
    navigate("/home")
   }


  return (
    <div>
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid d-flex justify-content-between align-items-center">
          <span className="navbar-brand d-flex align-items-center">
            <img
              src={logo}
              alt="Logo"
              className="d-inline-block align-text-top logo"
              onClick={handleLogoClick}
            />
            <Link to="/home" className="link-without-underline">
              <span className="header ms-3">BookTicket</span>
            </Link>

            <span className="header ms-3">MyTickets</span>
            <Link to="/about" className="link-without-underline">
              <span className="header ms-3">About</span>
            </Link>
            <Link to="/contact" className="link-without-underline">
              <span className="header ms-3">Contact</span>
            </Link>
            </span>
          <span>
            {" "}
            {/* Logout button */}
            <button onClick={handleLogout} className="ms-1 signout">
              Logout
            </button>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Header;
