import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Navber from "./components/Navber";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Navber />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/card" element={<Card />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
