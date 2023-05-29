import React, { useState } from "react";
import InputBase from "../InputBase";
import { handleInput } from "../utilities/handleChanges";
import { validateCardInput } from "./PaymentScript";

const PaymentScreen = () => {
  const [errors, setErrors] = useState({});
  const [paymentInputs, setPaymentInputs] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardExpMonth: "",
    cardExpYear: "",
    cardCVV: "",
  });

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const validationError = validateCardInput(name, value, paymentInputs);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationError }));
  };

  return (
    <div className="payment-info">
      <h2>Payment Information</h2>

      <form>
        <div className="form-group">
          <label>Card Holder Name</label>
          <InputBase
            value={paymentInputs.cardHolderName}
            onChange={handleInput(setPaymentInputs)}
            name="cardHolderName"
            onBlur={handleBlur}
          />
          {errors.cardHolderName && <div className="error-div">{errors.cardHolderName}</div>}
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
