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
        <div className="video-container" style={{ position: "relative", paddingBottom: "56.25%", height: "0", overflow: "hidden", maxWidth: "100%", marginBottom: "20px" }}>
          <iframe
          src="https://www.youtube.com/embed/ChXy1Qtv9TE?autoplay=1"
          title="YouTube video player"
          width="560"
          height="315"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        </div>
      )}
      <h2>Thank you {userLoggedIn} for your order to save the Galaxy!</h2>
      <div>Your payment for ${fullTotal} has been processed.</div>
      <div>You ordered:</div>
      <div className="confirm-items">
        {cartItems.map((item) => (
          <div key={item.name}>
            <div className="confirm-image">
            <img src={item.image} alt={item.name} />
            </div>
            <h5>{item.name}</h5>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <ButtonBase onClick={onFinish} buttonTitle="Thank you!" />
      
    </div>
  )
};

export default ConfirmationScreen;
