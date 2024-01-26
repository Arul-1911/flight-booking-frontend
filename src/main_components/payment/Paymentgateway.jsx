import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


import "./paymentgateway.css";
import Header from "../Header/Header";
import backendurl from '../../Url/backendurl';

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

const stripePromise = loadStripe("sk_test_51OaYUrSFekStM1Bar7vlypn7z1Ma7vrbl7TqlEMLAlYa5fDuMmrgH3hp8BBbsNRbl5wEMfyc5lTAEYiQlNFkMmMS00urw493J7");

export default function Paymentgateway() {
  const [message, setMessage] = useState("");
  const [flightDetails, setFlightDetails] = useState({
    name: "",
    pricePerPassenger: 0,
  });
  const [passengerCount, setPassengerCount] = useState(1);
  const [loading, setLoading] = useState(false);

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

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // backend API to create payment intent
      const response = await fetch(`${backendurl}/create-payment-intent`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: flightDetails.pricePerPassenger * passengerCount,
          currency: 'INR', // Currency
        }),
      });

      const data = await response.json();

      // Handle the data (e.g., redirect to the Stripe checkout page)
      if (data.clientSecret) {
        // Redirect to Stripe Checkout
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
          sessionId: data.clientSecret,
        });

        if (error) {
          console.error("Error redirecting to checkout:", error);
          setMessage("Error redirecting to checkout. Please try again.");
        }
      } else {
        setMessage("Error creating payment intent. Please try again.");
      }
    } catch (error) {
      console.error("Error creating payment intent:", error);
      setMessage("Error creating payment intent. Please try again.");
    } finally {
      setLoading(false);
    }
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
        <Elements stripe={stripePromise}>
          
        </Elements>
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
