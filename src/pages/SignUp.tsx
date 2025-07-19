// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "/src/styles/SignUp.css";

// const countryOptions = [
//   { name: "India", code: "+91", flag: "🇮🇳" },
// ];

// const SignUp: React.FC = () => {
//   const [selectedCountry] = useState(countryOptions[0]);
//   const [mobile, setMobile] = useState("");
//   const navigate = useNavigate();

//   const handleSendCode = () => {
//     alert(`Code will be sent to ${selectedCountry.code} ${mobile}`);
//   };

//   return (
//     <div className="signup-container">
//       <button className="back-btn" onClick={() => navigate(-1)}>&lt;</button>

//       <h1 className="signup-title">Can you input your number?</h1>
//       <p className="signup-subtitle">
//         You will be sent a code on this number to verify if you are the owner of the number.
//       </p>

//       <div className="input-row">
//         <div className="code-box">
//           <img src="/images/INDIA.png" alt="IN" />
//           <span>{selectedCountry.code}</span>
//         </div>
//         <input
//           type="tel"
//           placeholder="12345 67890"
//           value={mobile}
//           onChange={(e) => setMobile(e.target.value)}
//           className="mobile-input"
//         />
//       </div>

//       <div className="background-icon" />

//       <button className="send-code-btn" onClick={handleSendCode}>Send Code</button>

//       <p className="bottom-text">
//         Already have an account?{" "}
//         <a href="/login" className="login-link">Log in</a>
//       </p>
//     </div>
//   );
// };

// export default SignUp;


import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "/src/styles/SignUp.css";

const countryOptions = [
  { name: "India", code: "+91", flag: "🇮🇳" },
];

const SignUp: React.FC = () => {
  const [selectedCountry] = useState(countryOptions[0]);
  const [mobile, setMobile] = useState("");
  const navigate = useNavigate();

  const handleSendCode = () => {
    const confirmed = window.confirm(
      `Code will be sent to ${selectedCountry.code} ${mobile}\n\nDo you want to continue?`
    );
    if (confirmed) {
      // Pass mobile number to OTP screen (optional)
      navigate("/signup-otp", { state: { mobile: `${selectedCountry.code} ${mobile}` } });
    }
  };

  return (
    <div className="signup-container">
      <button className="back-btn" onClick={() => navigate(-1)}>&lt;</button>

      <h1 className="signup-title">Can you input your number?</h1>
      <p className="signup-subtitle">
        You will be sent a code on this number to verify if you are the owner of the number.
      </p>

      <div className="input-row">
        <div className="code-box">
          <img src="/images/INDIA.png" alt="IN" />
          <span>{selectedCountry.code}</span>
        </div>
        <input
          type="tel"
          placeholder="12345 67890"
          value={mobile}
          onChange={(e) => setMobile(e.target.value)}
          className="mobile-input"
        />
      </div>

      <div className="background-icon" />

      <button className="send-code-btn" onClick={handleSendCode}>Send Code</button>

      <p className="bottom-text">
        Already have an account?{" "}
        <a href="/login" className="login-link">Log in</a>
      </p>
    </div>
  );
};

export default SignUp;
