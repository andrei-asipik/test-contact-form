export async function sendFormData(form) {
  const url = 'http://localhost:9090/api/registration';
  const formData = new FormData(form);

  const data = {};
  formData.forEach((value, key) => {
    data[key] = value;
  });

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const result = await response.json();

    handleResponse(result, form);
  } catch (error) {
    alert('Ошибка соединения с сервером. Пожалуйста, попробуйте позже.');
  }
}

function handleResponse(response, form) {
  const status = response.status;

  if (status === 'success') {
    alert('Форма успешно отправлена и очищена. ответ сервера:' + response.msg);
    form.reset();
  } else if (status === 'error') {
    alert('Произошла ошибка: ' + response.message);
    console.log('Ошибка сервера:', response.message);
  }
}
