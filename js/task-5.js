function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector('.widget');
const color = document.querySelector('.color');
const btnChange = document.querySelector('.change-color');

btnChange.addEventListener('click', event => {
  color.textContent = getRandomHexColor();
  body.style.background = color.textContent;
});
