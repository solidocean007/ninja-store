import { useState } from "react";
import Cart from "../Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Ordering.css";
import ShippingModal from "../Shipping/ShippingModal";
import PaymentScreen from "../Payment/PaymentScreen";
import ConfirmationScreen from "../Confirmation/ConfirmationScreen";
import Summary from "../Summary/Summary";

const Ordering = ({ cartItems, setCartItems, onClose }) => {
  const [stage, setStage] = useState(0);

  function renderStage() {
    switch (stage) {
      case 0:
        return (
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={onClose}
          />
        );
      case 1:
        return (
          <ShippingModal
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={onClose}
          />
        );
      case 2:
        return (
          <PaymentScreen
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={onClose}
          />
        );
      case 3:
        return <ConfirmationScreen onFinish={onFinish} />;
      default:
        return null;
    }
  }

  const onFinish = () => {
    console.log("finish");
    setStage(0);
    setCartItems([]);
    onClose();
  };

  return (
    <div className="order-window">
      <div className="stage-window">
        <ProgressBar stage={stage} />
        <div>{renderStage()}</div>
      </div>
      <div className="summary-window">
        <Summary
          cartItems={cartItems}
          setCartItems={setCartItems}
          setStage={setStage}
        />
      </div>
    </div>
  );
};

export default Ordering;
