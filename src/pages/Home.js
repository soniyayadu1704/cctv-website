import React, { useEffect, useState } from "react";
import "./home.css";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Using fake API for demo
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="home-container">

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-text">
          <h1>Secure Your Home & Business</h1>
          <p>Explore our range of high-quality CCTV cameras for complete security.</p>
        </div>
        <div className="hero-image">
          <img src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789" alt="CCTV Banner" />
        </div>
      </section>

      {/* Products Section */}
      <section className="products">
        <h2>Our CCTV Cameras</h2>
        <div className="product-grid">
          {products.slice(0, 8).map((item) => (
            <div className="card" key={item.id}>
              <div className="card-image">
                <img src={item.image} alt={item.title} />
              </div>
              <div className="card-info">
                <h3>{item.title}</h3>
                <p>₹ {item.price}</p>
                <button>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;