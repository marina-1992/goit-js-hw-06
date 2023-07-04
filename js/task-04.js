
const value = document.querySelector('#value');
const decBtn = document.querySelector('button[data-action="decrement"]');
const incBtn = document.querySelector('button[data-action="increment"]');

let counterValue = 0;
const actionDecrement = ((event) =>{
  counterValue -= 1;
  value.textContent = counterValue;
});
const actionIncrement = ((event) =>{
  counterValue += 1;
  value.textContent = counterValue;
});
decBtn.addEventListener('click', actionDecrement);
incBtn.addEventListener('click', actionIncrement);
