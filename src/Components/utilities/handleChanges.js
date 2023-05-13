export const handleInputData = (
  event,
  inputs,
  setInputs,
  setErrors,
  validateInput
) => {
  const { name, value } = event.target;
  const validationError = validateInput(name, value, inputs);
  setInputs((oldValues) => ({ ...oldValues, [name]: value }));
  setErrors((prevErrors) => ({ ...prevErrors, [name]: validationError }));
  return validationError;
};

export function handleQuantityChange(setCart, index, newQuantity) {
  setCart((prevCart) => {
    const updatedCart = [...prevCart];
    newQuantity >= 0
      ? (updatedCart[index].quantity = newQuantity)
      : updatedCart;
    return updatedCart;
  });
}

export const handleCreateAccount = (inputs, setInputs, users, setUsers) => {
  const newUser = { ...inputs };

  setUsers((prevUsers) => [...prevUsers, newUser]);
  console.log("Current users:", users);

  // Reset the inputs state to clear the form
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
  console.log("Current state:", inputs);
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
