import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/AuthForm.css";

const AuthForm: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="auth-wrapper">
      {/* Faded background logo */}
      <div className="background-icon" />
      <button className="back-btn" onClick={() => navigate(-1)}>&lt;</button>
      <div className="auth-card">
        <h2 className="welcome-text">Welcome to</h2>
        <h1 className="logo-textt">trygve</h1>
        <p className="subtitle">
          "Your trusted partner for personalized healthcare, right at your doorstep."
        </p>
        <button className="btn primary" onClick={() => navigate("/signup")}>
          Sign up
        </button>
        <button className="btn secondary" onClick={() => navigate("/login")}>
          Log in
        </button>
      </div>
    </div>
  );
};

export default AuthForm;
