import React, { useState } from "react";
import useForm from "./useForm"; 
import { useNavigate } from "react-router-dom"; 
import "./../globals.css"; 

const AuthForm = ({ setIsAuthenticated }) => {
  const [isLogin, setIsLogin] = useState(true);
  const { values, errors, handleChange, handleSubmit } = useForm({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); 

  const submitForm = () => {
    if (isLogin) {
      localStorage.setItem('authToken', 'your-auth-token');
      setIsAuthenticated(true);
      navigate("/");
    } else {
      if (values.password !== values.confirmPassword) {
        alert("Passwords do not match!");
      } else {
        localStorage.setItem('authToken', 'your-auth-token');
        setIsAuthenticated(true);
        navigate("/");
      }
    }
  };

  return (
      <div className="login-page">
          <div className="auth-container">
              <div className="form-header">
                  <button className={`toggle-btn ${isLogin ? "active" : ""}`} onClick={() => setIsLogin(true)}>Login</button>
                  <button className={`toggle-btn ${!isLogin ? "active" : ""}`} onClick={() => setIsLogin(false)}>Signup</button>
              </div>

              <form className="auth-form" onSubmit={handleSubmit(submitForm)}>
                  {!isLogin && (
                      <div className="input-container">
                          <input type="text" name="username" placeholder="Username" value={values.username} onChange={handleChange} required />
                          {errors.username && <span className="error-text">{errors.username}</span>}
                      </div>
                  )}

                  <div className="input-container">
                      <input type="email" name="email" placeholder="Email Address" value={values.email} onChange={handleChange} required />
                      {errors.email && <span className="error-text">{errors.email}</span>}
                  </div>

                  <div className="input-container">
                      <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleChange} required />
                      {errors.password && <span className="error-text">{errors.password}</span>}
                  </div>

                  {!isLogin && (
                      <div className="input-container">
                          <input type="password" name="confirmPassword" placeholder="Confirm password" value={values.confirmPassword} onChange={handleChange} required />
                      </div>
                  )}

                  {isLogin && (
                      <button type="button" className="forgot-password" onClick={() => alert("Forgot password functionality not implemented.")}>
                          Forgot password?
                      </button>
                  )}

                  <button type="submit" className="auth-btn">{isLogin ? "Login" : "Signup"}</button>

                  <div className="footer-text">
                      {isLogin ? (
                          <p>Not a member? 
                              <button type="button" onClick={() => setIsLogin(false)}>Signup now</button>
                          </p>
                      ) : ""}
                  </div>
              </form>
          </div>
      </div>
  );
};

export default AuthForm;