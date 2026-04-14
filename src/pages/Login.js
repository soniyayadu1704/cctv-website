import React, { useState } from "react";
import "./cool.css";
import login from "../image/login.png";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

function Login() {
  const [role, setRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  
  if (!role) {
    return (
      <div className="bg" style={{ backgroundImage: `url(${login})` }}>
        <div className="lens-form">
        

          <button onClick={() => setRole("user")}>
            User Login
          </button>

          <button onClick={() => setRole("admin")}>
            Admin Login
          </button>
        </div>
      </div>
    );
  }

  
  if (role === "user") {
    return (
      <div className="bg" style={{ backgroundImage: `url(${login})` }}>
        <div className="lens-form">
          <h3> SECURE ACCESS PORTAL -USER LOGIN</h3>

          <div className="input-box">
            <FaUser className="icon left" />
            <input type="text" placeholder="Username" />
          </div>

          <div className="input-box">
            <FaLock className="icon left" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
            />
            <span
              className="icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Link to="/" className="login-btn">
            Login
          </Link>

          <div className="links">
            <span>Forgot Password?</span>
            <span>Register New User</span>
          </div>
        </div>
      </div>
    );
  }


  if (role === "admin") {
    return (
      <div className="bg" style={{ backgroundImage: `url(${login})` }}>
        <div className="lens-form">
          <h3>ADMIN LOGIN</h3>

          <div className="input-box">
            <FaUser className="icon left" />
            <input type="text" placeholder="Admin ID" />
          </div>

          <div className="input-box">
            <FaLock className="icon left" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Admin Password"
            />
            <span
              className="icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Link to="/dashboard" className="login-btn">
            Login as Admin
          </Link>

          <div className="links">
            <span>Admin Help</span>
            <span onClick={() => setRole(null)}>← Back</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;