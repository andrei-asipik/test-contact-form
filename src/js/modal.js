document.addEventListener('DOMContentLoaded', () => {
  const openModalButton = document.getElementById('open-modal');
  const closeModalButton = document.getElementById('close-modal');
  const modalOverlay = document.getElementById('modal-overlay');
  const body = document.body;

  openModalButton.addEventListener('click', () => {
    modalOverlay.classList.add('show');
    body.classList.add('modal-open');
  });

  closeModalButton.addEventListener('click', () => {
    modalOverlay.classList.remove('show');
    body.classList.remove('modal-open');
  });

  modalOverlay.addEventListener('click', (event) => {
    if (event.target === modalOverlay) {
      modalOverlay.classList.remove('show');
      body.classList.remove('modal-open');
    }
  });
});
