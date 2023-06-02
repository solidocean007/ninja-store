import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import "./Ordering.css";
import ShippingModal from "../Shipping/ShippingModal";
import PaymentScreen from "../Payment/PaymentScreen";
import ConfirmationScreen from "../Confirmation/ConfirmationScreen";
import Summary from "../Summary/Summary";

const Ordering = ({ cartItems, setCartItems, onClose, userLoggedIn }) => {
  const [stage, setStage] = useState(0);
  const [formIsValid, setFormIsValid] = useState(false);
  const [subTotalBill, setSubTotalBill] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [method, setMethod] = useState("standard");
  const [fullTotal, setFullTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(true);

  const calculateBill = () => {
    return subTotalBill + shippingCost;
  };

  useEffect(() => {
    const subTotal = cartItems.reduce(
      (accumulator, { price, quantity }) => accumulator + price * quantity,
      0
    );

    setSubTotalBill(subTotal);
    setFullTotal(subTotal + shippingCost);
  }, [cartItems, shippingCost]);

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
            method={method}
            setMethod={setMethod}
            setShippingCost={setShippingCost}
          />
        );
      case 2:
        return (
          <PaymentScreen
            setStage={setStage}
            cartItems={cartItems}
            setCartItems={setCartItems}
            onClose={onClose}
            setFormIsValid={setFormIsValid}
            fullTotal={fullTotal}
          />
        );
      case 3:
        return (
          <ConfirmationScreen
            setShowSummary={setShowSummary}
            cartItems={cartItems}
            setCartItems={setCartItems}
            fullTotal={fullTotal}
            userLoggedIn={userLoggedIn}
          />
        );
      default:
        return null;
    }
  }

  return (
    <>
      <div className="order-window">
        <ProgressBar stage={stage} />

        <div className="order-summary">
        {renderStage()}

          {showSummary && (
            <Summary
              cartItems={cartItems}
              setCartItems={setCartItems}
              stage={stage}
              setStage={setStage}
              formIsValid={formIsValid}
              subTotalBill={subTotalBill}
              shippingCost={shippingCost}
              fullTotal={fullTotal}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default Ordering;
