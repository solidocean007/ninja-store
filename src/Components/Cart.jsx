import { useState } from "react";
import { handleQuantityChange } from "./utilities/handleChanges";
import "./Cart.css";

function Cart({ cart, setCart, onClose }) {
  return (
    <div className="cart-modal" id="cart-container-modal">
      <div className="cart-header">
        <button onClick={onClose}>CLOSE</button>
      </div>
      {cart.map(({image, name, price, quantity}, index) => (
        <div className="cart-items" key={name}>
          <div className="cart-item-image">
            <img
              src={image}
              alt={name}
              style={{
                width: "10vw",
                height: "10vh",
              }}
            />
          </div>
          <div className="cart-item">{name}</div>
          <div className="cart-item">{price}</div>

          <div className="cart-item quantity-change">
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange(setCart, index, quantity -= 1)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            {quantity}
            <button
              className="quantity-btn"
              onClick={() => handleQuantityChange(setCart, index, quantity += 1)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>

          <div className="line-item-total">{price * quantity}</div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
