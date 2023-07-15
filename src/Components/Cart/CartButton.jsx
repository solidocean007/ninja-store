function CartButton({ userLoggedIn, setShowOrdering, setShowSignUpLogin, numberOfItems }) {
  // Go to ordering or go to SignUp/login
  const handleCartButtonOnClick = () => {
    userLoggedIn ? setShowOrdering(true) : setShowSignUpLogin(true);
  };

  return <><button onClick={handleCartButtonOnClick}>Cart</button><div className="number-in-cart">{numberOfItems}</div></>;
}

export default CartButton;
