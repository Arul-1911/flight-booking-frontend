// SeatBooking.js
import Header from "../Header/Header";
import React, { useState, useEffect } from "react";
import "./seatbooking.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";
import backendUrl from "../../Url/backendurl";
import logo from '../../assets/logo.png'


function SeatBooking() {
  const navigate = useNavigate();
  const [totalAmount,setTotalAmount]= useState(0);


  useEffect(() => {
    // Fetch total amount from the backend when the component mounts
    const fetchTotalAmount = async () => {
      try {
        const response = await fetch(`${backendUrl}/api/getTotalAmount`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        const data = await response.json();
        setTotalAmount(data.totalPrice);
      } catch (error) {
        console.error("Error fetching total amount:", error);
      }
    };

    fetchTotalAmount();
  }, []);

  const Payment = async (e) => {
    const currency = 'INR';
    const receiptId = 'qwsaq1';

    // Convert totalPrice to paise (multiply by 100)
    const amountInPaise = totalAmount * 100;
    try {
      const response = await fetch(`${backendUrl}/order`, {
        method: "POST",
        body: JSON.stringify({
          amount: amountInPaise,  // Use the amount in paise
          currency,
          receipt: receiptId,
        }),
        headers:{
          "Content-Type":"application/json"
        },
      });
      //converting to json
      const order = await response.json();
      console.log(order);

      var options = {
        "key": "rzp_test_2EGK4ZYVHmtD0I", // Enter the Key ID generated from the Dashboard
        amount: amountInPaise,  // Use the amount in paise
        currency,
        "name": "Kiwi Flights.com", //your business name
        "description": "Test Transaction",
        "image": logo,
        "order_id": order.id, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
        "handler": async function (response){
            // alert(response.razorpay_payment_id);
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature)
            const body = {
              ...response
            };
       
            const validateRes = await fetch(`${backendUrl}/order/validate`,{
              method:"POST",
              body: JSON.stringify(body),
              headers:{
                "Content-Type": "application/json",
              }
            })

            const jsonres = await validateRes.json();
            console.log(jsonres);



        },
        "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
            "name": "Arul", //your customer's name
            "email": "Arul@example.com", 
            "contact": "9000090000"  //Provide the customer's phone number for better conversion rates 
        },
        "notes": {
            "address": "Razorpay Corporate Office"
        },
        "theme": {
          "color": "#008774"
      },
      "config": {
          "display": {
              "blocks": {
                  "banks": {
                      "name": "All payment methods",
                      "instruments": [
                          {
                              "method": "upi"
                          },
                          {
                              "method": "card"
                          },
                          {
                              "method": "wallet"
                          },
                          {
                              "method": "netbanking"
                          }
                      ]
                  }
              },
              "sequence": ["block.banks"],
              "preferences": {
                  "show_default_blocks": false
              }
          }
      }
  };
    
    var rzp1 = new window.Razorpay(options);
    rzp1.on('payment.failed', function (response){
        alert(response.error.code);
        alert(response.error.description);
       
    });
    
    rzp1.open();
    e.preventDefault();
    

    } catch (error) {
      console.log(error)
    }

    // console.log("Navigate to the payment gateway");
  };

  const cancelPayment = () => {
    // Add your logic to go back to the passenger details form
    navigate("/home");
    console.log("Cancel Payment and go back to passenger details form");
  };

  return (
    <>
      <Header />
      <div className="seat-booking-container">
        <div className="content">
          <ul>
            <li>
              Welcome to our Kiwi flight booking system! For this flight, seats
              will be randomly allocated.
            </li>
          </ul>
          <ul>
            <li>
              Sit back and relax while we assign the best available seats for
              you.
            </li>
          </ul>
        </div>
        <div className="button-container">
          <button className="seat-booking-button" onClick={Payment}>
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
