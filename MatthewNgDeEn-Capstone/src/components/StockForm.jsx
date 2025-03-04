import { useState } from "react";

const StockForm = ({ setStocks }) => {
  const [formData, setFormData] = useState({
    symbol: "",
    quantity: "",
    purchasePrice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.symbol || !formData.quantity || !formData.purchasePrice) return;
    
    setStocks((prevStocks) => [
      ...prevStocks, 
      { ...formData, currentPrice: Math.random() * 200 }
    ]);
    
    setFormData({ symbol: "", quantity: "", purchasePrice: "" });
  };

  return (
    <form className="flex space-x-2 mb-4 w-full" onSubmit={handleSubmit}>
      <input
        type="text"
        name="symbol"
        placeholder="Stock Symbol"
        value={formData.symbol}
        onChange={handleChange}
        className="p-2 border rounded w-1/3 text-black"
      />
      <input
        type="number"
        name="quantity"
        placeholder="Quantity"
        value={formData.quantity}
        onChange={handleChange}
        className="p-2 border rounded w-1/3 text-black"
      />
      <input
        type="number"
        name="purchasePrice"
        placeholder="Purchase Price"
        value={formData.purchasePrice}
        onChange={handleChange}
        className="p-2 border rounded w-1/3 text-black"
      />
      <button type="submit" className="bg-black text-white p-2 rounded">
        Add
      </button>
    </form>
  );
};

export default StockForm;
