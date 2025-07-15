import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import OnboardingPage from "./components/Onboarding";
import AuthPage from "./components/AuthPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/home" element={<AuthPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
