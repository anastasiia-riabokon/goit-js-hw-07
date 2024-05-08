function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');

function createBoxes(amount) {
  if (typeof amount !== 'number' || amount < 1 || amount > 100) {
    return alert('Error! Enter a number from 1 to 100');
  }
}
