export const handleCartUpdate = ({ name, price }, cart, setCart) => {
  const existingItem = cart.find((cartItem) => cartItem.name === name);
  const updatedCart = existingItem
    ? cart.filter((cartItem) => cartItem.name !== name)
    : [...cart, { name: name, price: price, quantity: 1}];
    setCart(updatedCart);
}