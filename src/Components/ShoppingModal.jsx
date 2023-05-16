import { useState } from "react";
import SignUpLogInButton from "./SignUpLogInButton";
import CartButton from "./CartButton";
import SignUp_Login from "./SignUp_Login";
import Cart from "./Cart";
import Title from "./Title";
import ItemGrid from "./ItemGrid";
import "./ShoppingModal.css";

function ShoppingModal() {
  const [users, setUsers] = useState([]);

  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  const [subTotalBill, setSubTotalBill] = useState(0);

  const handleCloseSignUpLogin = () => {
    setShowSignUpLogin(false);
  };

  // Function to handle opening the cart modal
  const handleCartButtonOnClick = () => {
    setShowCart(true);
  };

  // Function to handle closing the cart modal
  const handleCloseCart = () => {
    setShowCart(false);
  };

  // Function to set userLoggedIn to empty for signing out
  const signOutUser = () => {
    setUserLoggedIn("");
  };

  let buttonMessage = userLoggedIn ? "Sign out" : "Sign up / Login";

  return (
    <div className="store-front">
      <div className="login-header">
        <div className="title-block">
          <Title title="Voltron" />
        </div>
        {userLoggedIn && (
          <div className="user-block">Welcome {userLoggedIn}</div>
        )}
        <div className="login-block">
          <div className="sign-up btn">
            <SignUpLogInButton
              title={buttonMessage}
              setShowSignUpLogin={setShowSignUpLogin}
              onClick={userLoggedIn ? signOutUser : null}
            />
          </div>
          <div className="cart-box btn">
            <CartButton onClick={handleCartButtonOnClick} />
          </div>
        </div>
      </div>

      <ItemGrid cart={cart} setCart={setCart} />

      {showSignUpLogin && !userLoggedIn && (
        <div className="login-signUp-modal">
          <div className="modal-overlay"></div>
          <SignUp_Login
            onClose={handleCloseSignUpLogin}
            setShowSignUpLogin={setShowSignUpLogin}
            users={users}
            setUsers={setUsers}
            setUserLoggedIn={setUserLoggedIn}
          />
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
