export const handleInput = (setInputs) => (event) => {
  const { name, value } = event.target;
  setInputs((oldValues) => ({ ...oldValues, [name]: value }));
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

export const handleCreateAccount = (
  inputs,
  setInputs,
  setUsers,
  setShowSignUpLogin,
  setUserLoggedIn
) => {
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
        const duplicateEmail = users.find(
          (user) => user.email.toLowerCase() === emailInput
        );

        if (duplicateEmail) {
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
        errorMessage = "First name should only contain letters";
      }
      break;
    case "lastName":
      const lastNameRegex = /^[a-zA-Z]*$/;
      if (!value.match(lastNameRegex)) {
        errorMessage = "Last name should only contain letters";
      }
      break;
    case "postalCode":
      const postalCodeRegex = /^\d+$/;
      if (!value.match(postalCodeRegex)) {
        errorMessage = "Postal code should only contain numbers";
      }
      break;
    case "WholeName":
      const WholeNameRegex = /^[a-zA-Z\s]*$/;
      if (!value.match(WholeNameRegex)) {
        errorMessage = "Full name should only contain letters";
      }
      break;
    case "address":
      const StreetAddressRegex = /^[\w\d\s]+$/;
      if (!value.match(StreetAddressRegex)) {
        errorMessage = "Address only accepts numbers and letters";
      }
      break;
    case "city":
      const cityRegex = /^[a-zA-Z]*$/;
      if (!value.match(cityRegex)) {
        errorMessage = "City only accepts letters";
      }
      break;
    default:
      break;
  }

  return errorMessage;
};

export const handleFormSubmit = (event) => {
  event.preventDefault();
  const isValid = Object.values(errors).every((error) => error === "");
  if (isValid) {
    handleCreateAccount(
      inputs,
      setInputs,
      setUsers,
      setShowSignUpLogin,
      setUserLoggedIn
    );
  }
};
