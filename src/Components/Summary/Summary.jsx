import { useState, useEffect } from "react";
import InputBase from '../InputBase.jsx';
import ButtonBase from "../ButtonBase/ButtonBase.jsx";

import './Summary.css';

const Summary = ({ cartItems, setCartItems, stage, setStage }) => {
  const [subTotalBill, setSubTotalBill] = useState(0);

  const getButtonTitle = () => {
    switch (stage) {
      case 0:
        return "Proceed to Shipping";
      case 1:
        return "Proceed to Payment";
      case 2:
        return "Finish Order";
      default:
        return "";
    }
  };

  useEffect(() => {
    setSubTotalBill(
      cartItems.reduce(
        (accumulator, { price, quantity }) => accumulator + price * quantity,
        0
      )
    );
  }, [cartItems, setSubTotalBill]);       

  return (
    <div className="cart-summary">
          <div>
            <div className="summary-header">Summary</div>
            <div className="promo-box">
              Promo: <InputBase />
              <button>Apply</button>
            </div>
            <div className="Sub-total">Subtotal: ${subTotalBill}</div>
          </div>
          <div>Shipping -</div>
          <div className="summary-proceed-btn">
            <ButtonBase onClick={() => setStage((stage) => stage + 1)} buttonTitle={getButtonTitle()} />
          </div>
        </div>
  );
}

export default Summary;