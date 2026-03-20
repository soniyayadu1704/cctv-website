import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App"; // path must match exactly
import "./index.css"; // optional, for global CSS

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);