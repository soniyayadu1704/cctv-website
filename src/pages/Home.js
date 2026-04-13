import React, { useEffect, useState } from "react";
import "./home.css";

function Home({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const images = [
    "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789",
    "https://images.unsplash.com/photo-1590658268037-6bf12165a8df",
    "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7"
  ];

  const [current, setCurrent] = useState(0);

  // Fetch products
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      });
  }, []);

  // Slider
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  // ✅ ADD TO CART LOGIC
  const handleAddToCart = (product) => {
    const exists = cartItems.find((item) => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Secure Your Home & Business</h1>
          <p>Explore high-quality CCTV cameras</p>
        </div>

        <div className="hero-image">
          <img src={images[current]} alt="banner" />
        </div>
      </section>

      <section className="products">
        <h2>Our CCTV Cameras</h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="product-grid">
            {products.slice(0, 8).map((item) => (
              <div className="card" key={item.id}>
                <img src={item.image} alt={item.title} />
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
                <button onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

export default Home;