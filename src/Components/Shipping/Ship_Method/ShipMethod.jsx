const ShipMethod = ({ handleShippingMethod, method, setMethod, setStage, stage }) => {

  const handleChange = (e) => {
    setMethod(e.target.value);
    handleShippingMethod(e.target.value);
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="radio"
            value="standard"
            checked={method === "standard"}
            onChange={handleChange}
          />
          Standard Shipping
        </label>
      </div>
      <div>
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
      <button onClick={() => setStage(stage - 1)}>Back to Cart</button>
    </div>
  );
};

export default ShipMethod;
