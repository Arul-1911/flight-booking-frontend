// GetStarted.js

import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Import the CSS file

const GetStarted = () => {
  return (
    <div className="background-container">
      {/* <span>Welcome To AirWaveTickets.com</span> */}
      <Link to="/signin" className="get-started-button">
        Get Started
      </Link>
    </div>
  );
};


export default GetStarted;
