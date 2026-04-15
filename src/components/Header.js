import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FaCamera } from "react-icons/fa";
import "./header.css";

function Header({ cartCount = 0, cartItems = [] }) {
  const navigate = useNavigate();

  const handleCartClick = () => {
    if (cartItems.length === 0) {
      toast.info("Your cart is empty!", { position: "top-right", autoClose: 2000 });
    } else {
      const content = (
        <div>
          {cartItems.map(item => (
            <div key={item.id} style={{ display: 'flex', marginBottom: '5px', gap: '10px', alignItems: 'center' }}>
              <img src={item.image} alt={item.title} width="40" height="40"
                style={{ objectFit: 'cover', borderRadius: '4px' }} />
              <div>
                <p style={{ margin: 0, fontSize: '13px' }}>{item.title}</p>
                <p style={{ margin: 0, fontSize: '12px' }}>₹{item.price} x{item.quantity}</p>
              </div>
            </div>
          ))}
          <button
            onClick={() => { toast.dismiss(); navigate("/cart"); }}
            style={{
              marginTop: '5px',
              width: '100%',
              backgroundColor: '#00cec9',
              color: 'black',
              border: 'none',
              borderRadius: '5px',
              padding: '6px',
              cursor: 'pointer',
              fontWeight: 'bold'
            }}
          >
            Go to Cart
          </button>
        </div>
      );

      toast.info(content, {
        position: "top-right",
        autoClose: 5000,
        closeOnClick: false,
        draggable: false
      });
    }
  };

  return (
    <header className="header">

      <div className="logo" onClick={() => navigate("/")}>
        <FaCamera className="logo-icon" />
        <h1>
        CCTV<span className="neon-pro">Pro</span>
        </h1>
      </div>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/products">Products</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <div className="header-right">
        <div className="cart-icon" onClick={handleCartClick}>
          🛒
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </div>

        <Link to="/login" className="login-btn">Login</Link>
      </div>

      <div className="contact-info">

        <a href="tel:+917017733646" className="contact-link">
          <span>📞</span> +91 7017733646
        </a>

        <a
          href={`mailto:support@cctv.com?subject=CCTV Inquiry&body=${encodeURIComponent(
            "Hello, I want to know more about your services."
          )}`}
          className="contact-link"
        >
          <span>📧</span> support@cctv.com
        </a>

      </div>

      <ToastContainer />
    </header>
  );
}

export default Header;