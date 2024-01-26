import React, { useState } from "react";
import axios from "axios";
import "./passengerForm.css";
import backendUrl from "../../Url/backendurl";
import { useNavigate } from "react-router-dom";

const PassengerForm = ({
  onBackToBooking,
  flightName,
  flightClass,
  price,
  date,
}) => {
  const [adultCount, setAdultCount] = useState(1);
  const [childCount, setChildCount] = useState(0);

  const [passengerDetails, setPassengerDetails] = useState({
    main: {
      name: "",
      phoneNumber: "",
      age: "",
      gender: "",
      luggage: "",
    },
    additional: {
      adults: Array.from({ length: 5 }, () => ({ name: "", gender: "" })),
      children: Array.from({ length: 5 }, () => ({ name: "", gender: "" })),
    },
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
    setPassengerDetails((prevDetails) => ({
      ...prevDetails,
      main: {
        ...prevDetails.main,
        [field]: value,
      },
    }));
  };

  const handlePassengerDetailsChange = (index, field, value, type) => {
    setPassengerDetails((prevDetails) => {
      const updatedAdditional = { ...prevDetails.additional };

      // Ensure that updatedAdditional[type] is an array before accessing the index
      if (!updatedAdditional[type]) {
        updatedAdditional[type] = [];
      }

      // Update the correct type (adults or children) based on the index
      updatedAdditional[type][index] = {
        ...updatedAdditional[type][index],
        [field]: value,
      };

      return {
        ...prevDetails,
        additional: updatedAdditional,
      };
    });
  };

  const generatePassengerFields = (count, type, handleChange) => {
    const fields = [];
    const additionalPassengers = passengerDetails.additional || {
      adults: [],
      children: [],
    };
    const passengersOfType = additionalPassengers[type] || [];

    for (let i = 0; i < count; i++) {
      const passenger = passengersOfType[i] || {};

      fields.push(
        <div key={i} className="passenger-details">
          <h4>
            {type} #{i + 1}
          </h4>
          <label htmlFor={`passengerName${i}`}>Name:</label>
          <input
            type="text"
            id={`passengerName${i}`}
            name={`passengerName${i}`}
            value={passenger.name || ""}
            onChange={(e) => handleChange(i, "name", e.target.value, type)}
            required
          />

          <label htmlFor={`passengerGender${i}`}>Gender:</label>
          <select
            id={`passengerGender${i}`}
            name={`passengerGender${i}`}
            value={passenger.gender || ""}
            onChange={(e) => handleChange(i, "gender", e.target.value, type)}
            required
          >
            <option value="" disabled>
              Select Gender
            </option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
      );
    }

    return fields;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const travelDetails = {
      adultss: adultCount,
      childrens: childCount,
      mainPassenger: passengerDetails.main,
      additionalPassengers: passengerDetails.additional,
      flightName,
      flightClass,
      price,
      date,
    };

    console.log("Travel Details:", travelDetails);

    try {
      const token = localStorage.getItem("token");
      if (!token) {
        console.error("User is not authenticated. Please log in.");
        return;
      }
      console.log(travelDetails);
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
      navigate("/seatBooking");
    } catch (error) {
      console.error("Error submitting travel details:", error.message);
    }
  };

  return (
    <div className="passenger-form-container">
      <h2 className="passenger-heading">Passenger Details</h2>
      <div className="flight-details">
        <p>
          <b>Flight:</b> {flightName}, <b>Price:</b> {price} <br />
          <b>Date:</b> {date}, <b>Class:</b> {flightClass}
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
          <h4>Contact Details:</h4>
          <label htmlFor="mainName">Name:</label>
          <input
            type="text"
            id="mainName"
            name="mainName"
            value={passengerDetails.main.name || ""}
            onChange={(e) => handleChangeMainPassenger("name", e.target.value)}
            required
          />

          <label htmlFor="mainPhoneNumber">Phone Number:</label>
          <input
            type="number"
            id="mainPhoneNumber"
            name="mainPhoneNumber"
            value={passengerDetails.main.phoneNumber || ""}
            onChange={(e) =>
              handleChangeMainPassenger("phoneNumber", e.target.value)
            }
            required
          />

          <label htmlFor="mainAge">Age:</label>
          <input
            type="number"
            id="mainAge"
            name="mainAge"
            value={passengerDetails.main.age || ""}
            onChange={(e) => handleChangeMainPassenger("age", e.target.value)}
            required
          />

          <label htmlFor="mainGender">Gender:</label>
          <select
            id="mainGender"
            name="mainGender"
            value={passengerDetails.main.gender || ""}
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
            value={passengerDetails.main.luggage || ""}
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

        {generatePassengerFields(
          adultCount,
          "Adult",
          handlePassengerDetailsChange
        )}
        {generatePassengerFields(
          childCount,
          "Child",
          handlePassengerDetailsChange
        )}

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
