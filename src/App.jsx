import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Card from "./pages/Card";
import Navber from "./components/Navber";
import { Provider } from "react-redux";
import store from "./store/store.js";

function App() {
  return (
    <div className="app">
      <Provider store={store}>
        <BrowserRouter>
          <Navber />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/card" element={<Card />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
