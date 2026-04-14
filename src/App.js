import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Products from "./pages/Products";
import Cartpage from "./pages/Cartpage";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {
  const [cartItems, setCartItems] = useState([]);

  let cartCount = 0;
  for (let i = 0; i < cartItems.length; i++) {
    cartCount += cartItems[i].quantity;
  }

  return (
    <BrowserRouter>

      
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>

      
      <Header cartCount={cartCount} cartItems={cartItems} />

      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/about" element={<About />} />
        <Route
          path="/products"
          element={<Products cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<Cartpage cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;