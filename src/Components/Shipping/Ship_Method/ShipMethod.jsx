import './ShipMethod.css'

const ShipMethod = ({ handleShippingMethod, method, setMethod, setStage }) => {

  const handleChange = (e) => {
    setMethod(e.target.value);
    handleShippingMethod(e.target.value);
  };

  return (
    <div className='ship-method'>
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
