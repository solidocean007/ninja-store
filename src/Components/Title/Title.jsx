import SignUpLogInButton from "../SignUp_Login/SignUp_Login_Button/SignUpLogInButton";
import CartButton from "../Cart/CartButton";
import './Title.css'
const Title = ({
  userLoggedIn,
  setShowSignUpLogin,
  setUserLoggedIn,
  setShowOrdering,
  stage,
  cartItems,
}) => {
  return (
    <div className="title-block">
      <div className="header-trim"></div>
      <div className="logo-block">
      <img src={new URL('../../assets/voltron-logo.png', import.meta.url).href} />

      </div>
      <div className="login-header">
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
              {stage === 0 && cartItems.length > 0 ? (
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
    </div>
  );
};

export default Title;
