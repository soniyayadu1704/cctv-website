import React, { useEffect } from "react";

function Dashboard() {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      window.location.href = "/login";
    }
  }, []);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    window.location.href = "/login";
  };

  return (
    <div>
      <h2>🎥 CCTV Dashboard</h2>
      <button onClick={logout}>Logout</button>
    </div>
  );
}

export default Dashboard;