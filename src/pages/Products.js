import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

function Products({ cartItems, setCartItems }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    const exists = cartItems.find(item => item.id === product.id);

    if (exists) {
      setCartItems(
        cartItems.map(item =>
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
    <div className="p-10 bg-[#f5f6fa]">

      <h1 className="text-3xl text-center mb-8 font-semibold">
        Our <span className="neon-text">CCTV Cameras</span>
      </h1>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-6">

        {products.slice(0, 12).map(product => (
          <div
            key={product.id}
            className="bg-white rounded-xl p-4 text-center shadow-md transition duration-300 hover:-translate-y-2"
          >
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[180px] object-contain"
            />

            <h3 className="text-sm h-[40px] overflow-hidden">
              {product.title}
            </h3>

            <p className="font-bold text-cyan-500">
              ₹ {product.price}
            </p>

            <button
              onClick={() => handleAddToCart(product)}
              className="w-full py-2 mt-2 rounded-md text-white bg-gradient-to-r from-cyan-400 to-blue-500 hover:scale-105 transition"
            >
              Add to Cart
            </button>
          </div>
        ))}

      </div>
    </div>
  );
}

export default Products;