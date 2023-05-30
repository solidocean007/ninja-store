import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Ordering.css";
import ShippingModal from "../Shipping/ShippingModal";
import PaymentScreen from "../Payment/PaymentScreen";
import ConfirmationScreen from "../Confirmation/ConfirmationScreen";
import Summary from "../Summary/Summary";

const Ordering = ({ cartItems, setCartItems, onClose }) => {
  const [stage, setStage] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);
  const [subTotalBill, setSubTotalBill] = useState(0);

  useEffect(() => {
    setSubTotalBill(
      cartItems.reduce(
        (accumulator, { price, quantity }) => accumulator + price * quantity,
        0
      )
    );
  }, [cartItems, setSubTotalBill]);

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
            setFormIsValid={setFormIsValid}
          />
        );
      case 2:
        return (
          <PaymentScreen
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={onClose}
            setFormIsValid={setFormIsValid}
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
        <div className="stage-panel">{renderStage()}</div>
      </div>
      <div className="summary-window">
        <Summary
          cartItems={cartItems}
          setCartItems={setCartItems}
          stage={stage}
          setStage={setStage}
          formIsValid={formIsValid}
          subTotalBill={subTotalBill}
        />
      </div>
    </div>
  );
};

export default Ordering;
