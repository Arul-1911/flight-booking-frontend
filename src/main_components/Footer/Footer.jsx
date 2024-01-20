import React from 'react'
import './footer.css'

function Footer() {
  return (
    <>
<div className="footer">
  <div className="footer-content">
    <div className="footer-section">
      <h4>Explore</h4>
      <ul>
        <li><a href="/home">Flights</a></li>
        <li><a href="/home">Destinations</a></li>
        <li><a href="/home">Deals</a></li>
        <li><a href="/home">Travel Guide</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Learn More</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/home">FAQs</a></li>
        <li><a href="/home">Terms of Service</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Connect</h4>
      <ul>
        <li><a href="/home">Facebook</a></li>
        <li><a href="/home">Twitter</a></li>
        <li><a href="/home">Instagram</a></li>
        <li><a href="/home">LinkedIn</a></li>
      </ul>
    </div>
  </div>
  <div className="footer-bottom">
    <p>Cheap flight booking from Here, to Everywhere</p>
    <p>&copy; 2024 Kiwi.com All rights reserved.</p>
  </div>
</div>

    </>
  )
}

export default Footer