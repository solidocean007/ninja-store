import { useState } from 'react'
import InputBase from './InputBase'
import './SignUp_Login.css';

function SignUp_Login() {
  const [inputs, setInputs] = useState({
    email: '',
    password: '',
    userName: '',
    zip: '',
    cartItems: '',
    totalBill: '',
  })

  console.log('Initial state:', inputs);

  const handleInputData = (event) => {
    const { name, value } = event.target;
    setInputs((oldValues) => ({...oldValues, [name]: value}));
  };

  const handleCreateAccount = (event) => {
    event.preventDefault();
    console.log('Current state:', inputs);
    }
  
  

  // handleBlur = ({ target: { name, value }}) => this.handleValidations(name, value); 

  const inputData = [
    { label: 'Your email address', name: 'email', type: 'text', error: 'emailError'},
    { label: 'Create a password', name: 'password', type: 'text', error: 'passwordError'},
    { label: 'Confirm your password', name: 'passwordConfirm', type: 'text', error: 'confirmPasswordError'},
    { label: 'Your Name', name: 'userName', type: 'text', error: 'nameError'},
    { label: 'Zip code', name: 'zip', type: 'text', error: 'zipError'},
  ]

  return (
    <div className='login-modal'>
      <div className='logInOptions'>
      <button>SIGN IN</button>
      <button>CREATE ACCOUNT</button>
      </div>
      
      <form onSubmit={handleCreateAccount}>
        { inputData.length
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
          : null
        }
        <div className='btn-wrapper'>
          <input type="submit" value='Save' />
        </div>
        <div className='btn-wrapper'>
          <input type="submit" value='Facebook' />
        </div>
      </form>

    </div>
  )
};

export default SignUp_Login
