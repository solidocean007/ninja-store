import { useState, useEffect } from "react";
import Cart from "../Cart/Cart";
import ProgressBar from "../ProgressBar/ProgressBar";
import ShippingModal from "../Shipping/ShippingModal";
import PaymentScreen from "../Payment/PaymentScreen";
import ConfirmationScreen from "../Confirmation/ConfirmationScreen";
import Summary from "../Summary/Summary";
import "./Ordering.css";

const Ordering = ({
  cartItems,
  setCartItems,
  onClose,
  userLoggedIn,
  stage,
  setStage,
  setActiveCards,
}) => {
  const [subTotalBill, setSubTotalBill] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [method, setMethod] = useState("standard");
  const [fullTotal, setFullTotal] = useState(0);
  const [showSummary, setShowSummary] = useState(true);
  const [lastFourCardNumbers, setLastFourCardNumbers] = useState('');

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
            method={method}
            setMethod={setMethod}
            setShippingCost={setShippingCost}
            setStage={setStage}
            stage={stage}
          />
        );
      case 2:
        return (
          <PaymentScreen
            setStage={setStage}
            fullTotal={fullTotal}
            setLastFourCardNumbers={setLastFourCardNumbers}
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
            setStage={setStage}
            onClose={onClose}
            setActiveCards={setActiveCards}
            lastFourCardNumbers={lastFourCardNumbers}
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
