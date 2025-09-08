import React from "react";
import { Link } from "react-router-dom";
import "../styles/UnderDevelopment.css";
const UnderDevelopment = () => {
  return (
    <div className="underdev-page">
      <div className="underdev-card">
        <div className="underdev-emoji" role="img" aria-label="Under construction">
          🛠️
        </div>
        <h1 className="underdev-title">Our Website is Under Development</h1>
        <p className="underdev-message">
          Thank you for showing interest! We’re working hard to bring something
          exciting for you. Please check back soon.
        </p>
        <div className="underdev-actions">
          <Link to="/contact" className="btn primary">
            Contact Us
          </Link>
          <Link to="/" className="btn secondary">
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;