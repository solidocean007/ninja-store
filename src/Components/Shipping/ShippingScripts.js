export const handleShippingMethod = (selectedMethod, setMethod, setShippingCost) => {
  setMethod(selectedMethod); // Update the shipping method state variable.
   const cost = selectedMethod === "express" ? 20 : 0;
   setShippingCost(cost);
};