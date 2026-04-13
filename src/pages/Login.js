import React, { useState, useEffect } from "react";
import './login.css';
import bgimage from "../image/bgimage.jpg";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);

  useEffect(() => {
    const savedEmail = localStorage.getItem("rememberEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setRemember(true);
    }
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    const users = JSON.parse(localStorage.getItem("users")) || [];

    const validUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (validUser) {
      localStorage.setItem("isLoggedIn", true);
      localStorage.setItem("currentUser", email);

      if (remember) {
        localStorage.setItem("rememberEmail", email);
      }

      alert("Login Successful ✅");
      navigate("/dashboard");
    } else {
      alert("Invalid Credentials ❌");
    }
  };

  const bgStyle = {
    backgroundImage: `url(${bgimage})`,
  };

  return (
    <div className="login-page" style={bgStyle}>
      <div className="overlay">
        <div className="login-card">
          <h2>Login.....</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <div className="password-container">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <span
                className="toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
              > 
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>

            <div className="remember-row">
              <label className="remember-label">
                <input
                  type="checkbox"
                  checked={remember}
                  onChange={() => setRemember(!remember)}
                />
                <span>Remember Me</span>
              </label>

              <span className="forgot-link">Forgot?</span>
            </div>

            <button type="submit">Login</button>
          </form>

          <p className="signup-text">
            No account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;