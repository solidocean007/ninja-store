import React, { useState, useEffect } from 'react';
import { inputData } from './data';
import { handleCreateAccount, validateInput } from './utilities/handleChanges';
import InputBase from './InputBase';
import './SignUp_Login.css';

function SignUp_Login({ onClose, setShowSignUpLogin, users, setUsers }){
  
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    firstName: '',
    lastName: '',
    postalCode: '',
  });

  const [errors, setErrors] = useState({});
  const [isSignUp, setIsSignUp] = useState(true);

  useEffect(() => {
    console.log("Updated users:", users);
  }, [users]);

  const handleBlur = ({ target: { name, value } }) => {
    const validationError = validateInput(name, value, inputs, users);
    setErrors((prevErrors) => ({ ...prevErrors, [name]: validationError }));
  };

  const handleInput = (event) => {
    const { name, value } = event.target;
    setInputs((oldValues) => ({ ...oldValues, [name]: value }));
  };
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const isValid = Object.values(errors).every((error) => error === '');
    if (isValid) {
      handleCreateAccount(inputs, setInputs, setUsers, setShowSignUpLogin);
    }
  };

  const toggleMode = () => {
    setIsSignUp((prevMode) => !prevMode);
    setInputs({
      email: '',
      password: '',
      passwordConfirm: '',
      firstName: '',
      lastName: '',
      postalCode: '',
    });
    setErrors({});
  };
  
  return (
    <div className="auth-modal" id="sign-up-login-modal">
      <div className="logInOptions">
        <h3>{isSignUp ? 'Create Account' : 'Login'}</h3>
        <button onClick={onClose}>CLOSE</button>
      </div>

      <form onSubmit={handleFormSubmit}>
        {inputData.map((item) => {
          if (!isSignUp && item.name === 'passwordConfirm') {
            return null;
          }

          return (
            <InputBase
              className={item.className}
              key={item.name}
              placeholder={item.label}
              type={item.type}
              value={inputs[item.name]}
              onChange={handleInput}
              name={item.name}
              onBlur={handleBlur}
              error={errors[item.name]}
            />
          );
        })}

        <div className="btn-wrapper">
          <input type="submit" value={isSignUp ? 'Create Account' : 'Login'} />
        </div>
      </form>

      <div className="switch-mode">
        {isSignUp ? (
          <>
            Already have an account?{' '}
            <button onClick={toggleMode}>Switch to Login</button>
          </>
        ) : (
          <>
            Don't have an account?{' '}
            <button onClick={toggleMode}>Switch to Sign Up</button>
          </>
        )}
      </div>
    </div>
  );
}

export default SignUp_Login;

