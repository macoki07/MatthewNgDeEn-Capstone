import { createContext, useState, useEffect, useCallback } from "react";
import toast from "react-hot-toast";

export const StockContext = createContext();

const API_KEY = import.meta.env.ALPHAVANTAGE_API_KEY;

const fetchStockPrice = async (symbol) => {
  try {
    const response = await fetch(
      `https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${API_KEY}`
    );
    const data = await response.json();
    if (
      data["Information"] ===
      "Thank you for using Alpha Vantage! Our standard API rate limit is 25 requests per day. Please subscribe to any of the premium plans at https://www.alphavantage.co/premium/ to instantly remove all daily rate limits."
    ) {
      console.warn(`API rate limit reached. Please try again later.`);
      return null;
    }

    if (!data["Global Quote"] || !data["Global Quote"]["05. price"]) {
      console.warn(`Invalid stock symbol: ${symbol}`);
      return null;
    }

    return parseFloat(data["Global Quote"]["05. price"]);
  } catch (error) {
    console.error("Error fetching stock price:", error);
    return null;
  }
};

export const StockProvider = ({ children }) => {
  const [stocks, setStocks] = useState(() => {
    const savedStocks = localStorage.getItem("stocks");
    return savedStocks ? JSON.parse(savedStocks) : [];
  });

  useEffect(() => {
    localStorage.setItem("stocks", JSON.stringify(stocks));
  }, [stocks]);

  const addStock = async (symbol, quantity, purchasePrice) => {
    const currentPrice = await fetchStockPrice(symbol);

    if (currentPrice === null) {
      toast.error(`Invalid stock symbol: ${symbol}. Please try again.`);
      return; // Ignore invalid stocks
    }

    setStocks((prevStocks) => [
      ...prevStocks,
      { symbol, quantity, purchasePrice, currentPrice },
    ]);

    toast.success(`${symbol} added successfully!`);
  };

  const removeStock = (indexToRemove) => {
    const removedStock = stocks[indexToRemove].symbol;
    setStocks((prevStocks) =>
      prevStocks.filter((_, index) => index !== indexToRemove)
    );
    toast.success(`${removedStock} removed from your list.`);
  };

  const updateStockPrices = useCallback(async () => {
    const updatedStocks = await Promise.all(
      stocks.map(async (stock) => {
        const updatedPrice = await fetchStockPrice(stock.symbol);
        return updatedPrice ? { ...stock, currentPrice: updatedPrice } : stock;
      })
    );

    setStocks(updatedStocks);
  }, [stocks]);

  useEffect(() => {
    const interval = setInterval(updateStockPrices, 30000);
    return () => clearInterval(interval);
  }, [updateStockPrices]);

  return (
    <StockContext.Provider value={{ stocks, addStock, removeStock }}>
      {children}
    </StockContext.Provider>
  );
};
