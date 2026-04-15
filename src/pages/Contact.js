import React from "react";
import "./contact.css";

function Contact() {
  const phoneNumber = "+917017733646";
  const email = "support@cctvpro.com";

  const whatsappNumber = "917017733646";
  const message = "Hi, I want to know more about your CCTV services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailtoLink = `mailto:${email}?subject=CCTV Inquiry&body=${encodeURIComponent(message)}`;

  return (
    <div className="contact-page">

      <h1 className="title">🔒 CCTV CONTROL ROOM</h1>
      <p className="subtitle">Secure Communication Channel</p>

      <div className="contact-container">

        {/* WhatsApp */}
        <div className="contact-card">
          <span className="icon">📹</span>
          <h3>WhatsApp Support</h3>
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className="contact-btn whatsapp">
            Chat on WhatsApp
          </a>
        </div>

        {/* Email */}
        <div className="contact-card">
          <span className="icon">📡</span>
          <h3>Email Support</h3>
          <a href={mailtoLink} className="contact-btn email">
            Send Email
          </a>
        </div>

        {/* Phone */}
        <div className="contact-card">
          <span className="icon">🔔</span>
          <h3>Call Assistance</h3>
          <a href={`tel:${phoneNumber}`} className="contact-btn call">
            Call Now
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;