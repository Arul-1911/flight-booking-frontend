import React from "react";
import './bookTicket.css';
import {useNavigate} from 'react-router-dom'
// import { AiOutlineSwap } from "react-icons/ai";

//importing images from assests
import errimg from '../../assets/404 image.png'

const FlightDetails = ({ flight }) => {
  return (
    <div className="flight-details-container">
      <div className="airline-info">
        <img src={flight.airlineLogo} alt={flight.airline} />
        <span className="airline-name">{flight.airline}</span>
      </div>
      <div className="departure-arrival">
        <span className="departure">{flight.departure}</span>
        <span className="arrow">&#10140;</span>
        <span className="arrival">{flight.arrival}</span>
      </div>
      <div className="date-price">
        <span className="date">{flight.departureDate}</span>
        <span className="price">${flight.price}</span>
      </div>
      <button className="book-now">Book Now</button>
    </div>
  );
};




function BookTicket() {
  // const now = new Date();
  // const max = new Date(now.getFullYear(), now.getMonth() + 12, now.getDate());

  const navigate = useNavigate();

  const handleChange = () => {
   navigate('/home')
  }

  const sampleFlights = [{
    airline: "Sample Airlines",
    airlineLogo: "airline-logo.png", // Replace with the actual path to the logo
    departure: "City A",
    arrival: "City B",
    departureDate: "2024-01-20",
    price: 300,
  },
{
  airline: "Sample Airlines",
    airlineLogo: "airline-logo.png", // Replace with the actual path to the logo
    departure: "City A",
    arrival: "City B",
    departureDate: "2024-01-20",
    price: 300,
},{
  
    airline: "Sample Airlines",
      airlineLogo: "airline-logo.png", // Replace with the actual path to the logo
      departure: "City A",
      arrival: "City B",
      departureDate: "2024-01-20",
      price: 300,
  
}]
    
  ;

  return (
    <div className="bookticket-container">
    {/* Centering the content */}
    {/* <div className="container error-container">
      <div className="row">
        <img src={errimg} alt="error-image" className="error-image"/>
        <h1 className="error-text text-center">No Flight's found...</h1>
      </div>
      <div className="back-to-bookticket">
        <button onClick={handleChange} className="back-to-booking mt-4">Back To Booking</button>
      </div>
    </div> */}
     <div className="app-container">
      <h1>Flight Search Results</h1>
      {sampleFlights.map((flight, index) => (
      <FlightDetails key={index} flight={flight} />
    ))}
      {/* Add more FlightDetails components for additional flights */}
    </div>
  </div>
  );
}

export default BookTicket;
