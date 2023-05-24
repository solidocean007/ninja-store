import { useState } from "react";
import Cart from "../Cart";
import { handleCloseCart } from "../utilities/cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import './Ordering.css'

// onClose={handleCloseCart}

const Ordering = ( {cartItems, setCartItems}) => {
  const [showCart, setShowCart] = useState(true);

  return (
    <>
      <div className="modal-overlay"></div>

      {showCart && (
          <div className="order-window">
            <ProgressBar />
            <Cart
              cartItems={cartItems}
              setCartItems={setCartItems}
              // onClose={onClose}
            />
          </div>
        )}
    </>
  );
};

export default Ordering;
