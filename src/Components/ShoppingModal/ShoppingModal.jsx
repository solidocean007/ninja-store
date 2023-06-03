import { useState } from "react";
import SignUp_Login from "../SignUp_Login/SignUp_Login";
import Title from "../Title/Title";
import ItemGrid from "../ItemGrid/ItemGrid";
import Ordering from "../Ordering/Ordering";
import "./ShoppingModal.css";

import blackLion from '../../assets/Black-Lion.PNG'; 
import voltronCard from '../../assets/legendary-voltron.jpg'; 

function ShoppingModal({
  showOrdering,
  setShowOrdering,
  showSignUpLogin,
  setShowSignUpLogin,
  userLoggedIn,
  setUserLoggedIn,
  users,
  setUsers,
  cartItems,
  setCartItems,
  stage,
  setStage,
}) {
  const [activeCards, setActiveCards] = useState({});

  return (
    <div className="store-front">
      <div className="test-image">
        <img src={blackLion} alt="" />
      </div>
      <div className="test-image">
        <img src={voltronCard} alt="" />
      </div>
      <Title
        userLoggedIn={userLoggedIn}
        setShowSignUpLogin={setShowSignUpLogin}
        setUserLoggedIn={setUserLoggedIn}
        setShowOrdering={setShowOrdering}
        stage={stage}
        cartItems={cartItems}
      />

      <ItemGrid
        cartItems={cartItems}
        setCartItems={setCartItems}
        activeCards={activeCards}
        setActiveCards={setActiveCards}
      />

      {showSignUpLogin && !userLoggedIn && (
        <div className="modal-overlay">
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
            stage={stage}
            setStage={setStage}
            setActiveCards={setActiveCards}
          />
        </div>
      )}
    </div>
  );
}

export default ShoppingModal;
