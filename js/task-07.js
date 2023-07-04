// Напиши скрипт, який реагує на зміну значення input#font-size-control
// (подія input) і змінює інлайн - стиль span#text, оновлюючи властивість font - size.
// В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

// <input id="font-size-control" type="range" min="16" max="96" />
// <br />
// <span id="text">Abracadabra!</span>
const inputControl = document.querySelector('#font-size-control');
const textSize = document.querySelector('#text')
const controlSizeText = () => {
  textSize.style.fontSize = `${inputControl.value}.px`
}
inputControl.addEventListener('input', controlSizeText);