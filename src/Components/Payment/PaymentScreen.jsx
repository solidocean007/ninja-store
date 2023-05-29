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

  const cardMonth = Array.from({ length: 12 }, (_, i) => i + 1);

  let currentYear = new Date().getFullYear();
  let years = Array.from({ length: 20 }, (_, i) => currentYear + i);

  return (
    <div className="payment-info">
      <h2>Payment Information</h2>

      <form>
        <div className="form-group">
          <div className="card-holder-div">
            <label>Card Holder Name</label>
            <InputBase
              value={paymentInputs.cardHolderName}
              onChange={handleInput(setPaymentInputs)}
              name="cardHolderName"
              onBlur={handleBlur}
            />
            {errors.cardHolderName && (
              <div className="error-div">{errors.cardHolderName}</div>
            )}
          </div>
          <div className="card-number-div">
            <label>Card number</label>
            <InputBase
              value={paymentInputs.cardNumber}
              onChange={handleInput(setPaymentInputs)}
              name="cardNumber"
              onBlur={handleBlur}
            />
            {errors.cardHolderName && (
              <div className="error-div">{errors.cardHolderName}</div>
            )}
          </div>
          <div className="card-month-expiry-div">
            <label htmlFor="expiry-month">Month</label>
            <select
              name="expiry-month"
              id="expiry-month"
              value={paymentInputs.cardExpMonth}
              onChange={handleInput(setPaymentInputs)}
            >
              {cardMonth.map((month, index) => (
                <option key={index} value={month}>
                  {month}
                </option>
              ))}
            </select>
          </div>

          <div className="card-year-expiry-div">
            <label htmlFor="expiry-year">Year</label>
            <select
              name="expiry-year"
              id="expiry-year"
              value={paymentInputs.cardExpYear}
              onChange={handleInput(setPaymentInputs)}
            >
              {years.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
