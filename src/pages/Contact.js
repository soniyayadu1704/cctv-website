import React from "react";

function Contact() {
  const phoneNumber = "+917017733646";
  const email = "support@cctvpro.com";

  const whatsappNumber = "917017733646";
  const message = "Hi, I want to know more about your CCTV services.";

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  const mailtoLink = `mailto:${email}?subject=CCTV Inquiry&body=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_center,#0f2027,#000000)] text-white text-center px-5 py-10">

      <h1 className="text-3xl tracking-widest drop-shadow-[0_0_15px_#00ffc3]">
        🔒 CCTV CONTROL ROOM
      </h1>

      <p className="text-gray-400 mb-10">
        Secure Communication Channel
      </p>

      <div className="flex flex-wrap justify-center gap-8">

        {/* WHATSAPP */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 w-[250px] transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_#00ffc3]">
          <span className="text-4xl block mb-2 animate-pulse">📹</span>
          <h3>WhatsApp Support</h3>

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-4 py-2 rounded-lg font-bold bg-[#25d366] text-black transition hover:scale-110 hover:shadow-[0_0_15px_currentColor]"
          >
            Chat on WhatsApp
          </a>
        </div>

        {/* EMAIL */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 w-[250px] transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_#00ffc3]">
          <span className="text-4xl block mb-2 animate-pulse">📡</span>
          <h3>Email Support</h3>

          <a
            href={mailtoLink}
            className="inline-block mt-3 px-4 py-2 rounded-lg font-bold bg-[#0984e3] transition hover:scale-110 hover:shadow-[0_0_15px_currentColor]"
          >
            Send Email
          </a>
        </div>

        {/* CALL */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 w-[250px] transition duration-500 hover:-translate-y-2 hover:scale-105 hover:shadow-[0_0_25px_#00ffc3]">
          <span className="text-4xl block mb-2 animate-pulse">🔔</span>
          <h3>Call Assistance</h3>

          <a
            href={`tel:${phoneNumber}`}
            className="inline-block mt-3 px-4 py-2 rounded-lg font-bold bg-[#fdcb6e] text-black transition hover:scale-110 hover:shadow-[0_0_15px_currentColor]"
          >
            Call Now
          </a>
        </div>

      </div>
    </div>
  );
}

export default Contact;