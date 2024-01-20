import React, { useState, useEffect } from "react";
import "./paymentgateway.css";
import Header from "../Header/Header";

const FlightDetails = ({ flightName, pricePerPassenger, passengerCount }) => (
  <div className="product">
  
    <div className="description">
      <h3>{flightName}</h3>
      <h5>{`$${pricePerPassenger.toFixed(2)} per Passenger`}</h5>
      <p>{`Total Price: $${(pricePerPassenger * passengerCount).toFixed(2)}`}</p>
    </div>
  </div>
);

const Message = ({ message }) => (
  <section>
    <p>{message}</p>
  </section>
);

export default function Paymentgateway() {
  const [message, setMessage] = useState("");
  const [flightDetails, setFlightDetails] = useState({
    name: "", // Initialize with an empty string
    pricePerPassenger: 0, // Initialize with 0
  });
  const [passengerCount, setPassengerCount] = useState(1);

  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("canceled")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);

  const handlePassengerCountChange = (e) => {
    setPassengerCount(parseInt(e.target.value, 10) || 1);
  };

  return message ? (
    <Message message={message} />
  ) : (
    <>
      <Header />
      <section>
        <FlightDetails
          flightName={flightDetails.name}
          pricePerPassenger={flightDetails.pricePerPassenger}
          passengerCount={passengerCount}
        />
        <form
          action="/create-payment-intent" // Update with your backend route for creating payment intent
          method="POST"
        >
          <button type="submit">Pay Now</button>
        </form>
        <label>
          Number of Passengers:
          <input
            type="number"
            value={passengerCount}
            onChange={handlePassengerCountChange}
          />
        </label>
      </section>
    </>
  );
}
