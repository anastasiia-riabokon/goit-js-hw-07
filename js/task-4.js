const registerForm = document.querySelector('.login-form');

function onFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const valueEmail = form.elements.email.value;
  const valuePassword = form.elements.password.value;

  if (valueEmail.trim() === '' || valuePassword.trim() === '') {
    return alert('All form fields must be filled in');
  } else {
    const dataUser = {
      email: valueEmail,
      password: valuePassword,
    };
    console.log(dataUser);
  }

  form.reset();
}

registerForm.addEventListener('submit', onFormSubmit);
