import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
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

  // ✅ ADD TO CART WITH TOAST
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

      toast.success(`${product.title.slice(0, 25)}... quantity increased 🛒`, {
        position: "top-right",
        autoClose: 2000,
        style: {
          background: "#0f2027",
          color: "#00ffc3",
          boxShadow: "0 0 10px #00ffc3"
        }
      });

    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);

      toast.success(`${product.title.slice(0, 25)}... added to cart 🛒`, {
        position: "top-right",
        autoClose: 2000,
        style: {
          background: "#0f2027",
          color: "#00ffc3",
          boxShadow: "0 0 10px #00ffc3"
        }
      });
    }
  };

  return (
    <div className="home-container">

      {/* HERO */}
      <section className="hero">
        <div className="hero-text">
          <h1>Secure Your Home & Business</h1>
          <p>Explore high-quality CCTV cameras</p>
        </div>

        <div className="hero-image">
          <img src={images[current]} alt="banner" />
        </div>
      </section>

      {/* PRODUCTS */}
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