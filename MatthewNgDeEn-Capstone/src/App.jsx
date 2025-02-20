import { useState } from "react";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";

function App() {
  const [stocks, setStocks] = useState([]);
  return (
    <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center">
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
        <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>
        
        <StockForm setStocks={setStocks} />

        <StockList stocks={stocks} />
      </div>
    </div>
  )
}

export default App
