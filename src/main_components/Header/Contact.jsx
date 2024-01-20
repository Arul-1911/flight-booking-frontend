import React from 'react';
import Header from './Header';

function Contact() {
  return (
    <div style={containerStyle}>
      <Header />
      <div style={contactContainerStyle}>
        <h2>Contact Us</h2>
        <p>
          Thank you for choosing Kiwi Flight Booking for your travel needs. If
          you have any questions, concerns, or feedback, we're here to assist
          you. Please feel free to reach out to us through the following
          channels:
        </p>

        <div style={contactInfoStyle}>
          <strong>Customer Support:</strong>
          <br />
          Email: <a href="mailto:support@kiwiflights.com">support@kiwiflights.com</a>
          <br />
          Phone: +1 (555) 123-4567
        </div>

        <div style={contactInfoStyle}>
          <strong>Business Inquiries:</strong>
          <br />
          Email: <a href="mailto:business@kiwiflights.com">business@kiwiflights.com</a>
        </div>

        <div style={contactInfoStyle}>
          <strong>Address:</strong>
          <br />
          Kiwi Flight Booking
          <br />
          123 Traveler's Lane
          <br />
          Coimbatore, TN-641 660
          <br />
          India
        </div>

        <div style={contactInfoStyle}>
          <strong>Social Media:</strong>
          <br />
          <a href="https://www.facebook.com/kiwiflights" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Facebook</a>
          <br />
          <a href="https://twitter.com/kiwiflights" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Twitter</a>
          <br />
          <a href="https://www.instagram.com/kiwiflights" style={socialLinkStyle} target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>

        <p>We strive to respond to all inquiries within 24 hours.</p>
      </div>
    </div>
  );
}

const containerStyle = {
  maxWidth: '1000px',
  margin: '0 auto',
  padding: '20px',
};

const contactContainerStyle = {
  backgroundColor: '#f4f4f4',
  padding: '20px',
  borderRadius: '8px',
};

const contactInfoStyle = {
  margin: '15px 0',
};

const socialLinkStyle = {
  textDecoration: 'none',
  color: '#007bff',
};

export default Contact;
