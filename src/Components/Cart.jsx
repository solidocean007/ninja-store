import { useState } from "react";
import './Cart.css'

function Cart({ cart, setCart, onClose }) {
  return (
    <div className="cart-modal" id="cart-container-modal">
      <div className="cart-header"><button onClick={onClose}>CLOSE</button></div>
      {cart.map((item) => (
        <div className="cart-items" key={item.name}>
          <div className="cart-item-image" >
            {item.image}
          </div>
          <div className="cart-item-name" >
            {item.name}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
