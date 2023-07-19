function CartButton({
  userLoggedIn,
  setShowOrdering,
  setShowSignUpLogin,
  numberOfItems,
}) {
  // Go to ordering or go to SignUp/login
  const handleCartButtonOnClick = () => {
    userLoggedIn ? setShowOrdering(true) : setShowSignUpLogin(true);
  };

  return (
    <>
      <div className="cart-button-zone">
        <button onClick={handleCartButtonOnClick}>Cart</button>
        <div className="number-in-cart">{numberOfItems}</div>
      </div>
    </>
  );
}

export default CartButton;
