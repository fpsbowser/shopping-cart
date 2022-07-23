import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/itempage.css";

const ItemPage = (props) => {
  const params = useParams();
  const { products, handleclick } = props;

  const [index, setIndex] = useState(0);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("medium");

  useEffect(() => {
    setIndex(returnIndex(params.id));
  }, []);

  const increment = () => {
    console.log("increment");
    setQty(qty + 1);
  };

  const decrement = () => {
    console.log("decrement");
    setQty(qty - 1);
  };

  const removeStyle = () => {
    document.querySelectorAll(".selected").forEach(function (element) {
      element.classList.remove("selected");
    });
  };

  let newItem = {};

  const selected = (e, newSize) => {
    console.log(e.target.parentElement.children);
    console.log(size);
    // remove selected class from siblings
    removeStyle();
    setSize(newSize);
    console.log(newSize);
    e.target.classList.add("selected");
  };

  const returnIndex = (params) => {
    switch (params) {
      case "kamikaze-green-hoodie":
        return 0;
      case "kamikaze-green-cropped-hoodie":
        return 1;
      case "top-gunner-patch-cropped-hoodie":
        return 2;
      case "top-gunner-patch-hoodie":
        return 3;
      case "womens-plane-cropped-hoodie":
        return 4;
      case "death-before-defeat-lightweight-black-bomber":
        return 5;
      case "unconquered-black-long-sleeve":
        return 6;
      case "plane-crewneck":
        return 7;
      case "kamikaze-hat":
        return 8;
      default:
        return null;
    }
  };

  if (index != null) {
    return (
      <div className="item-page-container">
        <div className="image-container">
          <img
            id="item-image"
            src={products[index].mainImage}
            alt="product detail"
          />
          <img
            id="item-image"
            src={products[index].secondaryImage}
            alt="product detail"
          />
          {products[index].additionalImages.map((img) => {
            return (
              <img id="item-image" src={img} alt="product detail" key={img} />
            );
          })}
        </div>
        <div className="information-container">
          <div className="info">
            <h1 id="#info-product-name">{products[index].name}</h1>
            <div className="qty-price-container">
              <p id="info-product-price">${products[index].price}.00</p>
              <div id="quantity-container">
                <p id="qty-text">Qty: {qty}</p>
                <div id="up-down-container">
                  <img
                    src={require("../assets/chevron-up.png")}
                    alt="increase button"
                    id="increase-btn"
                    onClick={increment}
                  />
                  <img
                    src={require("../assets/chevron-down.png")}
                    alt="decrease button"
                    id="decrease-btn"
                    onClick={decrement}
                  />
                </div>
              </div>
            </div>
            <div id="size-container">
              <p
                className="small sizebutton"
                onClick={(e) => {
                  selected(e, "small");
                }}
              >
                S
              </p>
              <p
                className="medium selected"
                onClick={(e) => {
                  selected(e, "medium");
                }}
              >
                M
              </p>
              <p
                className="large sizebutton"
                onClick={(e) => {
                  selected(e, "large");
                }}
              >
                L
              </p>
            </div>
            <button
              id="add-btn"
              onClick={() => {
                const copy = Object.assign({}, products[index]);
                // copy = products[index];
                copy.quantity = qty;
                copy.size = size;
                handleclick(qty, copy);
              }}
            >
              Add to bag
            </button>
            <p id="info-product-description">{products[index].description}</p>
          </div>
        </div>
      </div>
    );
  }
};

export default ItemPage;
