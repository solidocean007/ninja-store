export const data = [
  {
    name: 'Red Lion',
    image: 'src/assets/Red-Lion.png',
    price: 300,
  },
  {
    name: 'Blue Lion',
    image: 'src/assets/blue-lion.PNG',
    price: 350,
    size: {
      width: 300,
      height: 'auto',
    }
  },
  {
    name: 'Black Lion',
    image: 'src/assets/Black-Lion.PNG',
    price: 500,
  },
  ,
  {
    name: 'Green Lion',
    image: 'src/assets/Green-Lion.PNG',
    price: 250,
  },
  {
    name: 'Yellow Lion',
    image: 'src/assets/Yellow-Lion.PNG',
    price: 275,
  },
]

export const inputData = [
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
    value: "",
    error: "passwordError",
  },
  {
    label: "Confirm your password",
    name: "passwordConfirm",
    value: "",
    type: "text",
    error: "confirmPasswordError",
  },
  { label: "Your Name", name: "userName", type: "text", error: "nameError" },
  { label: "Zip code", name: "zip", type: "text", error: "zipError" },
];
