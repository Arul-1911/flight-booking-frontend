import React from "react";
import "./home.css";

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
  return (
    <div className="home-container">
      {/* image container */}
      <div className="image-container">
        <img src={mainimg} alt="main" />
      </div>

      {/* form fields */}
      <form className="form-container">
        <div className="form-fields">
          <span>
            <input type="text" id="from" placeholder="Departure" />
          </span>
          <span>
            <input type="text" id="to" placeholder="Arrival" />
          </span>

          <input type="date" id="departure" placeholder="Departure" />
          {/* <input type="date" id="return" placeholder="Return" /> */}
          <button type="submit" className="search">
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
              <br/>
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
                <p className="card-text">Chennai To Coimbatore</p>
                <button>Book Now</button>
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
                <p className="card-text">Chennai To London</p>
                <button>Book Now</button>
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
                <p className="card-text">Chennai To Mumbai</p>
                <button>Book Now</button>
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
                <p className="card-text">Chennai To Bangalore</p>
                <button>Book Now</button>
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
                <p className="card-text">Chennai To Bangkok</p>
                <button>Book Now</button>
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
                <p className="card-text">Chennai To Kochi</p>
                <button>Book Now</button>
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
