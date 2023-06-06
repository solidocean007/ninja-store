export const handleShippingMethod = (selectedMethod, setMethod) => {
  setMethod(selectedMethod); // Update the shipping method state variable.
  if (selectedMethod === "express") {
    setShippingCost(20);
  } else {
    setShippingCost(0);
  }
};