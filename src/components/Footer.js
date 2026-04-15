import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaPhoneAlt, FaEnvelope, FaCamera } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO / ABOUT */}
        <div className="footer-section">
          <h2 className="footer-logo">
            <FaCamera className="footer-logo-icon" />
            CCTV<span className="highlight">Pro</span>
          </h2>
          <p>
            Providing high-quality CCTV cameras for home & business security.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        {/* CONTACT (FIXED STRUCTURE) */}
        <div className="footer-section">
          <h3>Contact</h3>

          <a href="tel:+917017733646" className="contact-link">
            <FaPhoneAlt /> +91 7017733646
          </a>

          <a
            href={`mailto:support@cctv.com?subject=CCTV Inquiry&body=${encodeURIComponent(
              "Hello, I want to know more about your services."
            )}`}
            className="contact-link"
          >
            <FaEnvelope /> support@cctv.com
          </a>
        </div>

        {/* SOCIAL */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>© 2026 CCTVPro. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;