import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Home from "./components/Home";
import Shop from "./components/Shop";
import ItemPage from "./components/ItemPage";
import Navigation from "./components/Navigation";
import "./styles/app.css";
import products from "./data/Products";
import Cart from "./components/Cart";
import Social from "./components/Social";

function App() {
  const [customerItems, setCustomerItems] = useState([]);
  const [quantity, setQuantity] = useState(0);

  const handleclick = (item) => {
    const itemIdArr = customerItems.map((item) => {
      return item.id;
    });
    console.log(itemIdArr);
    if (itemIdArr.includes(item.id)) {
      setQuantity(quantity + 1);
      item.quantity += 1;
    } else {
      item.quantity += 1;
      setQuantity(quantity + 1);
      setCustomerItems(customerItems.concat(item));
    }
  };

  console.log(products);
  return (
    <Router>
      <div className="App">
        <Navigation quantity={quantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={<Cart customerItems={customerItems} />}
          />
          <Route
            path="/shop/:id"
            element={<ItemPage products={products} handleclick={handleclick} />}
          />
        </Routes>
        <Social />
      </div>
    </Router>
  );
}

export default App;
