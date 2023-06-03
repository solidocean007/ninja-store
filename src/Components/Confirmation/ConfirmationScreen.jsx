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
}) => {
  const [formVoltron, setFormVoltron] = useState(false);

  useEffect(() => {
    setShowSummary(false);
    setActiveCards({});

    const uniqueLions =
      [...new Set(cartItems.map((item) => item.name))].length === 5;

    setFormVoltron(uniqueLions);
  }, [cartItems, setShowSummary, setActiveCards]);

  const onFinish = () => {
    setStage(0);
    setCartItems([]);
    onClose();
  };

  const message = formVoltron ? 
    `Thank you ${userLoggedIn} for your order to save the Galaxy!` : 
    `You didn't save the Galaxy!  You failed to form Voltron!`;

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
      

      <h2>{message}</h2>
      <div>Your payment for ${fullTotal} has been processed.</div>
      <div>You ordered:</div>
      <div className="confirm-end">
        {cartItems.map((item) => (
          <div className="confirm-item" key={item.name}>
            <div className="confirm-image">
              <img src={item.image} alt={item.name} />
            </div>
            <h5>
              {item.name}: {item.quantity}
            </h5>
          </div>
        ))}
      </div>

      <ButtonBase onClick={onFinish} buttonTitle={formVoltron ? "Thank you!" : "Try again!"} />
    </div>
  );
};

export default ConfirmationScreen;
