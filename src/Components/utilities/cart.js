export const handleCartUpdate = (item, cartItems, setCartItems) => {
  const { imageUrl, name, price } = item;
  const existingItem = cartItems.find((cartItem) => cartItem.name === name);
  const updatedCart = existingItem
    ? cartItems.filter((cartItem) => cartItem.name !== name)
    : [...cartItems, { imageUrl: imageUrl, name: name, price: price, quantity: 1 }];
  setCartItems(updatedCart);
};
