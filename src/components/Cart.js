import React from "react";
import uniqid from "uniqid";
import "../styles/cart.css";

const Cart = (props) => {
  const { customerItems } = props;

  const getTotalPrice = (arr) => {
    let total = 0;
    arr.map((item) => {
      total += item.quantity * item.price;
    });
    return total;
  };

  const getTotalQuantity = (arr) => {
    let quantity = 0;
    arr.map((item) => {
      quantity += item.quantity;
    });
    if (quantity === 1) {
      return `${quantity} item`;
    } else {
      return `${quantity} items`;
    }
  };

  console.log(customerItems);
  return (
    <div className="cart-container">
      <div className="receipt">
        {customerItems.map((item) => {
          return (
            <div className="cart-item" key={uniqid()}>
              <img
                src={item.mainImage}
                alt="product detail"
                id="cart-product-image"
              />
              <div className="product-info">
                <p className="cart-name">{item.name}</p>
                <p className="cart-quantity">Quantity: {item.quantity}</p>
                <p className="cart-price">Price: ${item.price}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="checkout-container">
        <h1 id="summary">Cart Summary</h1>
        <p id="quantity">{getTotalQuantity(customerItems)}</p>
        <p id="total">Total : ${getTotalPrice(customerItems)}</p>
        <button
          id="checkout-btn"
          onClick={() => {
            alert(
              "In theory you checked out and will recieve your items in 10 seconds."
            );
          }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
