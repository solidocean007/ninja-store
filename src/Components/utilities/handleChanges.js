export function toggleSignUpLogin() {
  const signupLoginModal = document.getElementById("signup-login-modal");
  if (signupLoginModal) {
    signupLoginModal.classList.toggle("show");
  }
}

export const handleInputData = (event) => {
  const { name, value } = event.target;
  setInputs((oldValues) => ({...oldValues, [name]: value}));
};