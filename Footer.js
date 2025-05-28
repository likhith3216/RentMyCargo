import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-media">
        <h3>Follow Us on Social Media</h3>
        <div className="social-icons">
          <img 
            src={`${process.env.PUBLIC_URL}/facebook.jpg`} 
            alt="Facebook" 
            onClick={() => window.open('https://facebook.com', '_blank')} 
            className="social-icon" 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/x.png`} 
            alt="Twitter" 
            onClick={() => window.open('https://twitter.com', '_blank')} 
            className="social-icon" 
          />
          <img 
            src={`${process.env.PUBLIC_URL}/instagram.jpeg`} 
            alt="Instagram" 
            onClick={() => window.open('https://instagram.com', '_blank')} 
            className="social-icon" 
          />
        </div>
      </div>
      <div className="footer-text">
        @RentMyCargo, All rights reserved.
      </div>
      <nav className="footer-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/bikes">Bikes</Link></li>
          <li><Link to="/cars">Cars</Link></li>
          <li><Link to="/cargo">Cargo</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;