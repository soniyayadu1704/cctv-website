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
import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const navigate = useNavigate();

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

  
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const isMatch =
    form.confirmPassword &&
    form.password === form.confirmPassword;

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


  const handleSubmit = (e) => {
    e.preventDefault(); // stop instant navigation

    if (validate()) {

      localStorage.setItem("user", JSON.stringify(form));

      setShowGreeting(true);

      setTimeout(() => {
        setShowGreeting(false);
        navigate("/"); // redirect after 3 sec
      }, 3000);
    }
  };

  return (
    <div className="bg" style={{ backgroundImage: `url(${bgimage})` }}>

     
      {showGreeting && form.firstName && (
        <div className="greeting">
          👋 Welcome {form.firstName} {form.lastName}
        </div>
      )}

      <div className="lens-form">
        <h3>CREATE ACCOUNT</h3>

        <div className="input-box">
          <FaUser className="icon left" />
          <input
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
          />
          <small>{errors.firstName}</small>
        </div>

        <div className="input-box">
          <FaUser className="icon left" />
          <input
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
          />
          <small>{errors.lastName}</small>
        </div>

        <div className="input-box">
          <FaEnvelope className="icon left" />
          <input
            name="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
          />
          <small>{errors.email}</small>
        </div>

        <div className="input-box">
          <FaPhone className="icon left" />
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
          <small>{errors.phone}</small>
        </div>

        <div className="input-box">
          <FaLock className="icon left" />
          <input
            name="password"
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={form.password}
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

        <div className="input-box">
          <FaLock className="icon left" />
          <input
            name="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            placeholder="Confirm Password"
            value={form.confirmPassword}
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

          
          {isMatch && <span className="tick">✔</span>}

          
          {!isMatch && form.confirmPassword && (
            <h6>Passwords do not match</h6>
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