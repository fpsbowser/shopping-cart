import React from "react";
import { Link } from "react-router-dom";
import "../styles/navigation.css";

const Navigation = (props) => {
  const { quantity } = props;

  console.log(quantity);

  return (
    <nav>
      <Link to={"/"}>
        <img
          src={require("../assets/backwards-e-embalelem.jpg")}
          alt="logo"
          id="logo"
        />
      </Link>
      <Link to="/shop">
        <h2>Shop</h2>
      </Link>
      <Link to="/about">
        <h2>About</h2>
      </Link>
      <Link to="/cart">
        <div id="cart-container">
          <span className="material-symbols-outlined">shopping_bag</span>
          <p className="number-of-items">{quantity}</p>
        </div>
      </Link>
    </nav>
  );
};

export default Navigation;
