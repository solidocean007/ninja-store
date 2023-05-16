import React from "react";

function SignUpLogInButton({ title, setShowSignUpLogin, onClick }) {
  const handleClick = () => {
    if (onClick) {
      onClick(); // Call the onClick function if it's provided
    } else {
      setShowSignUpLogin(true); // Open the SignUp_Login component if onClick is not provided
    }
  };

  return (
    <button onClick={handleClick}>{title}</button>
  );
}

export default SignUpLogInButton;