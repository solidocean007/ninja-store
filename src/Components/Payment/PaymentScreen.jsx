import React, { useState } from "react";
import InputBase from "../InputBase";
import { handlePaymentSubmit, handleInput } from "../utilities/handleChanges";
import { validateCardInput } from "./PaymentScript";
import "./PaymentStyles.css";

const PaymentScreen = ({ setStage }) => {
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

  const cardMonth = Array.from({ length: 12 }, (_, i) => i + 1);

  let currentYear = new Date().getFullYear();
  let years = Array.from({ length: 20 }, (_, i) => currentYear + i);

  return (
    <div className="payment-info">
      <h2>Payment Information</h2>

      <form onSubmit={(event) => handlePaymentSubmit(event, { errors, setPaymentInputs, setErrors, setStage })}>

        <div className="form-group">
          <div className="cardForm-field">
            <label html='cardHolderName'>Card Holder Name</label>
            <InputBase
              value={paymentInputs.cardHolderName}
              onChange={handleInput(setPaymentInputs)}
              name="cardHolderName"
              id="cardHolderName"
              onBlur={handleBlur}
            />
            {errors.cardHolderName && (
              <div className="error-div">{errors.cardHolderName}</div>
            )}
          </div>
          <div className="cardForm-field">
            <label html='cardNumber'>Card number</label>
            <InputBase
              value={paymentInputs.cardNumber}
              onChange={handleInput(setPaymentInputs)}
              name="cardNumber"
              id="cardNumber"
              onBlur={handleBlur}
            />
            {errors.cardNumber && (
              <div className="error-div">{errors.cardNumber}</div>
            )}
          </div>
          <div className="cardForm-field">
            <label htmlFor="expiry-month">Month</label>
            <select
              name="cardExpMonth"
              id="expiry-month"
              value={paymentInputs.cardExpMonth}
              onChange={handleInput(setPaymentInputs)}
              onBlur={handleBlur}
            >
              <option value="">Month</option>
              {cardMonth.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="cardForm-field">
            <label htmlFor="expiry-year">Year</label>
            <select
              name="cardExpYear"
              id="expiry-year"
              value={paymentInputs.cardExpYear}
              onChange={handleInput(setPaymentInputs)}
              onBlur={handleBlur}
            >
              <option value="">Year</option>
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
          <div className="cardForm-field">
            <label htmlFor="cardCVV">CVV</label>
            <InputBase
              value={paymentInputs.cardCVV}
              onChange={handleInput(setPaymentInputs)}
              name="cardCVV"
              id="cardCVV"
              onBlur={handleBlur}
            />
            {errors.cardCVV && (
              <div className="error-div">{errors.cardCVV}</div>
            )}
          </div>
        </div>
        <div className="submit-panel">
          <input type="submit" value="Pay" />
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
