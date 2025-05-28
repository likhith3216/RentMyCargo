import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setIsAuthenticated }) => {
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <Link to="/" className="logo-link">
          <img src={`${process.env.PUBLIC_URL}/logo.jpg`} alt="Logo" className="logo"></img>
          <span className="logo-text">Rent My Cargo</span>
        </Link>
      </div>
      <div className="navbar-links">
        <Link to="/about">About</Link>
        <button onClick={handleLogout} className="logout-button">Logout</button>
      </div>
    </nav>
  );
};

export default Navbar;