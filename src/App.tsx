
import { PPPProvider } from "./context/PPPContext";
import PPPCalculator from "./pages/PPPCalculator";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <PPPProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PPPCalculator />} />
          </Routes>
        </BrowserRouter>
      </PPPProvider>
    </>
  );
}

export default App;
