// AuthPage.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Auth.css";
import AuthForm from "./AuthForm";

const AuthPage: React.FC = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(isSignup ? "Signup" : "Login", formData);
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? "Sign Up" : "Log In"}</h2>
        <form onSubmit={handleSubmit}>
          <AuthForm
            isSignup={isSignup}
            formData={formData}
            handleChange={handleChange}
          />
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
        </form>
        <p>
          {isSignup ? "Already have an account?" : "Don't have an account?"} {" "}
          <span
            className="auth-toggle"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Log In" : "Sign Up"}
          </span>
        </p>
      </div>
    </div>
  );
};

export default AuthPage;
