import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingPage from "./components/Onboarding";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
