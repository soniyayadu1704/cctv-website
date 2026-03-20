import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./mainpage.css"; // optional CSS for layout

function Mainpage({ PageComponent }) {
  return (
    <div className="layout">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="main-content">
        <PageComponent />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Mainpage;