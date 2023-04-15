import { useState } from "react";
import SignUpLogInButton from "./SignUpLogInButton";
import CartButton from "./CartButton";
import SignUp_Login from "./SignUp_Login";
import Cart from "./Cart";
import data from "./data";
import "./ShoppingModal.css";
import { toggleSignUpLogin } from "./utilities/handleChanges";
import { handleCartUpdate } from "./utilities/cart";

function ShoppingModal() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);

  const handleSignUpLoginClick = () => {
    setShowSignUpLogin(!showSignUpLogin);
    toggleSignUpLogin();
  };

  // Function to handle opening the cart modal
  const handleCartButtonOnClick = () => {
    setShowCart(true);
  };

  // Function to handle closing the cart modal
  const handleCloseCart = () => {
    setShowCart(false);
  };

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
          <h1>{price}</h1>
        </div>
        <div className="cart-btn">
          <button
            onClick={() => handleCartUpdate({ name, price }, cart, setCart)}
          >
            {buttonText}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="store-front">
      <div className="login-header">
        <div className="title-block">
          <h1>Voltron</h1>
        </div>
        <div className="login-block">
          <div className="sign-up btn">
            <SignUpLogInButton onClick={handleSignUpLoginClick} />
          </div>
          <div className="cart-box btn">
            <CartButton onClick={handleCartButtonOnClick} />
          </div>
        </div>
      </div>

      <div className="featured-items">
        {data.map((item, index) => generateItemBlock(item, index))}
      </div>

      {showSignUpLogin && (
        <div>
          <div className="modal-overlay"></div>
          <SignUp_Login onClose={() => setShowSignUpLogin(false)} />
        </div>
      )}

      {showCart && (
        <div>
          <div className="modal-overlay"></div>
          <Cart cart={cart} setCart={setCart} onClose={handleCloseCart} />
        </div>
      )}
    </div>
  );
}

export default ShoppingModal;
