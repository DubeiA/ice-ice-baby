(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-hero-open]"),
    closeModalBtn: document.querySelector("[data-hero-close]"),
    modal: document.querySelector("[data-hero-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();