import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";

const ConfirmationScreen = () => {

  const onFinish = () => {
    console.log("finish");
    setStage(0);
    setCartItems([]);
    onClose();
  };

  return (
    <div className="confirmation-block">
      Confirmation
      <ButtonBase onClick={onFinish} buttonTitle="End" />
    </div>
  )
}

export default ConfirmationScreen;