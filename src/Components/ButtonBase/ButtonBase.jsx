import React from "react";

const ButtonBase = ({ onClick, buttonTitle }) => {

  return (
    <button onClick={onClick}>
      {buttonTitle}
    </button>
  )
}

export default ButtonBase;