// GetStarted.js

import React from 'react';
import {useNavigate} from 'react-router-dom';
import './style.css'; // Import the CSS file
// import { replace } from 'formik';

const GetStarted = () => {
  const navigate = useNavigate();

  const handleGetStarted = () => {
    navigate('/signin', {replace:true})

  }
  return (
    <div className="background-container">
      {/* <span>Welcome To AirWaveTickets.com</span> */}
      <button onClick={handleGetStarted} className="get-started-button">
        Get Started
      </button>
    </div>
  );
};


export default GetStarted;
