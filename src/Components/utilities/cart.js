export const handleCartUpdate = ({ image, name, price }, cart, setCart) => {
  const existingItem = cart.find((cartItem) => cartItem.name === name);
  const updatedCart = existingItem
    ? cart.filter((cartItem) => cartItem.name !== name)
    : [...cart, { image: image, name: name, price: price, quantity: 1}];
    setCart(updatedCart);
}