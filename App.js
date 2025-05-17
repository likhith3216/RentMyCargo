import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Bikes from './components/Bikes';
import Cars from './components/Cars';
import Cargo from './components/Cargo';
import About from './components/About';
import Footer from './components/Footer';
import AuthForm from './components/AuthForm';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      {!isAuthenticated && <AuthForm setIsAuthenticated={setIsAuthenticated} />}
      {isAuthenticated && (
        <>
          <Navbar setIsAuthenticated={setIsAuthenticated} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bikes" element={<Bikes />} />
            <Route path="/cars" element={<Cars />} />
            <Route path="/cargo" element={<Cargo />} />
            <Route path="/about" element={<About />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </>
      )}
    </Router>
  );
}

export default App;