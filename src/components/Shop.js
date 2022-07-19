import React from "react";
import "../styles/shop.css";

const Shop = (props) => {
  const { products } = props;
  console.log(products);

  const handleclick = (e) => {
    console.log(e);
  };

  const changeNewSrc = (e, newSrc) => {
    console.log(e.target.src);
    e.target.src = newSrc;
    console.log(newSrc);
  };

  const changeBackSrc = (e, oldSrc) => {
    e.target.src = oldSrc;
  };

  return (
    <div className="product-container">
      <div id="banner-wrapper">
        <img
          src={require("../assets/Kamakaze_Banner_NEW_1600x.webp")}
          id={"banner-image"}
          alt="banner"
        />
      </div>
      {products.map((product) => {
        return (
          <div className="wrapper">
            <img
              onClick={(e) => {
                handleclick(e);
              }}
              onMouseOver={(e) => {
                changeNewSrc(e, product.secondaryImage);
              }}
              onMouseLeave={(e) => {
                changeBackSrc(e, product.mainImage);
              }}
              key={product.id}
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
