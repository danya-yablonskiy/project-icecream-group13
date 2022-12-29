(() => {
  const refs = {
    openModalBtns: document.querySelectorAll("[data-modal-locations-open]"),
    closeModalBtn: document.querySelector("[data-modal-locations-close]"),
    modal: document.querySelector("[data-modal-locations]"),
  };
  
  refs.openModalBtns.forEach(btn=>btn.addEventListener("click", toggleModal));
  refs.closeModalBtn.addEventListener("click", toggleModal);
  
  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();