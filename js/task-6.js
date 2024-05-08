function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  input: document.querySelector('input'),
  divBoxes: document.querySelector('#boxes'),
  btnCreate: document.querySelector('[data-create]'),
  btnDestroy: document.querySelector('[data-destroy]'),
};

function createBoxes(amount) {
  if (typeof amount !== 'number' || amount < 1 || amount > 100) {
    ref.input.value = '';
    return alert('Error! Enter a number from 1 to 100');
  }

  ref.divBoxes.innerHTML = '';

  for (let i = 0; i < amount; i += 1) {
    const divElement = document.createElement('div');
    const size = 30 + i * 10;
    divElement.style.width = `${size}px`;
    divElement.style.height = `${size}px`;
    divElement.style.backgroundColor = getRandomHexColor();
    ref.divBoxes.appendChild(divElement);
  }
  ref.input.value = '';
}

ref.btnCreate.addEventListener('click', () => {
  const amount = +ref.input.value;
  createBoxes(amount);
});

function destroyBoxes() {
  ref.divBoxes.innerHTML = '';
  ref.input.value = '';
}

ref.btnDestroy.addEventListener('click', destroyBoxes);
