import { React, useState } from "react";
import { data } from "./data";
import { handleCartUpdate } from "./utilities/cart";
import "./ItemGrid.css";

function ItemGrid({ cartItems, setCartItems }) {
  const [activeCards, setActiveCards] = useState({});

  const generateItemBlock = ({ name, image, price, size }, index) => {
    const inCart = cartItems.find((obj) => obj.name === name);
    const buttonText = inCart ? "Remove item" : "Add to Cart";
    const isActive = activeCards[index];

    const handleClick = () => {
      handleCartUpdate({ image, name, price }, cartItems, setCartItems);

      setActiveCards((prevActiveCards) => ({
        ...prevActiveCards,
        [index]: !inCart,
      }));
    };

    return (
      <div className={`card ${isActive ? "active" : ""}`} key={index}>
        <div className="front">
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
          <div className="details">
            <div className="lion-header">
              <h2>{name}</h2>
            </div>
            <div className="lion-price">
              <h1>${price}</h1>
            </div>
            <div className="buy-btn-div">
              <button onClick={handleClick}>{buttonText}</button>
            </div>
          </div>
        </div>
        <div className="back">
          <img
            src="/src/assets/legendary-voltron.jpg"
            alt="Back"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
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
