import { useState, useEffect } from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import "./Confirmation.css";

const ConfirmationScreen = ({
  setShowSummary,
  cartItems,
  setCartItems,
  fullTotal,
  userLoggedIn,
  setStage,
  onClose,
  setActiveCards,
  lastFourCardNumbers,
}) => {

  useEffect(() => {
    setShowSummary(false);
    setActiveCards({});
  }, []);
  
  const onFinish = () => {
    setStage(0);
    setCartItems([]);
    onClose();
  };

  return (
    <div className="confirmation-block">
      
      <h2>Thank you for your order!</h2>
      <div>Your payment for ${fullTotal} has been processed using card ending with {lastFourCardNumbers}.</div>
      <div>You ordered:</div>
      <div className="confirm-end">
        {cartItems.map((item) => (
          <div className="confirm-item" key={item.name}>
            <div className="confirm-image">
              <img src={item.imageUrl} alt={item.name} />
            </div>
            <h5>
              {item.name}: {item.quantity}
            </h5>
          </div>
        ))}
      </div>

      <ButtonBase
        onClick={onFinish}
        buttonTitle={"Thank you!"}
      />
    </div>
  );
};

export default ConfirmationScreen;
