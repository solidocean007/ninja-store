import { useState } from "react";
import SignUpLogInButton from "./SignUpLogInButton";
import CartButton from "./CartButton";
import SignUp_Login from "./SignUp_Login";
import Cart from "./Cart";
import Title from "./Title";
import ItemGrid from "./ItemGrid";
import Ordering from "./Ordering/Ordering";
import "./ShoppingModal.css";

function ShoppingModal() {
  const [users, setUsers] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState("");
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  
  const [showShipping, setShowShipping] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);

  const handleCloseSignUpLogin = () => {
    setShowSignUpLogin(false);
  };

  // Function to handle opening the cart modal
  const handleCartButtonOnClick = () => {
    setShowOrdering(true);
    // setShowCart(true);
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
          <div className="sign-up">
            <SignUpLogInButton
              title={buttonMessage}
              setShowSignUpLogin={setShowSignUpLogin}
              onClick={userLoggedIn ? signOutUser : null}
            />
          </div>
          <div className="cart-box">
            {cartItems.length > 0 ?  <CartButton onClick={handleCartButtonOnClick} /> : null}
            
          </div>
        </div>
      </div>

      <ItemGrid cartItems={cartItems} setCartItems={setCartItems} />

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

      {showOrdering && (
        <div className="ordering-modal">
          <Ordering 
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        </div>
      )}

      
    </div>
  );
}

export default ShoppingModal;
