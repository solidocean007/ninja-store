export const validateCardInput = (name, value, inputs) => {
  let errorMessage = "";
  switch (name) {
    // other cases...
    case "cardHolderName":
      const nameRegex = /^[a-zA-Z\s]*$/;
      if (!value.match(nameRegex)) {
        errorMessage = "Name should only contain letters and spaces";
      }
      break;
    case "cardNumber":
      const cardNumberRegex = /^\d{16}$/; // or adjust as needed
      if (!value.match(cardNumberRegex)) {
        errorMessage = "Please enter a valid card number";
      }
      break;
    // similarly for the other card details
    default:
      break;
  }

  return errorMessage;
};
