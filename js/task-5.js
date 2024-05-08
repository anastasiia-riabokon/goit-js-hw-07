function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  body: document.querySelector('.widget'),
  color: document.querySelector('.color'),
  btnChange: document.querySelector('.change-color'),
};

ref.btnChange.addEventListener('click', () => {
  ref.color.textContent = getRandomHexColor();
  ref.body.style.backgroundColor = ref.color.textContent;
});
