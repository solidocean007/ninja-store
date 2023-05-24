export const handleCartUpdate = ({ image, name, price }, cartItems, setCartItems) => {
  const existingItem = cartItems.find((cartItem) => cartItem.name === name);
  const updatedCart = existingItem
    ? cartItems.filter((cartItem) => cartItem.name !== name)
    : [...cartItems, { image: image, name: name, price: price, quantity: 1}];
    setCartItems(updatedCart);
}

// Function to handle closing the cart modal
export const handleCloseCart = () => {
  setShowCart(false);
};