import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";

const PaymentScreen = ({ onClick }) => {

  return (
    <div className="payment-block">
      Payment
      <ButtonBase onClick={onClick} buttonTitle="Confirm" />
    </div>
  )
}

export default PaymentScreen;