import React, { useEffect, useState } from "react";
import "./bookTicket.css"; // Make sure to include your CSS file
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import backendUrl from "../../Url/backendurl";
import PassengerForm from "./PassengerForm";

// import { AiOutlineSwap } from "react-icons/ai";
import errimg from "../../assets/404 image.png";
import flight_card_img from "../../assets/flight-details-card-img.jpg";

const FlightDetails = ({ flight,selectedDate, onBookNowClick }) => {
  return (
    <div className="flight-details-container">
      <div className="airline-info">
        <img src={flight_card_img} alt={flight.plane_name} />
        <span className="airline-name">{flight.plane_name}</span>
      </div>
      <div className="departure-arrival">
        <span className="departure">{flight.departure}</span>
        <span className="arrow">&#10140;</span>
        <span className="arrival">{flight.arrival}</span>
      </div>
      <div className="date-price">
        <span className="date">{selectedDate}</span>
        <span className="price">Rs.{flight.price}</span>
      </div>
      <div className="departure-arrival-time">
        <span className="departure-time">
          Departure Time: {flight.departure_time}
        </span>
        <span className="arrival-time">
          Arrival Time: {flight.arrival_time}
        </span>
      </div>
      <button className="book-now" onClick={() => onBookNowClick(flight)}>
        Book Now
      </button>
    </div>
  );
};

function BookTicket() {
  const navigate = useNavigate();
  const { departure, arrival, flightClass,date } = useParams();
  const [flights, setFlights] = useState([]);
  const [showPassengerForm, setShowPassengerForm] = useState(false);
  const [selectedFlight, setSelectedFlight] = useState(null);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get(`${backendUrl}/flights`, {
          params: {
            departure,
            arrival,
            flightClass,
            date
            
          },
        });
        setFlights(response.data);
        setSelectedDate(date);
      } catch (error) {
        console.error("Error fetching flight data:", error);
      }
    };

    fetchFlights();
  }, [departure, arrival, flightClass, date]);

  // console.log("flightsFetchedSuccessfully:", flightsFetchedSuccessfully);
  // console.log("flights:", flights);

  const handleBookNowClick = (flight) => {
    setSelectedFlight(flight);
    setShowPassengerForm(true);
  };

  const handleBackToBooking = () => {
    setShowPassengerForm(false);
  };

  const handleChange = () => {
    navigate("/home");
  };

  return (
    <div className="bookticket-container">
      {showPassengerForm ? (
        <PassengerForm
          selectedFlight={selectedFlight}
          onBackToBooking={handleBackToBooking}
          flightName={selectedFlight.plane_name}
          price={selectedFlight.price}
          date={selectedDate}
        />
      ) : (
        <div className="app-container">
          <h1>Flight Search Results</h1>
          {flights.length > 0 ? (
            flights.map((flight, index) => (
              <FlightDetails
                key={index}
                flight={flight}
                selectedDate={selectedDate}
                onBookNowClick={handleBookNowClick}
              />
            ))
          ) : (
            <div className="container error-container">
              {/* ... (existing error handling code) */}
              <div className="row align-items-center">
                <div className="col-12 text-center">
                  <img
                    src={errimg}
                    alt="error-display"
                    className="error-image"
                  />
                  <h1 className="error-text">No Flights found...</h1>
                  <button
                    onClick={handleChange}
                    className="back-to-booking mt-4"
                  >
                    Back To Booking
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default BookTicket;


  /* {<div className="row align-items-center">
<div className="col-12 text-center">
  <img src={errimg} alt="error-display" className="error-image" />
  <h1 className="error-text">No Flights found...</h1>
  <button onClick={handleChange} className="back-to-booking mt-4">
    Back To Booking
  </button>
</div>
</div> */

