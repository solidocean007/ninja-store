import { useState } from "react";
import { handleInputData } from "./utilities/handleChanges";
import { handleCreateAccount } from "./utilities/handleChanges";
import { inputData } from "./data";
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

  const [error, setError] = useState({});

  const handleBlur = ({ target: { name, value }}) => {
    // call validation function and update error state
    const validationError = validateInput(name, value);
    setError((prevErrors) => ({ ...prevErrors, [name]: validationError }));
  };

  const handleInput = (event) => {
    // call handleInputData function with validation function
    handleInputData(event, setInputs, validateInput);
  };

  // define validation function
  const validateInput = (name, value) => {
    // validate input and return error message, if any
    // return null if input is valid
  };

  return (
    <div className="login-modal" id="sign-up-login-modal">
      <div className="logInOptions">
        <h3>Login</h3>
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
                onChange={handleInput}
                name={item.name}
                onBlur={handleBlur}
                error={error}
                errormessage={
                  error && error[item.error] ? error[item.error] : null
                  }
              />
            ))
          : null}
        <div >
        <button>CREATE ACCOUNT</button>
        </div>
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
