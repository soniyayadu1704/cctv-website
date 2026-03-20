import React from "react";
import { Link } from "react-router-dom";
import BackButton from "../components/Backbutton";

import "./footer.css";

function Footer() {
  return (
    <footer className="footer">
         <BackButton />

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Login</Link>
      </div>
      <p>© 2026 CCTVPro. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;