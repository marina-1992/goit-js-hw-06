
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const { elements: { email, password } } = event.currentTarget;
  if (email.value === "" || password.value === "") {
    alert('All fields must be filled in')
  } console.log(`Login : ${email.value}, Password : ${password.value}`);
  event.currentTarget.reset()
});