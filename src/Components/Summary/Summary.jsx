import { useState, useEffect } from "react";
import InputBase from '../InputBase.jsx';
import ButtonBase from "../ButtonBase/ButtonBase.jsx";

const Summary = ({ cartItems, setStage }) => {
  const [subTotalBill, setSubTotalBill] = useState(0);

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
          <div><ButtonBase onClick={() => setStage((stage) => stage + 1)} buttonTitle={'Checkout'} /></div>
        </div>
  );
}

export default Summary;