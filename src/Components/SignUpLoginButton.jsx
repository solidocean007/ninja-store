import React from "react";


function SignUpLogInButton(props) {
  return (
    <button onClick={props.setShowSignUpLogin}>Login / Sign up</button>
  );
}

export default SignUpLogInButton;