import React from 'react';
import '../globals.css';

const About = () => {
  return (
    <div className="about-container">
      <div className="text-section">
        <h1>About Rent My Cargo</h1>
        <p>
          Welcome to Rent My Cargo, your number one source for all things cargo rental.
          We're dedicated to giving you the very best of cargo solutions, with a focus on dependability,
          customer service, and uniqueness.
        </p>
        <p>
          Founded in 2024 by Prudvi Gadeshula, Rent My Cargo has come a long way from its beginnings in LPU.
          When Prudvi first started out, their passion for providing efficient and eco-friendly cargo rental 
          solutions drove them to do tons of research and gave them the impetus to turn hard work and 
          inspiration into a booming online store. We now serve customers all over India and are thrilled to 
          be a part of the quirky, eco-friendly, fair trade wing of the cargo rental industry.
        </p>
        <h2>Our Mission</h2>
        <p>
          <h4>Bike Rentals</h4>
          <h4>Car Rentals</h4>
          <h4>Truck Rentals</h4>
        </p>
        <p>
        At Rent My Cargo, we strive to provide comprehensive solutions tailored to your transportation needs.
          Whether you’re looking for eco-friendly bike rentals, flexible car options, or reliable truck rentals,
          we have something for everyone. Explore our offerings today and experience the convenience and affordability 
          that Rent My Cargo brings to the cargo rental industry!
        </p>
        <h2>Contact Us</h2>
        <p>If you have any questions or comments, please don't hesitate to contact us at:</p>
        <p>Email: gadeshulaprudhvi2004@gmail.com</p>
      </div>
      <div className="image-section">
        <img src={`${process.env.PUBLIC_URL}/aboutbike.jpg`} alt="About Rent My Cargo" />
      </div>
    </div>
  );
};

export default About;