import React from "react";

const ButtonBase = ({ onClick, buttonTitle, disabled }) => {

  return (
    <button onClick={onClick} disabled={disabled}>
      {buttonTitle}
    </button>
  )
}

export default ButtonBase;