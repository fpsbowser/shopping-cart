import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "../styles/itempage.css";

const ItemPage = (props) => {
  const params = useParams();
  const { products, handleclick } = props;

  const [index, setIndex] = useState(0);

  useEffect(() => {
    setIndex(returnIndex(params.id));
  }, []);

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
            <p id="info-product-price">${products[index].price}.00</p>
            <button
              id="add-btn"
              onClick={() => {
                handleclick(products[index]);
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
