import React, { useState } from "react";
import "./login.css";
import bgimage from "../image/bgimage.jpeg";
import {
  FaUser,
  FaLock,
  FaPhone,
  FaEnvelope,
  FaEye,
  FaEyeSlash
} from "react-icons/fa";
import { Link } from "react-router-dom";

function Signup() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: ""
  });

  const [errors, setErrors] = useState({});
  const [showGreeting, setShowGreeting] = useState(false);

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  // Handle input
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Match check
  const isMatch =
    form.confirmPassword &&
    form.password === form.confirmPassword;

  // Validation
  const validate = () => {
    let newErrors = {};

    if (!form.firstName) newErrors.firstName = "First name required";
    if (!form.lastName) newErrors.lastName = "Last name required";

    if (!form.email) {
      newErrors.email = "Email required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (!form.phone) {
      newErrors.phone = "Phone required";
    } else if (!/^[0-9]{10}$/.test(form.phone)) {
      newErrors.phone = "Enter 10 digit number";
    }

    if (!form.password) {
      newErrors.password = "Password required";
    } else if (form.password.length < 6) {
      newErrors.password = "Min 6 characters";
    }

    if (form.confirmPassword !== form.password) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit with smart greeting
  const handleSubmit = () => {
    if (validate()) {
      setShowGreeting(true);

      // Auto hide after 3 sec
      setTimeout(() => {
        setShowGreeting(false);
      }, 3000);
    }
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${bgimage})` }}>

      {/* 🔥 SMART GREETING */}
      {showGreeting && form.firstName && (
        <div className="greeting">
          Welcome {form.firstName}
        </div>
      )}

      <div className="lens-form">
        <h3>CREATE ACCOUNT</h3>

        {/* First Name */}
        <div className="input-box">
          <FaUser className="icon left" />
          <input name="firstName" placeholder="First Name" onChange={handleChange} />
          <small>{errors.firstName}</small>
        </div>

        {/* Last Name */}
        <div className="input-box">
          <FaUser className="icon left" />
          <input name="lastName" placeholder="Last Name" onChange={handleChange} />
          <small>{errors.lastName}</small>
        </div>

        {/* Email */}
        <div className="input-box">
          <FaEnvelope className="icon left" />
          <input name="email" placeholder="Email Address" onChange={handleChange} />
          <small>{errors.email}</small>
        </div>

        {/* Phone */}
        <div className="input-box">
          <FaPhone className="icon left" />
          <input name="phone" placeholder="Phone Number" onChange={handleChange} />
          <small>{errors.phone}</small>
        </div>

        {/* Password */}
        <div className="input-box">
          <FaLock className="icon left" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            onChange={handleChange}
          />
          <span
            className="icon right"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
          <small>{errors.password}</small>
        </div>

        {/* Confirm Password */}
        <div className="input-box">
          <FaLock className="icon left" />
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            onChange={handleChange}
          />
          <span
            className="icon right"
            onClick={() =>
              setShowConfirmPassword(!showConfirmPassword)
            }
          >
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </span>

          {/* ✅ Tick */}
          {isMatch && <span className="tick">✔</span>}

          {/* ❌ Error */}
          {!isMatch && form.confirmPassword && (
            <small>Passwords do not match</small>
          )}
        </div>

        <Link to="/" className="login-btn" onClick={handleSubmit}>
          SIGN UP
        </Link>
        
      </div>
    </div>
  );
}

export default Signup;