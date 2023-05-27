import React, { useState } from "react";
import "./ShippingModal.css";
import ButtonBase from "../ButtonBase/ButtonBase";
import InputBase from "../InputBase";
import { countries } from "./shipping_data";
import { states } from "./state_data";

const ShippingModal = ({ onClick }) => {
  const [addressInputs, setAddressInputs] = useState({
    Name: '',
    Address: '',
    ZipCode: '',
    CellPhone: '',
    HomePhone: '',
    })

  // const [expressShip, setExpressShip] = useState(false);

  return (
    <div className="shipment-modal">
      <div className="shipping-title">SHIPPING INFORMATION</div>
      <div className="shipping-details">
        <h4>Name</h4>
        <InputBase />
        <h4>Address</h4>
        <InputBase />
        <div className="region-details">
          <h4>Zip Code</h4>
          <InputBase />
          <h4>Country</h4>
          <select name="country" id="country">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.name}
              </option>
            ))}
          </select>
        </div>
        <h4>City</h4>
        <InputBase />
        <h4>State</h4>
          <select name="state" id="state">
            {states.map((state) => (
              <option key={state.code} value={state.code}>
                {state.name}
              </option>
            ))}
          </select>
      </div>
      Shipping Information
      <ButtonBase onClick={onClick} buttonTitle="Continue" />
    </div>
  );
};

export default ShippingModal;
