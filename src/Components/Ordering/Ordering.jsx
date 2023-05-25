import { useState } from "react";
import Cart from "../Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import './Ordering.css'


const Ordering = ( {cartItems, setCartItems, onClose}) => {
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      {showCart && (
        <>
        <div className="modal-overlay"></div>
          <div className="order-window">
            <ProgressBar />
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              onClose={onClose}
            />
          </div>
        </>
        )}
    </>
  );
};

export default Ordering;
