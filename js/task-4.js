const loginForm = document.querySelector(".login-form");
loginForm.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;

  if (email === "" || password === "") {
      alert("All form fields must be filled in");
      return;
  }

  const dataForm = {
    emailInput: email,
    passwordInput: password
  };
  console.log(dataForm);
  loginForm.reset();
}