import React, { useState } from "react";
import "./ShippingModal.css";
import InputBase from "../InputBase";
import { handleInput, validateInput } from "../utilities/handleChanges";
import { countries } from "./shipping_data";
import { states } from "./state_data";
import { address_data } from "./address_data";

const ShippingModal = ({setFormIsValid, ...otherProps}) => {

  console.log(setFormIsValid, " : setFormIsValid")
  

  const [errors, setErrors] = useState({});
  const [addressInputs, setAddressInputs] = useState({
    WholeName: "",
    address: "",
    city: "",
    postalCode: "",
    phone: "",
    country: "US",
    state: "",
  });

  const [expressShip, setExpressShip] = useState(false);

  const handleBlur = (event) => {
    const { name, value } = event.target;
    const validationError = validateInput(name, value, addressInputs);
  
    setErrors((prevErrors) => {
      const updatedErrors = { ...prevErrors, [name]: validationError };
  
      // Check if all fields are filled and have no errors
      const allFieldsFilled = Object.values(addressInputs).every((input) => input !== "");
      const noErrors = Object.values(updatedErrors).every((error) => error === "");
  
      // If all fields are filled and there are no errors, the form is valid
      setFormIsValid(allFieldsFilled && noErrors);
  
      return updatedErrors;
    });
  };
  
  

  return (
    <div className="shipment-modal">
      <div className="shipping-title">SHIPPING INFORMATION</div>

      {/* <form onSubmit={handleFormSubmit}> */}
      <form>
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
                />
                {errors[input.name] && (
                  <div className="error-div">{errors[input.name]}</div>
                )}
              </div>
            );
          })}
          <div className="region-details">
            <h4>Country</h4>
            <select
              name="country"
              id="country"
              value={addressInputs.country}
              onChange={handleInput(setAddressInputs)}
            >
              {countries.map((country) => (
                <option key={country.code} value={country.code}>
                  {country.name}
                </option>
              ))}
            </select>

            <h4>State</h4>
            <select
              name="state"
              id="state"
              value={addressInputs.state}
              onChange={handleInput(setAddressInputs)}
            >
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
