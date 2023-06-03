import React from "react";

const SignUpLogInButton = ({
  userLoggedIn,
  setShowSignUpLogin,
  setUserLoggedIn,
}) => {
  const buttonMessage = userLoggedIn ? "Sign out" : "Sign up / Login";

  const handleClick = () => {
    userLoggedIn ? setUserLoggedIn("") : setShowSignUpLogin(true);
  };

  return <button onClick={handleClick}>{buttonMessage}</button>;
};

export default SignUpLogInButton;
