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
        <li><a href="/">Flights</a></li>
        <li><a href="/">Destinations</a></li>
        <li><a href="/">Deals</a></li>
        <li><a href="/ ">Travel Guide</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Learn More</h4>
      <ul>
        <li><a href="/">About Us</a></li>
        <li><a href="/">Contact Us</a></li>
        <li><a href="/">FAQs</a></li>
        <li><a href="/">Terms of Service</a></li>
      </ul>
    </div>
    <div className="footer-section">
      <h4>Connect</h4>
      <ul>
        <li><a href="/">Facebook</a></li>
        <li><a href="/">Twitter</a></li>
        <li><a href="/">Instagram</a></li>
        <li><a href="/">LinkedIn</a></li>
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