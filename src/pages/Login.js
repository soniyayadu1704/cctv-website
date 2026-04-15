import React, { useState } from "react";
import "./cool.css";
import login from "../image/login.png";
import admin from "../image/admin.png";
import { FaUser, FaLock, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [role, setRole] = useState(null);
  const [showPassword, setShowPassword] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  // 🔐 LOGIN LOGIC
  const handleLogin = (e, path) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("user"));

    // ❌ No user found
    if (!storedUser) {
      alert("⚠️ You are not registered. Please sign up first.");
      return;
    }

    // ❌ Wrong credentials
    if (
      storedUser.firstName !== username ||
      storedUser.password !== password
    ) {
      alert("❌ Invalid credentials");
      return;
    }

    // ✅ Success
    alert("✅ Login successful!");
    navigate(path);
  };

  // ROLE SELECT
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

  // USER LOGIN
  if (role === "user") {
    return (
      <div className="bg" style={{ backgroundImage: `url(${login})` }}>
        <div className="lens-form">
          <h3> SECURE ACCESS PORTAL -USER LOGIN</h3>

          <div className="input-box">
            <FaUser className="icon left" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaLock className="icon left" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          {/* 🔥 LOGIN BUTTON */}
          <Link
            to="/"
            className="login-btn"
            onClick={(e) => handleLogin(e, "/")}
          >
            Login
          </Link>

          <div className="links">
            <div className="top-links">
              <Link to="/forgot-password">Forgot Password?</Link>
              <Link to="/signup">Register New User</Link>
            </div>

            <span className="back-link" onClick={() => setRole(null)}>
               Back
            </span>
          </div>
        </div>
      </div>
    );
  }

  // ADMIN LOGIN
  if (role === "admin") {
    return (
      <div className="bg" style={{ backgroundImage: `url(${admin})` }}>
        <div className="admin-card">
          <h2>CCTV SYSTEM</h2>
          <h3>ACCESS PORTAL</h3>

          <div className="input-box">
            <FaUser className="icon left" />
            <input
              type="text"
              placeholder="Admin ID"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className="input-box">
            <FaLock className="icon left" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <span
              className="icon right"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <Link
            to="/dashboard"
            className="login-btn"
            onClick={(e) => handleLogin(e, "/dashboard")}
          >
            Login
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