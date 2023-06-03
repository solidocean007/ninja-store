export const validateInput = (name, value, inputs, users, isSignUp) => {
  let errorMessage = "";
  switch (name) {
    case "email":
      const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
      if (!value.match(emailRegex)) {
        errorMessage = "Please enter a valid email address";
      } else {
        const emailInput = value.toLowerCase();
        const existingUser = users.find(
          (user) => user.email.toLowerCase() === emailInput
        );

        if (isSignUp) {
          if (existingUser) {
            errorMessage = "User email is already in use";
          }
        } else {
          if (!existingUser) {
            errorMessage = "Email not found";
          }
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
      if (isSignUp) {
        const password = inputs.password;
        if (value !== password) {
          errorMessage = "Passwords do not match";
        }
      }
      break;
    // ... rest of the cases.
  }

  return errorMessage;
};

export const handleInput = (setInputs) => (event) => {
  const { name, value } = event.target;
  if (name === "cardCVV" && value.length > 4) {
    return;
  }

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

export const handlePaymentSubmit = (
  event,
  { errors, paymentInputs, setPaymentInputs, setErrors, setStage, setLastFourCardNumbers }
) => {
  event.preventDefault();
  const isValid = Object.values(errors).every((error) => error === "");
  if (isValid) {
    const lastFour = paymentInputs.cardNumber.slice(-4);
    setLastFourCardNumbers(lastFour); // assuming setLastFourDigits is passed as a prop
    // process payment logic would go here.

    // clear payment input states
    setPaymentInputs({
      cardHolderName: "",
      cardNumber: "",
      cardExpMonth: "",
      cardExpYear: "",
      cardCVV: "",
    });

    // clear errors
    setErrors({});
    setStage((stage) => stage + 1);
  }
};
