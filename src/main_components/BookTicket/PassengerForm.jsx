import React, { useState } from "react";
import axios from "axios";
import "./passengerForm.css";
import backendUrl from "../../Url/backendurl";
import { useNavigate } from "react-router-dom";

const PassengerForm = ({
  selectedFlight,
  onBackToBooking,
  flightName,
  price,
}) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const [mainPassenger, setMainPassenger] = useState({
    name: "",
    age: "",
    gender: "",
    luggage: "",
  });

const navigate = useNavigate();



  const handleChangeCount = (e) => {
    const { name, value } = e.target;
    if (name === "adultCount") {
      setAdultCount(parseInt(value, 10));
    } else if (name === "childCount") {
      setChildCount(parseInt(value, 10));
    }
  };

  const handleChangeMainPassenger = (field, value) => {
    setMainPassenger((prevDetails) => ({
      ...prevDetails,
      [field]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle form submission (send data to backend)
    const travelDetails = {
      adults: adultCount,
      children: childCount,
      mainPassenger,
      flightName,
      price,
    };
    console.log("Travel details submitted:", travelDetails);
    // After handling submission, you can navigate to a confirmation page or perform other actions
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User is not authenticated. Please log in.");
        return;
      }

      const response = await axios.post(
        `${backendUrl}/api/submitTravelDetails`,
        travelDetails,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Server response:", response.data);
      // After handling submission, you can navigate to a confirmation page or perform other actions

      navigate('/seatBooking')
      
    } catch (error) {
      console.error("Error submitting travel details:", error.message);
      // Handle the error
    }
  };

  //   };

  return (
    <div className="passenger-form-container">
      <h1 className="passenger-heading">Passenger Details</h1>
      <div className="flight-details">
        <p>
          <b>Flight:</b> {flightName}, <b>Price:</b> {price}
        </p>
      </div>
      <form className="passenger-form" onSubmit={handleSubmit}>
        <label htmlFor="adultCount">Number of Adults:</label>
        <select
          id="adultCount"
          name="adultCount"
          value={adultCount}
          onChange={handleChangeCount}
          required
        >
          {[...Array(5).keys()].map((num) => (
            <option key={num + 1} value={num + 1}>
              {num + 1}
            </option>
          ))}
        </select>

        <label htmlFor="childCount">Number of Children:</label>
        <select
          id="childCount"
          name="childCount"
          value={childCount}
          onChange={handleChangeCount}
          required
        >
          {[...Array(5).keys()].map((num) => (
            <option key={num} value={num}>
              {num}
            </option>
          ))}
        </select>

        <div className="main-passenger-details">
          <h4>Main Passenger Details</h4>
          <br />
          <label htmlFor="mainName">Name:</label>
          <input
            type="text"
            id="mainName"
            name="mainName"
            value={mainPassenger.name}
            onChange={(e) => handleChangeMainPassenger("name", e.target.value)}
            required
          />

          <label htmlFor="mainAge">Age:</label>
          <input
            type="number"
            id="mainAge"
            name="mainAge"
            value={mainPassenger.age}
            onChange={(e) => handleChangeMainPassenger("age", e.target.value)}
            required
          />

          <label htmlFor="mainGender">Gender:</label>
          <select
            id="mainGender"
            name="mainGender"
            value={mainPassenger.gender}
            onChange={(e) =>
              handleChangeMainPassenger("gender", e.target.value)
            }
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <label htmlFor="mainLuggage">Luggage:</label>
          <select
            id="mainLuggage"
            name="mainLuggage"
            value={mainPassenger.luggage}
            onChange={(e) =>
              handleChangeMainPassenger("luggage", e.target.value)
            }
            required
          >
            <option value="" disabled>
              Select Luggage
            </option>
            <option value="carry-on">Carry-on</option>
            <option value="checked">Checked</option>
          </select>
        </div>

        <button type="submit" className="passenger-button">
          Submit
        </button>
      </form>

      <button onClick={onBackToBooking} className="back-to-booking">
        Back To Booking
      </button>
    </div>
  );
};

export default PassengerForm;
