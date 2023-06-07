import React, { useState } from "react";
import InputBase from "../Input/InputBase";
import { handlePaymentSubmit, handleInput } from "../utilities/handleChanges";
import { validateCardInput } from "./PaymentScript";
import "./PaymentStyles.css";

const PaymentScreen = ({ setStage, fullTotal, setLastFourCardNumbers }) => {
  const [errors, setErrors] = useState({});
  const [paymentInputs, setPaymentInputs] = useState({
    cardHolderName: "",
    cardNumber: "",
    cardExpMonth: "",
    cardExpYear: "",
    cardCVV: "",
  });

  const formatCardNumber = (cardNumber) => {
    let formattedNumber = cardNumber
      .replace(/\W/gi, "")
      .replace(/(.{4})/g, "$1 ");

    if (formattedNumber.trim().length > 19) {
      formattedNumber = formattedNumber.trim().substr(0, 19);
    }

    return formattedNumber;
  };

  const handleCardNumberChange = (e) => {
    handleInput(setPaymentInputs)({
      target: { name: e.target.name, value: e.target.value.replace(/\s/g, '') },
    });
  };

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

      <form
        onSubmit={(event) =>
          handlePaymentSubmit(event, {
            errors,
            paymentInputs,
            setPaymentInputs,
            setErrors,
            setStage,
            setLastFourCardNumbers
          })
        }
      >
        <div className="form-group">
          <div className="cardForm-field">
            <label html="cardHolderName">Card Holder Name</label>
            <InputBase
              value={paymentInputs.cardHolderName}
              onChange={handleInput(setPaymentInputs)}
              name="cardHolderName"
              id="cardHolderName"
              onBlur={handleBlur}
              required
            />
            {errors.cardHolderName && (
              <div className="error-div">{errors.cardHolderName}</div>
            )}
          </div>
          <div className="cardForm-field">
            <label html="cardNumber">Card number</label>
            <InputBase
              value={formatCardNumber(paymentInputs.cardNumber)}
              onChange={handleCardNumberChange}
              name="cardNumber"
              id="cardNumber"
              onBlur={handleBlur}
              required
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
              required
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
              required
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
              required
            />
            {errors.cardCVV && (
              <div className="error-div">{errors.cardCVV}</div>
            )}
          </div>
        </div>
        <div className="submit-panel">
          <input type="submit" value={`Pay $${fullTotal}`} />
          <button onClick={() => setStage(1)}>Back to Shipping</button>
        </div>
      </form>
    </div>
  );
};

export default PaymentScreen;
