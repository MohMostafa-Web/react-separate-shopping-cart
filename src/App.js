import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header";
import Cart from "./pages/Cart";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <div className="App">
        <Header />
        <div className="page">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="cart" element={<Cart />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
