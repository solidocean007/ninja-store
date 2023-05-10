export const handleInputData = (event, setInputs, validateInput) => {
  const { name, value } = event.target;
  const isValid = validateInput(name, value);
  if (isValid) {
    setInputs((oldValues) => ({...oldValues, [name]: value}));
  }
};

export function handleQuantityChange(setCart, index, newQuantity) {
  setCart(prevCart => {
    const updatedCart = [...prevCart];
    newQuantity >= 0 ? updatedCart[index].quantity = newQuantity : updatedCart;
    return updatedCart;
  });
}

export const handleCreateAccount = (event) => {
  event.preventDefault();
  console.log("Current state:", inputs);
};