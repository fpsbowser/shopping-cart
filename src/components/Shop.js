import React from "react";
import "../styles/shop.css";

const Shop = (props) => {
  const { products } = props;
  console.log(products);

  const handleclick = (e) => {
    console.log(e);
  };

  return (
    <div className="product-container">
      <img
        src={require("../assets/Kamakaze_Banner_NEW_1600x.webp")}
        id={"banner-image"}
        alt="banner"
      />
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className={"card"}
            id={product.name}
            onClick={(e) => {
              handleclick(e);
            }}
          >
            <img
              src={product.mainImage}
              alt={product.name}
              id={"product-image"}
            />
          </div>
        );
      })}
    </div>
  );
};

export default Shop;

/*
    <div className="products-container">
      <img
        src={products[0].mainImage}
        alt={products.name}
        width={"400px"}
        height={"500px"}
      ></img>
      <h1>Shop Page</h1>
      <p>{products.name}</p>
    </div>
*/
