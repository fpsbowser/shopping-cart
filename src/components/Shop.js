import React from "react";
import { Link } from "react-router-dom";
import "../styles/shop.css";

const Shop = (props) => {
  const { products } = props;
  console.log(products);

  const changeNewSrc = (e, newSrc) => {
    e.target.src = newSrc;
  };

  const changeBackSrc = (e, oldSrc) => {
    e.target.src = oldSrc;
  };

  return (
    <div className="product-container">
      <div id="banner-wrapper">
        <img
          src={require("../assets/Kamakaze_Banner_NEW_1600x.jpg")}
          id={"banner-image"}
          alt="banner"
        />
      </div>
      {products.map((product) => {
        return (
          <div className="wrapper" key={product.id}>
            <Link to={`${product.id}`}>
              <img
                onMouseOver={(e) => {
                  changeNewSrc(e, product.secondaryImage);
                }}
                onMouseLeave={(e) => {
                  changeBackSrc(e, product.mainImage);
                }}
                src={product.mainImage}
                alt={product.name}
                id={"product-image"}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default Shop;
