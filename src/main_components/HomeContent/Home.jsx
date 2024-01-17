import React from "react";
import './home.css';

//importing images from assests
import mainimg from "../../assets/main-image.png";
import img1 from "../../assets/flight.png";
import img2 from "../../assets/star.png";
import img3 from "../../assets/cart.png";

function Home() {
  return (
    <div classNameName="home-container">
      {/* image container */}
      <div classNameName="image-container">
        <img src={mainimg} alt="main" />
      </div>

      {/* form fields */}
      <form classNameName="form-container">
        <div classNameName="form-fields">
          <span>
            <input type="text" id="from" placeholder="Departure" />
          </span>
          <span>
            <input type="text" id="to" placeholder="Arrival" />
          </span>

          <input type="date" id="departure" placeholder="Departure" />
          <input type="date" id="return" placeholder="Return" />
          <button type="submit" classNameName="search">
            Search
          </button>
        </div>
      </form>

      {/* 3 image container */}
      <div classNameName="three-image-container">
        <div>
          <span>
            <img src={img1} alt="1" />
            <p>
              <h4>One search, all the flights</h4>
              <p classNameName="desc">
                Kiwi-Code finds cheap flights other sites can't see.
              </p>
            </p>
          </span>
          <span>
            <img src={img2} alt="2" />
            <p>
              <h4>Travel more, spend less</h4>
              <p classNameName="desc">
                Look for the travel hack star icon for unique travel
                itineraries.
              </p>
            </p>
          </span>
          <span>
            <img src={img3} alt="3" />
            <p>
              <h4>Trusted by millions</h4>
              <p classNameName="desc">
                Join over 10 million yearly travelers booking with ease.
              </p>
            </p>
          </span>
        </div>
      </div>

      {/* image with paragraph container */}
      {/* <div classNameName="img-desc-container">

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

        <div className="card" style={{width: "8rem;"}}>
          <img className="card-img-top" src="..." alt="Card image cap" />
          <div className="card-body">
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
          </div>
        </div>

      </div> */}
    </div>
  );
}

export default Home;
