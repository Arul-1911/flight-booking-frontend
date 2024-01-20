// SeatBooking.js
import Header from '../Header/Header'
import React from 'react';
import './seatbooking.css';
import { useNavigate } from 'react-router-dom'; // Import the CSS file

function SeatBooking() {
 
    const navigate = useNavigate();

  const navigateToPayment = () => {
    // Add your navigation logic to the payment gateway here
    navigate('/payment')
    console.log('Navigate to the payment gateway');
  };

  const cancelPayment = () => {
    // Add your logic to go back to the passenger details form
    navigate('/home')
    console.log('Cancel Payment and go back to passenger details form');
  };

  return (
    <>
      <Header />
      <div className="seat-booking-container">
        <div className="content">
          <ul>
            <li>
              Welcome to our Kiwi flight booking system! For this flight, seats will be randomly allocated.
            </li>
          </ul>
          <ul>
            <li>
              Sit back and relax while we assign the best available seats for you.
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button className="seat-booking-button" onClick={navigateToPayment}>
            Proceed to Payment
          </button>
          <button className="cancel-button mt-4" onClick={cancelPayment}>
            Cancel 
          </button>
        </div>
      </div>
    </>
  );
}

export default SeatBooking;
