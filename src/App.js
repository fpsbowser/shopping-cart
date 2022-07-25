import React, { useState } from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
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

  const handleclick = (qty, newItem) => {
    if (
      customerItems.some((e) => e.id === newItem.id && e.size === newItem.size)
    ) {
      console.log("dupe");
      let items = customerItems.map((item) => {
        if (item.id === newItem.id && item.size === newItem.size) {
          // find duplicate item and update quantity
          item.quantity += newItem.quantity;
          return item;
        }
        return item;
      });
      console.log(items);
      setCustomerItems(items);
      setQuantity(quantity + qty);
    } else {
      setCustomerItems((prevState) => {
        return [...prevState, newItem];
      });
      setQuantity(quantity + qty);
      console.log(customerItems);
    }
  };

  const handleDelete = (id, qty) => {
    console.log(`reached: ${id}`);
    setCustomerItems((current) => current.filter((_, index) => index !== id));
    setQuantity(quantity - qty);
  };

  // console.log(products);
  return (
    <HashRouter basename="/">
      <div className="App">
        <Navigation quantity={quantity} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop products={products} />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/cart"
            element={
              <Cart customerItems={customerItems} handleDelete={handleDelete} />
            }
          />
          <Route
            path="/shop/:id"
            element={<ItemPage products={products} handleclick={handleclick} />}
          />
        </Routes>
        <Social />
      </div>
    </HashRouter>
  );
}

export default App;
