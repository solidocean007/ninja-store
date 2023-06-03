const initialInputs = {
  email: "",
  password: "",
  firstName: "",
  lastName: "",
  postalCode: "",
  WholeName: "",
  address: "",
  city: "",
};


export const handleFormSubmit = (event, { errors, inputs, setInputs, users, setUsers, setShowSignUpLogin, setUserLoggedIn, isSignUp }) => {
  event.preventDefault();
  const isValid = Object.values(errors).every((error) => error === "");
  if (isValid) {
    if(isSignUp){
      handleCreateAccount(
        inputs,
        setInputs,
        setUsers,
        setShowSignUpLogin,
        setUserLoggedIn
      );
    } else {
      handleUserLogin(
        inputs,
        setInputs,
        users,
        setShowSignUpLogin,
        setUserLoggedIn
      );
    }
  }
};


export const handleUserLogin = (inputs, setInputs, users, setShowSignUpLogin, setUserLoggedIn, setErrors) => {
  const { email, password } = inputs;
  const existingUser = users.find(user => user.email.toLowerCase() === email.toLowerCase());

  if (existingUser) {
    if (existingUser.password === password) {
      setUserLoggedIn(`${existingUser.firstName} ${existingUser.lastName}`);
      setShowSignUpLogin(false);
      setInputs(initialInputs);
    } else {
      setErrors(prevErrors => ({ ...prevErrors, password: "Incorrect password" }));
    }
  } else {
    setErrors(prevErrors => ({ ...prevErrors, email: "User not found" }));
  }
}

const handleCreateAccount = (
  inputs,
  setInputs,
  setUsers,
  setShowSignUpLogin,
  setUserLoggedIn
) => {
  const newUser = { ...inputs };

  setUsers((prevUsers) => [...prevUsers, newUser]);

  setInputs({
    email: "",
    password: "",
    passwordConfirm: "",
    firstName: "",
    lastName: "",
    postalCode: "",
    cartItems: "",
    totalBill: "",
  });

  setShowSignUpLogin(false);
  setUserLoggedIn(`${inputs.firstName} ${inputs.lastName}`);
};