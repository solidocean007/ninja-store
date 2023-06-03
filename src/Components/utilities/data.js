import redLion from '../../assets/Red-Lion.png'; // adjust path if necessary
import blueLion from '../../assets/Blue-Lion.png'; // adjust path if necessary
import blackLion from '../../assets/Black-Lion.PNG'; // adjust path if necessary
import greenLion from '../../assets/Green-Lion.PNG'; // adjust path if necessary
import yellowLion from '../../assets/Yellow-Lion.PNG'; // adjust path if necessary


export const data = [
  {
    name: "Red Lion",
    image: redLion,
    price: 300,
  },
  {
    name: "Blue Lion",
    image: blueLion,
    price: 350,
  },
  {
    name: "Black Lion",
    image: blackLion,
    price: 500,
  },
  ,
  {
    name: "Green Lion",
    image: greenLion,
    price: 250,
  },
  {
    name: "Yellow Lion",
    image: yellowLion,
    price: 275,
  },
];

export const inputData = [
  {
    className: "email-input",
    id: 'email',
    label: "Your email address",
    value: "email",
    name: "email",
    type: "text",
    error: "email",
  },
  {
    className: "password-input",  
    id: 'password',
    label: "Create a password",
    name: "password",
    type: "password",
    value: "",
    error: "password",
  },
  {
    className: "passwordConfirm-input",  
    id: 'passwordConfirm',
    label: "Confirm your password",
    name: "passwordConfirm",
    value: "",
    type: "password",
    error: "confirmPasswordError",
  },
  {
    className: "firstName-input",  
    id: 'firstName',
    label: "First Name",
    name: "firstName",
    value: "",
    type: "text",
    error: "firstName",
  },
  {
    className: "lastName-input",  
    id: 'lastName',
    label: "Last Name",
    name: "lastName",
    value: "",
    type: "text",
    error: "lastName",
  },
  {
    className: "postalCode-input",  
    label: "Postal code",
    name: "postalCode",
    value: "",
    type: "text",
    error: "postalCode",
  },
];
