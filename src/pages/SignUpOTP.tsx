// import React, {useState} from "react";
// import {useNavigate} from "react-router-dom";
// import "/src/styles/SignUpOTP.css"; 

// const SignUpOTP: React.FC = () => {
//     const navigate = useNavigate();

//     const resendCode = () => {
//         alert('Are you sure to resend the code')
//     }
//     return (
//         <div className="otp">
//             <button className="back-button" onClick={() => navigate(-1)}> 
//                 &lt;
//             </button>

//             {/* text */}
//             <div className="text-sections" >
//                 <h1 className="text-head">
//                     OTP Verfication
//                 </h1>
//                 <p className="text-des"> 
//                     Enter the verification code we just sent to your number +91  7*******55
//                 </p>
//             </div>
//             {/* otp */}
//             <div className="otp-inputs">
//                 <input type="text" maxLength={1} className="otp-input" />
//                 <input type="text" maxLength={1} className="otp-input" />
//                 <input type="text" maxLength={1} className="otp-input" />
//                 <input type="text" maxLength={1} className="otp-input" />
//                 <input type="text" maxLength={1} className="otp-input" />
//                 <input type="text" maxLength={1} className="otp-input" />
//             </div>
//             <div className="input-below-text" onClick={resendCode}>
//                 Didn't receive code? {" "}
//                 <a className="resend-link">Resend</a>
//             </div>
//             <div className="contin-ue">
//             <button className="continue-butn">
//                 Continue
//             </button>
//             </div>
//             <div className="background-symbol"></div>
//         </div>
//     );
// }


import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "/src/styles/SignUpOTP.css"; 

const SignUpOTP: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const mobile = location.state?.mobile || "+91 7*******55";

  const resendCode = () => {
    alert("Are you sure you want to resend the code?");
  };

  return (
    <div className="otp">
      <button className="back-button" onClick={() => navigate(-1)}> 
        &lt;
      </button>

      {/* Text */}
      <div className="text-sections">
        <h1 className="text-head">OTP Verification</h1>
        <p className="text-des">
          Enter the verification code we just sent to your number {mobile}
        </p>
      </div>

      {/* OTP Inputs */}
      <div className="otp-inputs">
        {[...Array(6)].map((_, i) => (
          <input key={i} type="text" maxLength={1} className="otp-input" />
        ))}
      </div>

      <div className="input-below-text" onClick={resendCode}>
        Didn't receive code?{" "}
        <a className="resend-link">Resend</a>
      </div>

      {/* <div className="contin-ue"> */}
        <button className="continue-butn">Continue</button>
      {/* </div> */}

      <div className="background-symbol"></div>
    </div>
  );
};

export default SignUpOTP;
