import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate(-1)}>&lt;</button>
      <img src="/images/LOGIN-IMAGE.png" alt="Top" className="top-image" />

      {/* Text Section */}
      <div className="text-section">
        <h1 className="otp-title">OTP Verification</h1>
        <p className="otp-subtitle">
          Enter email and phone number to send one time Password
        </p>

        {/* Email Input */}
        <label className="input-label">Email Id</label>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="email"
            placeholder="dscode@gmail.com"
            required
          />
          <span className="icon">&#128231;</span>
        </div>

        {/* Phone Input */}
        <label className="input-label">Phone Number</label>
        <div className="input-wrapper">
          <input
            className="input-field"
            type="tel"
            placeholder="+91 79041 62755"
            required
          />
          <span className="icon">&#128222;</span>
        </div>

        {/* Continue Button */}
        <button className="continue-btn">Continue</button>
      </div>

      <div className="background-symbol" />
    </div>
  );
};

export default Login;
