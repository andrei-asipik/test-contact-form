import Inputmask from 'inputmask';
import { validateForm } from './validation';
import { sendFormData } from './ajax';

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const phoneInput = document.getElementById('phone');

  const im = new Inputmask('+7 (999) 999-99-99');
  im.mask(phoneInput);

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const isValid = validateForm(form);

    if (isValid) {
      await sendFormData(form);
    }
  });
});
