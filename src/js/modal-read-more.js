(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-read-more-open]"),
    closeModalBtn: document.querySelector("[data-modal-read-more-close]"),
    modal: document.querySelector("[data-modal-read-more]"),
  };

  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();