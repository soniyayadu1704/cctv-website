import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cartpage from "./pages/Cartpage";
import Login from "./pages/Login";

function App() {
  const [cartItems, setCartItems] = useState([]);

  // Calculate total cart count
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <BrowserRouter>
      {/* Pass cart state to header */}
      <Header cartCount={cartCount} cartItems={cartItems} />

      <Routes>
        <Route path="/" element={<Home cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/cart" element={<Cartpage cartItems={cartItems} setCartItems={setCartItems} />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;