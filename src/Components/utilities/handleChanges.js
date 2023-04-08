// handleChanges.js

export function toggleSignUpLogin() {
  const signupLoginModal = document.getElementById("signup-login-modal");
  if (signupLoginModal) {
    signupLoginModal.classList.toggle("show");
  }
}
