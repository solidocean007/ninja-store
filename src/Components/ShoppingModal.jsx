import { useState } from "react";
import SignUpLoginButton from "./SignUpLoginButton";
import CartButton from "./CartButton";
import SignUp_Login from "./SignUp_Login";
import InputBase from "./InputBase";
import data from "./data";
import './ShoppingModal.css';
import { toggleSignUpLogin } from "./utilities/handleChanges";

function ShoppingModal() {
  
  const [Cart, setCart] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showSignUpLogin, setShowSignUpLogin] = useState(false);

  const handleSignUpLoginClick = () => {
    setShowSignUpLogin(!showSignUpLogin);
    toggleSignUpLogin();
  }

  return (
    <div className="store-front">
      <div className="login-header">
        <div className="title-block"><h1>Voltron</h1></div>
        <div className="login-block">
          <div className="sign-up btn"><SignUpLoginButton onClick={handleSignUpLoginClick} /></div>
          <div className="cart-box btn"><CartButton /></div>
        </div>  
      </div>

      <div className="featured-items">
        {data.map((item, index) => (
          <div className='item-container' key={index}>
            <div className="image-box">
              <img
                src={item.image}
                alt={item.name}
                style={{
                  width: item.size?.width,
                  height: item.size?.height
                }}
                />
            </div>
            <div className="lion-header">
            <h2>{item.name}</h2>
            </div>
            <div className="lion-price">
            <h1>{item.price}</h1>
            <button>Add to Cart</button>
            </div>

          </div>
        ))}
      </div>
      {showSignUpLogin && (
        <div>
          <div className="modal-overlay"></div>
          <SignUp_Login onClose={() => setShowSignUpLogin(false)} />
        </div>
      )}
    </div>
  );
}

export default ShoppingModal;
