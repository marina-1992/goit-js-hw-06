
const inputForm = document.querySelector('#validation-input');
inputForm.addEventListener('blur', onBlur);
const inputLength = Number(inputForm.dataset.length);
function onBlur() {
  if (inputForm.value.length === inputLength) {
    inputForm.classList.add('valid')
    inputForm.classList.remove('invalid')
  } else {
    inputForm.classList.add('invalid')
    inputForm.classList.remove('valid')}
   
}
