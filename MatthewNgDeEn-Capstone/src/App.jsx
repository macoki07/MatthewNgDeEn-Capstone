import { StockProvider } from "./contexts/StockContext";
import StockForm from "./components/StockForm";
import StockList from "./components/StockList";
import { Toaster } from "react-hot-toast"; // Import Toaster

function App() {
  return (
    <StockProvider>
      <div className="min-h-screen bg-white text-black p-6 flex flex-col items-center">
        <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full">
          <h1 className="text-2xl font-bold mb-4">Finance Dashboard</h1>

          <StockForm />
          <StockList />
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} /> 
    </StockProvider>
  );
}

export default App;
