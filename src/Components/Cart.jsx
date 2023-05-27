import { handleQuantityChange } from "./utilities/handleChanges";
import "./Cart.css";
import ButtonBase from "./ButtonBase/ButtonBase";

function Cart({ cartItems, setCartItems, onClick, onClose }) {

  return (
    <>
    <div className="cart-modal" id="cart-container-modal">
      <div className="cart-left">
        <div className="cart-header">
          <button className="cart-close-btn" onClick={onClose}>
            CLOSE
          </button>
        </div>

        <div className="cart-content">
          <div className="all-cart-items">
            {cartItems.map(({ image, name, price, quantity }, index) => (
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
                <div className="cart-item">${price}</div>

                <div className="cart-item quantity-change">
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      handleQuantityChange(setCartItems, index, (quantity -= 1))
                    }
                  >
                    <i className="fa-solid fa-arrow-left"></i>
                  </button>
                  {quantity}
                  <button
                    className="quantity-btn"
                    onClick={() =>
                      handleQuantityChange(setCartItems, index, (quantity += 1))
                    }
                  >
                    <i className="fa-solid fa-arrow-right"></i>
                  </button>
                </div>

                <div className="line-item-total">${price * quantity}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="cart-right">
        
      </div>
    </div>
    </>
  );
}

export default Cart;
