import "./ShipMethod.css";

const ShipMethod = ({ handleShippingMethod, method, setMethod, setStage, setShippingCost }) => {
  const handleChange = (e) => {
    const selectedMethod = e.target.value;
    setMethod(selectedMethod);
    handleShippingMethod(selectedMethod, setMethod, setShippingCost);
  };

  return (
    <div className="ship-method">
      <div className="ship-option">
        <label>
          <input
            type="radio"
            value="standard"
            checked={method === "standard"}
            onChange={handleChange}
          />
          Standard Shipping is Free!
        </label>
      </div>
      <div className="ship-option">
        <label>
          <input
            type="radio"
            value="express"
            checked={method === "express"}
            onChange={handleChange}
          />
          Express Shipping (+$20)
        </label>
      </div>
      <button onClick={() => setStage(0)}>Back to Cart</button>
    </div>
  );
};

export default ShipMethod;
