import React from "react";
import "./about.css";

function About() {
  return (
    <div className="about">

      {/* Hero Section */}
      <section className="about-hero">
        <h1>About Our CCTV Solutions</h1>
        <p>We provide advanced security systems to protect your home and business.</p>
      </section>

      {/* Company Info */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          We are a trusted CCTV provider offering high-quality surveillance 
          systems with modern technology like 360° cameras, night vision, 
          and remote monitoring.
        </p>
      </section>

      {/* Mission */}
      <section className="about-section">
        <h2>Our Mission</h2>
        <p>
          Our mission is to make security simple, affordable, and accessible 
          for everyone.
        </p>
      </section>

      {/* Features */}
      <section className="about-features">
        <div className="feature-card">
          <h3>📷 HD Cameras</h3>
          <p>Crystal clear video quality</p>
        </div>

        <div className="feature-card">
          <h3>🌙 Night Vision</h3>
          <p>24/7 monitoring even in darkness</p>
        </div>

        <div className="feature-card">
          <h3>🔄 360° View</h3>
          <p>Full area coverage</p>
        </div>

        <div className="feature-card">
          <h3>📱 Mobile Access</h3>
          <p>Monitor from anywhere</p>
        </div>
      </section>

    </div>
  );
}

export default About;