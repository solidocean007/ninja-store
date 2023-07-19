export const handleCartUpdate = (item, cartItems, setCartItems) => {
  console.log(item, ' : item')
  const { imageUrl, name, price, inventory } = item;
  const existingItem = cartItems.find((cartItem) => cartItem.name === name);
  const updatedCart = existingItem
    ? cartItems.filter((cartItem) => cartItem.name !== name)
    : [...cartItems, { imageUrl: imageUrl, name: name, price: price, quantity: 1, inventory: inventory }];
  setCartItems(updatedCart);
};
