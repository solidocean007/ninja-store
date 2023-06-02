import { useState } from "react";
import ButtonBase from "../ButtonBase/ButtonBase";
import "./Confirmation.css";

const ConfirmationScreen = ({
  setShowSummary,
  cartItems,
  setCartItems,
  fullTotal,
  userLoggedIn,
}) => {
  setShowSummary(false);

  const [formVoltron, setFormVoltron] = useState(false);

  const onFinish = () => {
    // Check if the user has bought one of each lion.
    const uniqueLions = [...new Set(cartItems.map((item) => item.name))];
    if (uniqueLions.length === 5) {
      setFormVoltron(true);
    } else {
      // Reset and close
      setStage(0);
      setCartItems([]);
      onClose();
    }
  };

  return (
    <div className="confirmation-block">
      {formVoltron && (
        <div className="video-container">
          <iframe
          src="https://www.youtube.com/embed/ChXy1Qtv9TE?autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      )}
      <h2>Thank you {userLoggedIn} for your order to save the Galaxy!</h2>
      <div>Your payment for ${fullTotal} has been processed.</div>
      <div>You ordered:</div>
      <div className="confirm-end">
        {cartItems.map((item) => (
          <div className="confirm-item" key={item.name}>
            <div className="confirm-image">
            <img src={item.image} alt={item.name} />
            </div>
            <h5>{item.name}: {item.quantity}</h5>
            
          </div>
        ))}
      </div>
      <ButtonBase onClick={onFinish} buttonTitle="Thank you!" />
      
    </div>
  )
};

export default ConfirmationScreen;
