
const loginForm = document.querySelector('.login-form');
loginForm.addEventListener('submit', submitEvent);
function submitEvent(event) {
  event.preventDefault()
    
  const { elements: { email, password } } = event.currentTarget;
    
  if (email.value === "" || password.value === "") {
    alert('All fields must be filled in');
  } else {
    const formData = {
      email: email.value,
      password: password.value,
    };
    
    console.log(formData);
    event.currentTarget.reset()
  }
};