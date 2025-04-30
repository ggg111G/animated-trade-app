// src/components/TradeModal.js
import React, { useState } from "react";

export default function TradeModal({ onClose, onSubmit }) {
  const [ticker, setTicker] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = () => {
    onSubmit({ ticker, startDate, endDate });
    onClose();
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Enter Trade Details</h2>
        <input placeholder="Ticker (e.g. AAPL)" value={ticker} onChange={e => setTicker(e.target.value)} />
        <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        <input type="date" value={endDate} onChange={e => setEndDate(e.target.value)} />
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={onClose}>Cancel</button>
      </div>
    </div>
  );
}
