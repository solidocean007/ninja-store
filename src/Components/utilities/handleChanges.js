export function handleQuantityChange(setCart, index, newQuantity) {
  setCart((prevCart) => {
    const updatedCart = [...prevCart];
    newQuantity >= 0
      ? (updatedCart[index].quantity = newQuantity)
      : updatedCart;
    return updatedCart;
  });
}

export const handleCreateAccount = (inputs, setInputs, setUsers, setShowSignUpLogin, setUserLoggedIn) => {
  const newUser = { ...inputs };

  setUsers((prevUsers) => [...prevUsers, newUser]);
  
  setInputs({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    postalCode: "",
    cartItems: "",
    totalBill: "",
  });
  
  setShowSignUpLogin(false);
  setUserLoggedIn(`${inputs.firstName} ${inputs.lastName}`);

};

export const validateInput = (name, value, inputs, users) => {
  let errorMessage = "";

  switch (name) {
    case "email":
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!value.match(emailRegex)) {
        errorMessage = "Please enter a valid email address";
      } else {
        const emailInput = value.toLowerCase();
        const duplicateEmail = users.find((user) => user.email.toLowerCase() === emailInput);

        if(duplicateEmail){
          errorMessage = "User email is already in use";
        }
      }
      break;
    case "password":
      const passwordRegex = /^.{8,}$/;
      if (!value.match(passwordRegex)) {
        errorMessage =
          "Password must contain at least 8 characters, including at least one letter and one number";
      }
      break;
    case "passwordConfirm":
      const password = inputs.password;
      if (value !== password) {
        errorMessage = "Passwords do not match";
      }
      break;
    case "firstName":
      const firstNameRegex = /^[a-zA-Z]*$/;
      if (!value.match(firstNameRegex)) {
        errorMessage = "First name should only contain alphabets";
      }
      break;
    case "lastName":
      const lastNameRegex = /^[a-zA-Z]*$/;
      if (!value.match(lastNameRegex)) {
        errorMessage = "Last name should only contain alphabets";
      }
      break;
    case "postalCode":
      const postalCodeRegex = /^\d+$/;
      if (!value.match(postalCodeRegex)) {
        errorMessage = "Postal code should only contain numbers";
      }
      break;
    default:
      break;
  }

  return errorMessage;
};
