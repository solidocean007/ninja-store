import { useState, useEffect } from "react";
import InputBase from "../Input/InputBase.jsx";
import ButtonBase from "../ButtonBase/ButtonBase.jsx";
import "./Summary.css";

const Summary = ({
  cartItems,
  setCartItems,
  stage,
  setStage,
  subTotalBill,
  shippingCost,
  fullTotal,
}) => {
  const [promoCode, setPromoCode] = useState("");
  const [discount, setDiscount] = useState(0);

  const handlePromoApply = () => {
    if (promoCode === "GAC10") {
      setDiscount(0.1);
    }
  };

  const finalCart = () => {
    const thisCart = cartItems.filter(item => item.quantity > 0);
    setCartItems(thisCart);
  }

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

  return (
    <div className="cart-summary">
      <div className="cart-contents">
        {cartItems.map((item) => (
           item.quantity > 0 ? 
            <div className="summary-item" key={item.name}>
              <div className="item-img">
                <img src={item.imageUrl} alt={item.name} />
              </div>
              <div className="item-details">
                {[`${item.name}`, `qty ${item.quantity}`, `${item.price}`].map((item) => <h5 key={item}>{item}</h5>)}
              </div>
              <div className="item-subTotal">${(parseFloat(item.price.replace('$', '')) * item.quantity).toFixed(2)}</div>
            </div> 
            : null
        ))}
      </div>

      <div className="summary-details">
        <div className="promo-box">
          <h5>Promo: </h5>
          <InputBase
            value={promoCode}
            onChange={(e) => setPromoCode(e.target.value)}
          />
          <button onClick={handlePromoApply}>Apply</button>
        </div>
        <div className="Sub-total">Subtotal: ${subTotalBill - discount}</div>
        <div>{`Shipping: ${
          shippingCost > 0 ? `$${shippingCost}` : "Free"
        }`}</div>
        <div>Total: ${fullTotal}</div>
      </div>
      <div className="summary-proceed-btn">
        {stage !== 2 && (
          <ButtonBase
            onClick={() => {
              finalCart();
              setStage(stage + 1);
              window.scrollTo(0, 0);
            }}
            buttonTitle={getButtonTitle()}
          />
        )}
      </div>
    </div>
  );

};

export default Summary;
