import React from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import "./cart.css";

function Cartpage({ cartItems, setCartItems }) {
  const navigate = useNavigate();

  // Change quantity
  const handleQuantityChange = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Number(quantity) }
          : item
      )
    );
  };

  // Remove item
  const handleRemove = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // Total price
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">


      <div className="back-nav" onClick={() => navigate("/")}>
          <FaArrowLeft /> <span>Continue Shopping</span>
      </div>

      <h1>Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="empty-cart">
          <h2>🛒 Your Cart is Empty</h2>
          <p>Add some products to get started</p>
          <button onClick={() => navigate("/")}>
            Go Shopping
          </button>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />

                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>₹ {item.price}</p>

                  {/* Quantity */}
                  <label>
                    Qty:
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </label>

                  {/* Remove */}
                  <button
                    className="remove-btn"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="cart-summary">
            <h2>Total: ₹ {totalPrice}</h2>
            <button className="checkout-btn">
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cartpage;