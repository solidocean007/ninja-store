export function toggleSignUpLogin() {
  const signupLoginModal = document.getElementById("signup-login-modal");
  if (signupLoginModal) {
    signupLoginModal.classList.toggle("show");
  }
}

export const handleInputData = (event) => {
  const { name, value } = event.target;
  setInputs((oldValues) => ({...oldValues, [name]: value}));
};

export function handleQuantityChange(setCart, index, newQuantity) {
  console.log('Index:', index)
  console.log('newQuantity: ', newQuantity)
  setCart(prevCart => {
    const updatedCart = [...prevCart];
    updatedCart[index].quantity = newQuantity;
    return updatedCart;
    console.log(JSON.stringify(updatedCart) + ' : updatedCart after quantity change');
  });
}

