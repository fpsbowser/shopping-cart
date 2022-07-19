import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import Navigation from "./components/Navigation";
import "./styles/app.css";
import products from "./data/Products";

function App() {
  console.log(products);
  return (
    <Router>
      <div className="App">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
