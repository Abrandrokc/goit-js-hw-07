function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

const buttonChange = document.querySelector('.change-color');
const body = document.querySelector('body');
const span = document.querySelector('.color');

function changeColor() {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  span.textContent = newColor;
}

buttonChange.addEventListener('click', changeColor);
