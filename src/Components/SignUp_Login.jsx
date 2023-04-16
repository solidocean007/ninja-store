import { useState } from "react";
import { handleInputData } from "./utilities/handleChanges";
import InputBase from "./InputBase";
import "./SignUp_Login.css";

function SignUp_Login({ onClose }) {
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
    userName: "",
    zip: "",
    cartItems: "",
    totalBill: "",
  });

  const handleCreateAccount = (event) => {
    event.preventDefault();
    console.log("Current state:", inputs);
  };

  // handleBlur = ({ target: { name, value }}) => this.handleValidations(name, value);

  const inputData = [
    {
      label: "Your email address",
      name: "email",
      type: "text",
      error: "emailError",
    },
    {
      label: "Create a password",
      name: "password",
      type: "text",
      error: "passwordError",
    },
    {
      label: "Confirm your password",
      name: "passwordConfirm",
      type: "text",
      error: "confirmPasswordError",
    },
    { label: "Your Name", name: "userName", type: "text", error: "nameError" },
    { label: "Zip code", name: "zip", type: "text", error: "zipError" },
  ];

  return (
    <div className="login-modal" id="signup-login-modal">
      <div className="logInOptions">
        <button>SIGN IN</button>
        <button>CREATE ACCOUNT</button>
        <button onClick={onClose}>CLOSE</button>
      </div>

      <form onSubmit={handleCreateAccount}>
        {inputData.length
          ? inputData.map((item) => (
              <InputBase
                key={item.name}
                placeholder={item.label}
                type={item.type}
                value={inputs[item.name]}
                onChange={handleInputData}
                name={item.name}
                // onBlur={handleBlur}
                // error={error}
                // errorMessage={
                //   (error
                //     && error[item.error]
                //     && error[item.error].length > 1)
                //     ? error[item.error]
                //     : null
                //   }
              />
            ))
          : null}
        <div className="btn-wrapper">
          <input type="submit" value="Save" />
        </div>
        <div className="btn-wrapper">
          <input type="submit" value="Facebook" />
        </div>
      </form>
    </div>
  );
}

export default SignUp_Login;
