import CartItem from "./CartItem";
import "./Cart.css";

function Cart({ cartItems, setCartItems, onClose }) {
  return (
    <>
      <div className="cart-modal" id="cart-container-modal">
      <div className="cart-header">
            <button className="cart-close-btn" onClick={onClose}>
              Close Cart
            </button>
          </div>

          <div className="cart-content">
            <div className="all-cart-items">
              {cartItems.map((item, index) => (
                <CartItem
                  item={item}
                  key={index}
                  index={index}
                  setCartItems={setCartItems}
                />
              ))}
            </div>
          </div>
      </div>
    </>
  );
}

export default Cart;
