import React, { useState } from "react";
import "./home.css";
import { AiOutlineSwap } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

//importing images from assests
import mainimg from "../../assets/main-image.png";
import img1 from "../../assets/flight.png";
import img2 from "../../assets/star.png";
import img3 from "../../assets/cart.png";
import chennai from "../../assets/chennai.png";
import london from "../../assets/london img.png";
import mumbai from "../../assets/mumbai.jpeg";
import bangalore from "../../assets/bangalore.png";
import bangkok from "../../assets/bangkok.jpeg";
import kochi from "../../assets/kochi.jpeg";

function Home() {
  const now = new Date();
const max = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate()); // Adding 1 year to the current date

const navigate = useNavigate();

const [selectedDeparture, setSelectedDeparture] = useState("");
const [selectedArrival, setSelectedArrival] = useState("");

const handleBookNowClick = (departure, arrival) => {
  setSelectedDeparture(departure);
  setSelectedArrival(arrival);

  window.scrollTo({ top: 0, behavior: "smooth" });
};

const handleSearch = (event) => {
  event.preventDefault();

  const form = event.target;
  const departure = form.querySelector("#departureLocation").value;
  const arrival = form.querySelector("#arrivalLocation").value;
  const flightClass = form.querySelector("#flightClass").value;

  // Custom validation for departure and arrival
  if (departure === "" || arrival === "" || departure === arrival) {
    alert("Please select valid departure and arrival locations.");
    return;
  }

  // Custom validation for date
  const date = form.querySelector("#departure").value;
  if (new Date(date) < now || new Date(date) > max) {
    alert("Please select a valid date.");
    return;
  }

  // Custom validation for adults count
  const adultsCount = form.querySelector("#adultsCount").value;
  if (parseInt(adultsCount, 10) < 1) {
    alert("Please select at least one adult.");
    return;
  }

  const url = `/bookticket/${departure}/${arrival}/${flightClass}`;
  navigate(url);
  };

  return (
    <div className="home-container">
      {/* image container */}
      <div className="image-container">
        <img src={mainimg} alt="main" />
      </div>

      {/* form fields */}
      <form className="form-container" onSubmit={handleSearch}>
        <div className="form-fields d-flex align-items-center">
          <div className="d-flex align-items-center">
            <select
              className="form-select form-select-sm mx-2 custom-select-width"
              aria-label=".form-select-sm example"
              id="departureLocation"
              required
              value={selectedDeparture} // bind value to selectedDeparture
              onChange={(e) => setSelectedDeparture(e.target.value)}
            >
              <option value="" disabled selected>
                Departure
              </option>
              <option value="chennai">Chennai</option>
              <option value="coimbatore">Coimbatore</option>
              <option value="madurai">Madurai</option>
              {/* <option value="trichy">Trichy</option> */}
            </select>
          </div>
          <div className="d-flex align-items-center mx-1">
            <AiOutlineSwap className="text-center" />
          </div>
          <div className="d-flex align-items-center">
            <select
              className="form-select form-select-sm custom-select-width"
              aria-label=".form-select-sm example"
              id="arrivalLocation"
              required
              value={selectedArrival} // bind value to selectedArrival
              onChange={(e) => setSelectedArrival(e.target.value)}
            >
              <option value="" disabled selected>
                Arrival
              </option>
              <option value="coimbatore">Coimbatore</option>
              <option value="london">London</option>
              <option value="mumbai">Mumbai</option>
              <option value="bangalore">Bangalore</option>
              <option value="bangkok">Bangkok</option>
              <option value="kochi">Kochi</option>
            </select>
          </div>
          <input
            type="date"
            id="departure"
            placeholder="Departure"
            min={now.toISOString().split("T")[0]}
            max={max.toISOString().split("T")[0]}
            className="date custom-date-width form-control"
            required
          />
          {/* <div class="modal-dialog modal-xl">passeneger and Classes</div> */}

          <select
            className="form-select form-select-sm mx-2 custom-select-width"
            aria-label=".form-select-sm example"
            id="adultsCount"
            required
          >
            <option value="" disabled selected>
              Adults (count)
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>

          <select
            className="form-select form-select-sm mx-2 custom-select-width"
            aria-label=".form-select-sm example"
            required
          >
            <option value="" disabled selected>
              Child (under 18)
            </option>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <select
            className="form-select form-select-sm mx-2 custom-select-width"
            aria-label=".form-select-sm example"
            required
            id="flightClass"
          >
            <option value="Economy">Economy</option>
            <option value="Business">Business</option>

          </select>

          <button type="submit" className="search btn btn-primary">
            Search
          </button>
        </div>
      </form>

      {/* 3 image container */}
      <div className="three-image-container">
        <div>
          <span>
            <img src={img1} alt="1" />
            <div>
              <br />
              <h4>One search, all the flights</h4>
              <p className="desc">
                Kiwi-Code finds cheap flights other sites can't see.
              </p>
            </div>
          </span>
          <span>
            <img src={img2} alt="2" />
            <div>
              <h4>Travel more, spend less</h4>
              <p className="desc">
                Look for the travel hack star icon for unique travel
                itineraries.
              </p>
            </div>
          </span>
          <span>
            <img src={img3} alt="3" />
            <div>
              <h4>Trusted by millions</h4>
              <p className="desc">
                Join over 10 million yearly travelers booking with ease.
              </p>
            </div>
          </span>
        </div>
      </div>

      {/* header for pre flight book cards */}
      <br />
      <br />
      <div className="header-for-chennai text-center text-muted">
        <h2>Departure From Chennai</h2>
      </div>

      {/* image with paragraph container */}
      <div className="container">
        <div className="row img-desc-container">
          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={chennai}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }} // Adjust the height as needed
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> Coimbatore
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "coimbatore");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={london}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> London
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "london");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mt-4">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={mumbai}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> Mumbai
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "mumbai");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mt-4 ">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={bangalore}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> Bangalore
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "bangalore");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mt-4 ">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={bangkok}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> Bangkok
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "bangkok");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-sm-6 mt-4 ">
            <div className="card mx-2">
              <img
                className="card-img-top"
                src={kochi}
                alt="Card cap"
                style={{ width: "100%", height: "200px" }}
              />
              <div className="card-body">
                <hr />
                <p className="card-text text-center">
                  Chennai <AiOutlineSwap /> Kochi
                </p>
                <button
                  onClick={() => {
                    handleBookNowClick("chennai", "kochi");
                  }}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <br />

      <div className="container">
        <div className="faq">
          <h2> Frequently Asked Questions:</h2>
        </div>
        <br />
        <div className="row">
          <div className="card bg-light mb-3 col-lg-4 mx-2">
            <h5 className="card-header">
              Do flights get cheaper closer to departure?
            </h5>
            <div className="card-body">
              <p className="card-text">
                Generally, flight prices are more likely to increase the closer
                you get to your flight date.
              </p>
            </div>
          </div>

          <div className="card bg-light mb-3 col-lg-4 mx-2">
            <h5 className="card-header">
              Does kiwi.com charge credit card fees?
            </h5>
            <div className="card-body">
              <p className="card-text">
                No, we don't charge any credit card fees. You can always see
                exactly what you’re paying for in the price breakdown when you
                review your booking.
              </p>
            </div>
          </div>

          <div className="card bg-light mb-3 col-lg-4 mx-2">
            <h5 className="card-header">
              Can I transfer my ticket to someone else?
            </h5>
            <div className="card-body">
              <p className="card-text">
                Ticket transfers are subject to airline policies and may involve
                additional fees. Contact our customer support for assistance.
              </p>
            </div>
          </div>

          <div className="card bg-light mb-3 col-lg-4 mx-2">
            <h5 className="card-header">
              What should I do if I encounter issues during the booking process?
            </h5>
            <div className="card-body">
              <p className="card-text">
                If you encounter any issues, please contact our customer support
                team for immediate assistance.
              </p>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}

export default Home;
