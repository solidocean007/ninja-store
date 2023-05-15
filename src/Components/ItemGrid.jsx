import { React, useState } from "react";
import { data } from "./data";
import { handleCartUpdate } from "./utilities/cart";

function ItemGrid({ cart, setCart }) {
  const generateItemBlock = ({ name, image, price, size }, index) => {
    const inCart = cart.find((obj) => obj.name === name);
    const buttonText = inCart ? "Remove item" : "Add to Cart";
    return (
      <div className="item-container" key={index}>
        <div className="image-box">
          <img
            src={image}
            alt={name}
            style={{
              width: size?.width,
              height: size?.height,
            }}
          />
        </div>
        <div className="lion-header">
          <h2>{name}</h2>
        </div>
        <div className="lion-price">
          <h1>${price}</h1>
        </div>
        <div className="cart-btn">
          <button
            onClick={() =>
              handleCartUpdate({ image, name, price }, cart, setCart)
            }
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="featured-items">
      {data.map((item, index) => generateItemBlock(item, index))}
    </div>
  );
}

export default ItemGrid;
