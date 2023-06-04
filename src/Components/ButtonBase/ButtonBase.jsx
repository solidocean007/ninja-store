const ButtonBase = ({ buttonTitle, disabled, onClick }) => {
  const handleClick = () => {
      onClick && onClick();
  }

  return (
      <button disabled={disabled} onClick={handleClick}>
          {buttonTitle}
      </button>
  )
}

export default ButtonBase;