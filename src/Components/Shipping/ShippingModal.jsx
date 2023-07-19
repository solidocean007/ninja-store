import React, { useState } from "react";
import "./ShippingModal.css";
import InputBase from "../Input/InputBase";
import { handleInput, validateInput } from "../utilities/handleChanges";
import { handleShippingMethod } from "./ShippingScripts";
import { countries } from "./shipping_data";
import { states } from "./state_data";
import { address_data } from "./address_data";
import ShipMethod from "./Ship_Method/ShipMethod";

const ShippingModal = ({
  method,
  setMethod,
  setShippingCost,
  setStage,
  stage,
  ...otherProps
}) => {
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

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Create an object to hold the new errors
    let newErrors = {};

    // Validate each input field
    Object.keys(addressInputs).forEach((inputName) => {
      const inputValue = addressInputs[inputName];

      // The validateInput function returns a string error message or an empty string if there is no error
      const validationResult = validateInput(
        inputName,
        inputValue,
        addressInputs
      );

      // If there is an error, add it to the newErrors object
      if (validationResult) {
        newErrors[inputName] = validationResult;
      }
    });

    // Update the errors state
    setErrors(newErrors);

    // If there are no errors, proceed to the next stage
    if (Object.keys(newErrors).length === 0) {
      // console.log('stage', stage);
      setStage(2);
      console.log("stage", stage);
    }
  };

  const arr = [
    { id: "country", data: countries },
    { id: "state", data: states },
  ];

  return (
    <div className="shipment-modal">
      <div className="shipping-title">SHIPPING INFORMATION</div>

      <form onSubmit={handleSubmit}>
        <div className="shipping-details">
          {address_data.map((input) => {
            return (
              <div className="address-details" key={input.name}>
                <label htmlFor="">{input.label}</label>
                <InputBase
                  value={addressInputs[input.name]}
                  onChange={handleInput(setAddressInputs)}
                  name={input.name}
                  type={input.type}
                />
                {errors[input.name] && (
                  <div className="error-div">{errors[input.name]}</div>
                )}
              </div>
            );
          })}
          <div className="region-details">
            {arr.map((item) => (
              <>
                <h4>{item.id[0].toUpperCase() + item.id.slice(1)}</h4>
                <select
                  name={item.id}
                  id={item.id}
                  value={addressInputs[item.id]}
                  onChange={handleInput(setAddressInputs)}
                >
                  {item.data.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </>
            ))}
          </div>
        </div>
        <button type="submit" style={{ display: "none" }}>
          Submit
        </button>
      </form>
      <div className="ship-method-panel">
        <ShipMethod
          handleShippingMethod={handleShippingMethod}
          method={method}
          setMethod={setMethod}
          setStage={setStage}
          setShippingCost={setShippingCost}
        />
      </div>
    </div>
  );
};

export default ShippingModal;
