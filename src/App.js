// src/App.js
import React, { useState } from "react";
import Home from "./components/Home";
import TradeModal from "./components/TradeModal";
import "./App.css";
import { fetchStockData } from './utils/fetchStockData';

function App() {
  const [showModal, setShowModal] = useState(false);
  const [trades, setTrades] = useState([]);

 
  

const handleNewTrade = async (trade) => {
  const { ticker, startDate, endDate } = trade;
  const rawData = await fetchStockData(ticker);

  // Filter data by date range (including pre/post context)
  const from = new Date(startDate);
  const to = new Date(endDate);

  const contextFrom = new Date(from);
  contextFrom.setDate(from.getDate() - 10);

  const contextTo = new Date(to);
  contextTo.setDate(to.getDate() + 10);

  const filtered = rawData.filter(item => {
    const itemDate = new Date(item.date);
    return itemDate >= contextFrom && itemDate <= contextTo;
  });

  console.log('Filtered data:', filtered);

  setTrades([...trades, { ...trade, data: filtered }]);
};

  return (
    <div className="App">
      <Home onNewTrade={() => setShowModal(true)} />
      {showModal && (
        <TradeModal
          onClose={() => setShowModal(false)}
          onSubmit={handleNewTrade}
        />
      )}
    </div>
  );
}

export default App;

