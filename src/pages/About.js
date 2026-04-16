import React from "react";

function About() {
  return (
    <div className="font-sans">

      {/* HERO */}
      <section
        className="bg-cover bg-center text-white text-center py-[60px] px-5"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789')",
        }}
      >
        <h1 className="text-4xl font-bold">
          About Our CCTV Solutions
        </h1>
        <p className="mt-2">
          We provide advanced security systems to protect your home and business.
        </p>
      </section>

      {/* WHO WE ARE */}
      <section className="p-5 text-center">
        <h2 className="text-[#2c3e50] text-2xl font-semibold">
          Who We Are
        </h2>
        <p className="mt-2">
          We are a trusted CCTV provider offering high-quality surveillance 
          systems with modern technology like 360° cameras, night vision, 
          and remote monitoring.
        </p>
      </section>

      {/* MISSION */}
      <section className="p-5 text-center">
        <h2 className="text-[#2c3e50] text-2xl font-semibold">
          Our Mission
        </h2>
        <p className="mt-2">
          Our mission is to make security simple, affordable, and accessible 
          for everyone.
        </p>
      </section>

      {/* FEATURES */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-5">
        
        <div className="bg-[#f1f2f6] p-5 rounded-xl text-center transition duration-300 hover:scale-105 hover:bg-[#dfe6e9]">
          <h3>📷 HD Cameras</h3>
          <p>Crystal clear video quality</p>
        </div>

        <div className="bg-[#f1f2f6] p-5 rounded-xl text-center transition duration-300 hover:scale-105 hover:bg-[#dfe6e9]">
          <h3>🌙 Night Vision</h3>
          <p>24/7 monitoring even in darkness</p>
        </div>

        <div className="bg-[#f1f2f6] p-5 rounded-xl text-center transition duration-300 hover:scale-105 hover:bg-[#dfe6e9]">
          <h3>🔄 360° View</h3>
          <p>Full area coverage</p>
        </div>

        <div className="bg-[#f1f2f6] p-5 rounded-xl text-center transition duration-300 hover:scale-105 hover:bg-[#dfe6e9]">
          <h3>📱 Mobile Access</h3>
          <p>Monitor from anywhere</p>
        </div>

      </section>

    </div>
  );
}

export default About;