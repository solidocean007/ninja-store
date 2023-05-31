function CartButton({ userLoggedIn, setShowOrdering, setShowSignUpLogin }) {
  // Go to ordering or go to SignUp/login
  const handleCartButtonOnClick = () => {
    userLoggedIn ? setShowOrdering(true) : setShowSignUpLogin(true);
  };

  return <button onClick={handleCartButtonOnClick}>Cart</button>;
}

export default CartButton;
