import React, { useState } from "react";
import "/src/styles/Onboarding.css";
import "/src/styles/Onboarding.css";

const slides = [
  {
    title: "trygve",
    subtitle: "Trusted Guardian of Life",
    image: "/images/WebImage1.png",
    showOnlyLogo: true,
  },
  {
    title: "Your Health, Our Priority",
    subtitle: "Trusted doctors and care at your doorstep",
    image: "/images/WebImage2.png",
  },
  {
    title: "Seamless Care, Delivered",
    subtitle: "Consult, treat, and heal — hassle-free",
    image: "/images/WebImage3.png",
  },
  {
    title: "Affordable Healthcare For Everyone",
    subtitle: "Quality care for every budget",
    image: "/images/WebImage4.png",
    isLast: true,
  },
];

const Onboarding: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    if (currentIndex < slides.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const skip = () => {
    setCurrentIndex(slides.length - 1);
  };

  return (
    <div
      className="onboarding-container"
      style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
    >
      <div className="onboarding-overlay">
        <div className="onboarding-content">
          {slides[currentIndex].showOnlyLogo ? (
            <>
              <h1 className="logo-text">trygve</h1>
              <p className="subtitle">Trusted Guardian of Life</p>
            </>
          ) : (
            <>
              <h1>{slides[currentIndex].title}</h1>
              <p>{slides[currentIndex].subtitle}</p>
            </>
          )}

          {/* Show dots except on logo-only slide */}
          {!slides[currentIndex].showOnlyLogo && (
            <div className="dots">
              {slides.map((_, index) => (
                <span
                  key={index}
                  className={`dot ${currentIndex === index ? "active" : ""}`}
                />
              ))}
            </div>
          )}

          {/* Show Get Started button below content if last slide */}
          {slides[currentIndex].isLast && (
            <button className="get-started-btn">Get Started</button>
          )}
        </div>

        {/* Navigation Buttons */}
        {!slides[currentIndex].isLast && (
          <div className="nav-button-wrapper">
            <div className="nav-btn-left">
              {currentIndex > 0 && (
                <button className="get-started-btn" onClick={prevSlide}>
                  ← Previous
                </button>
              )}
            </div>
            <div className="nav-btn-center">
              {currentIndex > 0 && (
                <button className="get-started-btn" onClick={skip}>
                  Skip
                </button>
              )}
            </div>
            <div className="nav-btn-right">
              <button className="get-started-btn next-btn" onClick={nextSlide}>
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Onboarding;