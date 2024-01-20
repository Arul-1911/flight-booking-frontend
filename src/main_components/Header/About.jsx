import React from 'react';
import Header from './Header';

function About() {
  return (
    <div style={containerStyle}>
      <Header />
      <div style={aboutContainerStyle}>
        <h2>About Us</h2>
        <p>
          Welcome to Kiwi Flight Booking – your go-to platform for hassle-free
          and affordable flight reservations. We understand the importance of
          seamless travel experiences, and that's why we're dedicated to
          providing you with a user-friendly interface, competitive prices, and
          excellent customer service.
        </p>
        <br/>

        <h3>Our Mission</h3>
        <p>
          At Kiwi Flight Booking, our mission is to empower travelers by
          simplifying the flight booking process. We aim to make travel
          accessible to everyone, offering a wide range of options and ensuring
          a smooth journey from start to finish.
        </p>
        <br/>

        <h3>Why Choose Kiwi Flight Booking</h3>
        <br/>
        <ul>
          <li>
            <strong>Best Prices:</strong> We work tirelessly to secure the best
            prices for your flights, ensuring that you get value for your money.
          </li>
          <li>
            <strong>User-Friendly Platform:</strong> Our website is designed to
            be intuitive and easy to navigate, making the booking process a
            breeze.
          </li>
          <li>
            <strong>Customer Service Excellence:</strong> Our dedicated support
            team is ready to assist you with any queries or concerns, providing
            prompt and friendly service.
          </li>
        </ul>
        <br/>

        <h3>Our Partners</h3>
        <p>
          Kiwi Flight Booking collaborates with reputable airlines and travel
          partners to bring you an extensive range of options. We believe in
          transparency and strive to provide accurate and up-to-date information
          on all available flights.
        </p>
        <br/>

        <h3>Your Journey, Our Priority</h3>
        <p>
          Whether you're a seasoned traveler or embarking on your first
          adventure, Kiwi Flight Booking is committed to making your journey
          memorable. Thank you for choosing us as your travel companion.
        </p>

        <p>Safe travels! The Kiwi Flight Booking Team</p>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '800px',
  margin: '0 auto',
  padding: '20px',
};

const aboutContainerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
};

export default About;
