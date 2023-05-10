import { useState } from "react";
import SignUpLogInButton from "./SignUpLogInButton";
import CartButton from "./CartButton";
import SignUp_Login from "./SignUp_Login";
import Cart from "./Cart";
import Title from "./Title";
import ItemGrid from "./ItemGrid";

import "./ShoppingModal.css";


function ShoppingModal() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  const [subTotalBill, setSubTotalBill] = useState(0);

  // Function to handle opening the cart modal
  const handleCartButtonOnClick = () => {
    setShowCart(true);
  };

  // Function to handle closing the cart modal
  const handleCloseCart = () => {
    setShowCart(false);
  };

  return (
    <div className="store-front">
      <div className="login-header">
        <div className="title-block">
          <Title title="Voltron" />
        </div>
        <div className="login-block">
          <div className="sign-up btn">
            <SignUpLogInButton
              isLoggedIn={isLoggedIn}
              setShowSignUpLogin={setShowSignUpLogin}
            />
          </div>
          <div className="cart-box btn">
            <CartButton onClick={handleCartButtonOnClick} />
          </div>
        </div>
      </div>

      <ItemGrid cart={cart} setCart={setCart} />

      {showSignUpLogin && (
        <div className="login-signUp-modal">
          <div className="modal-overlay"></div>
          <SignUp_Login onClose={() => setShowSignUpLogin(false)} />
        </div>
      )}

      {showCart && (
        <div>
          <div className="modal-overlay"></div>
          <Cart
            cart={cart}
            setCart={setCart}
            onClose={handleCloseCart}
            subTotalBill={subTotalBill}
            setSubTotalBill={setSubTotalBill}
          />
        </div>
      )}
    </div>
  );
}

export default ShoppingModal;
