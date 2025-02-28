import { useState, useContext } from "react";
import { StockContext } from "../contexts/StockContext";

const StockForm = () => {
  const { addStock } = useContext(StockContext);
  const [formData, setFormData] = useState({
    symbol: "",
    quantity: "",
    purchasePrice: "",
  });

  const handleChange = (e) => {
    let { name, value } = e.target;
    if (name === "symbol") value = value.toUpperCase();
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { symbol, quantity, purchasePrice } = formData;

    if (!symbol || !quantity || !purchasePrice) return;
    if (quantity <= 0 || purchasePrice <= 0) {
      alert("Quantity and Purchase Price must be positive numbers!");
      return;
    }

    await addStock(symbol, parseFloat(quantity), parseFloat(purchasePrice));
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
