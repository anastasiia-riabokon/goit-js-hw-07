const registerForm = document.querySelector('.login-form');

registerForm.addEventListener('submit', event => {
  event.preventDefault();
  const form = event.target;
  const valueEmail = form.elements.email.value;
  const valuePassword = form.elements.password.value;
  let dataUser = {};

  valueEmail.trim() === '' || valuePassword.trim() === ''
    ? alert('All form fields must be filled in')
    : (dataUser = {
        email: valueEmail,
        password: valuePassword,
      });

  console.log(dataUser);
  form.reset();
});
