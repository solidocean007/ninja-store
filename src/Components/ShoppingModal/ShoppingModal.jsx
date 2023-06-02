import { useState } from "react";
import SignUpLogInButton from "../SignUpLogInButton";
import CartButton from "../Cart/CartButton";
import SignUp_Login from "../SignUp_Login";
import Title from "../Title";
import ItemGrid from "../ItemGrid";
import Ordering from "../Ordering/Ordering";
import "./ShoppingModal.css";

function ShoppingModal() {
  const [users, setUsers] = useState([]); // For holding names of users
  const [cartItems, setCartItems] = useState([]);
  const [userLoggedIn, setUserLoggedIn] = useState(""); // The name of the current user logged in.
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);
  const [showOrdering, setShowOrdering] = useState(false);

  return (
    <div className="store-front">
      <div className="login-header">
      <Title title="Voltron" />
       
        <div className="header-details">
        {userLoggedIn && (
          <div className="user-block">Welcome {userLoggedIn}</div>
        )}
        <div className="login-block">
          <div className="sign-up">
            <SignUpLogInButton
              userLoggedIn={userLoggedIn}
              setShowSignUpLogin={setShowSignUpLogin}
              setUserLoggedIn={setUserLoggedIn}
            />
          </div>
          <div className="cart-box">
            {cartItems.length > 0 ? (
              <CartButton
                userLoggedIn={userLoggedIn}
                setShowOrdering={setShowOrdering}
                setShowSignUpLogin={setShowSignUpLogin}
              />
            ) : null}
          </div>
        </div>
        </div>
        
      </div>

      <ItemGrid cartItems={cartItems} setCartItems={setCartItems} />

      {showSignUpLogin && !userLoggedIn && (
        <div className="login-signUp-modal">
          <div className="modal-overlay"></div>
          <SignUp_Login
            setShowSignUpLogin={setShowSignUpLogin}
            users={users}
            setUsers={setUsers}
            setUserLoggedIn={setUserLoggedIn}
          />
        </div>
      )}

      {showOrdering && userLoggedIn && (
        <div className="modal-overlay">
          <Ordering
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={() => setShowOrdering(false)}
            userLoggedIn={userLoggedIn}
          />
        </div>
      )}
    </div>
  );
}

export default ShoppingModal;
