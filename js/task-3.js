const input = document.getElementById('name-input');
const textOutput = document.getElementById('name-output');

input.addEventListener('input', event => {
  const inputValue = event.currentTarget.value.trim();
  textOutput.textContent = inputValue || 'Anonymous';
});
