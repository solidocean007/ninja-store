export const data = [
  {
    name: "Blue Lion",
    image: new URL('../../assets/Blue-Lion.png', import.meta.url),
    price: 350,
  },
  {
    name: "Red Lion",
    image: new URL('../../assets/Red-Lion.png', import.meta.url),
    price: 300,
  },
  {
    name: "Black Lion",
    image: new URL('../../assets/Black-Lion.png', import.meta.url),
    price: 500,
  },
  {
    name: "Green Lion",
    image: new URL('../../assets/Green-Lion.png', import.meta.url),
    price: 250,
  },
  {
    name: "Yellow Lion",
    image: new URL('../../assets/Yellow-Lion.png', import.meta.url),
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
