import React, { useState } from "react";
import "./ShippingModal.css";
import ButtonBase from "../ButtonBase/ButtonBase";
import InputBase from "../InputBase";
import { handleInput, validateInput } from '../utilities/handleChanges'
import { countries } from "./shipping_data";
import { states } from "./state_data";
import { address_data } from "./address_data";

const ShippingModal = ({ onClick }) => {
  const [errors, setErrors] = useState({});
  const [addressInputs, setAddressInputs] = useState({
    WholeName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
  });
  

  const [expressShip, setExpressShip] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.values(errors).every((error) => error === '');
    if (isValid) {
    }
  };

  const handleBlur = ({ target: { name, value } }) => {
    const validationError = validateInput(name, value, inputs, users);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationError }));
  };

  return (
    <div className="shipment-modal">
      <div className="shipping-title">SHIPPING INFORMATION</div>

      <form onSubmit={handleFormSubmit}>
      <div className="shipping-details">
        
        {address_data.map((input) => {
          return (
            <div className="address-details" key={input.name}>
              <label htmlFor="">{input.label}</label>
              <InputBase
              key={input.name}
              value={addressInputs[input.name]}
              onChange={handleInput(setAddressInputs)}
              name={input.name}
              onBlur={handleBlur}
              type={input.type}
              error={errors[input.name]}
            />
            </div>
            
          )
        })}
        <div className="region-details">
          <h4>Country</h4>
          <select name="country" id="country">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>

          <h4>State</h4>
        <select name="state" id="state">
          {states.map((state) => (
            <option key={state.code} value={state.code}>
              {state.name}
            </option>
          ))}
        </select>
        </div>
      </div>
      </form>
      
    </div>
  );
};

export default ShippingModal;
