// src/components/Home.js
import React from "react";

export default function Home({ onNewTrade }) {
  return (
    <div className="home">
      <h1>Animated Trading Graph App</h1>
      <button onClick={onNewTrade}>+ New Trade</button>
      <div className="trades-grid">
        {/* Placeholder for previous trades */}
        <p>No trades yet</p>
      </div>
    </div>
  );
}
