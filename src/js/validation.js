export function validateForm(form) {
  let isValid = true;
  const errors = {
    name: '',
    email: '',
    phone: '',
    message: '',
  };

  const name = form.name.value.trim();
  if (!name) {
    errors.name = 'Поле "Имя" обязательно для заполнения.';
    isValid = false;
  }

  const email = form.email.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email) {
    errors.email = 'Поле "E-mail" обязательно для заполнения.';
    isValid = false;
  } else if (!emailPattern.test(email)) {
    errors.email = 'Некорректный адрес электронной почты.';
    isValid = false;
  }

  const phone = form.phone.value.trim();
  if (!phone) {
    errors.phone = 'Поле "Телефон" обязательно для заполнения.';
    isValid = false;
  }

  const message = form.message.value.trim();
  if (!message) {
    errors.message = 'Поле "Сообщение" обязательно для заполнения.';
    isValid = false;
  }

  displayErrors(errors);
  return isValid;
}

function displayErrors(errors) {
  for (const field in errors) {
    const errorField = document.getElementById(`${field}-error`);
    const inputField = document.getElementById(field);

    errorField.textContent = errors[field];
    if (errors[field]) {
      inputField.classList.add('error');
    } else {
      inputField.classList.remove('error');
    }

    clearErrorOnInput(inputField, errorField);
  }
}

function clearErrorOnInput(inputField, errorField) {
  inputField.addEventListener('input', () => {
    if (errorField.textContent) {
      errorField.textContent = '';
      inputField.classList.remove('error');
    }
  });
}
