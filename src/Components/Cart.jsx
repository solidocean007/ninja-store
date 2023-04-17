import { useState } from "react";
import { handleQuantityChange } from "./utilities/handleChanges";
import "./Cart.css";

function Cart({ cart, setCart, onClose }) {
  return (
    <div className="cart-modal" id="cart-container-modal">
      <div className="cart-header">
        <button className="cart-close-btn" onClick={onClose}>
          CLOSE
        </button>
      </div>

      <div className="cart-content">
        <div className="all-cart-items">
          {cart.map(({ image, name, price, quantity }, index) => (
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
                  onClick={() =>
                    handleQuantityChange(setCart, index, (quantity -= 1))
                  }
                >
                  <i className="fa-solid fa-arrow-left"></i>
                </button>
                {quantity}
                <button
                  className="quantity-btn"
                  onClick={() =>
                    handleQuantityChange(setCart, index, (quantity += 1))
                  }
                >
                  <i className="fa-solid fa-arrow-right"></i>
                </button>
              </div>

              <div className="line-item-total">{price * quantity}</div>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <div>
            <div className="summary-header">Summary</div>
            <div className="promo-box">Promo</div>
            <div className="Sub-total">Cart Subtotal: {}</div>
          </div>

          <div>Checkout</div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
