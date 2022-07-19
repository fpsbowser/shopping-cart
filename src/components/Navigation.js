import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";
import Cart from "./Cart";

const Navigation = () => {
  return (
    <nav>
      <h3>Logo</h3>
      <Link to="/shop">
        <h2>Shop</h2>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Cart />
    </nav>
  );
};

export default Navigation;
