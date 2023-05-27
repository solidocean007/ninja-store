import React from "react";
import ButtonBase from "../ButtonBase/ButtonBase";

const ConfirmationScreen = ({ onFinish }) => {

  return (
    <div className="confirmation-block">
      Confirmation
      <ButtonBase onClick={onFinish} buttonTitle="End" />
    </div>
  )
}

export default ConfirmationScreen;