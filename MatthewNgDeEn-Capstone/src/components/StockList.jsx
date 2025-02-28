import { useContext } from "react";
import { StockContext } from "../contexts/StockContext";

const StockList = () => {
  const { stocks, removeStock } = useContext(StockContext);

  return (
    <div className="w-full">
      <h2 className="text-lg font-bold">Stock List</h2>
      {stocks.length === 0 ? (
        <p className="text-gray-700">No stocks added yet.</p>
      ) : (
        stocks.map((stock, index) => {
          const profitLoss = (stock.currentPrice - stock.purchasePrice) * stock.quantity;
          return (
            <div key={index} className="p-2 border rounded my-2 bg-gray-200 text-black flex justify-between">
              <div>
                <p><strong>Symbol:</strong> {stock.symbol}</p>
                <p><strong>Quantity:</strong> {stock.quantity}</p>
                <p><strong>Purchase Price:</strong> ${stock.purchasePrice}</p>
                <p><strong>Current Price:</strong> ${stock.currentPrice}</p>
                <p className={profitLoss >= 0 ? "text-green-500" : "text-red-500"}>
                  <strong>Profit/Loss:</strong> ${profitLoss.toFixed(2)}
                </p>
              </div>
              <button 
                className="bg-red-500 text-white p-1 rounded self-center"
                onClick={() => removeStock(index)}
              >
                Remove
              </button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default StockList;
