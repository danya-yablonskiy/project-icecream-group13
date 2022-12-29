(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-franchise-open]"),
    closeModalBtn: document.querySelector("[data-modal-franchise-close]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };
  
  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();