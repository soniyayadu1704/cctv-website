import React, { useState } from "react";
import Backbutton from "../components/Backbutton";
import "./cart.css";

function Cartpage() {
  // Dummy cart items
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      title: "CCTV Dome Camera HD",
      price: 2999,
      image: "https://via.placeholder.com/150x100.png?text=CCTV+Dome",
      quantity: 1,
    },
    {
      id: 2,
      title: "Wireless Bullet Camera",
      price: 4999,
      image: "https://via.placeholder.com/150x100.png?text=Bullet+Camera",
      quantity: 2,
    },
  ]);

  const handleQuantityChange = (id, quantity) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: Number(quantity) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="cart-page">
      <Backbutton />
      <h1>Your Shopping Cart</h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-item" key={item.id}>
                <img src={item.image} alt={item.title} />
                <div className="cart-item-details">
                  <h3>{item.title}</h3>
                  <p>₹ {item.price}</p>
                  <label>
                    Quantity:{" "}
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) =>
                        handleQuantityChange(item.id, e.target.value)
                      }
                    />
                  </label>
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

          <div className="cart-summary">
            <h2>Total: ₹ {totalPrice}</h2>
            <button className="checkout-btn">Proceed to Checkout</button>
          </div>
        </>
      )}
    </div>
  );
}

export default Cartpage;