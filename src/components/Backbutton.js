// components/BackButton.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./backbutton.css";

function Backbutton() {
  const navigate = useNavigate();

  return (
    <div className="back-btn-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        <span className="arrow">←</span> Back
      </button>
    </div>
  );
}

export default Backbutton;