(() => {
  const refs = {
    openModalBtns: document.querySelectorAll('[data-modal-ingredients-open]'),
    closeModalBtn: document.querySelector('[data-modal-ingredients-close]'),
    modal: document.querySelector('[data-modal-ingredients]'),
  };

  refs.openModalBtns.forEach(btn => btn.addEventListener('click', toggleModal));
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    document.body.classList.toggle('modal-open-ingredients');
    refs.modal.classList.toggle('is-hidden');
  }
})();
