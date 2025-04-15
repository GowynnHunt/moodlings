const aboutModal = document.querySelector("#About");
const aboutUsButton = document.querySelector('footer a[href="#About"]');

const themeSwitcher = document.querySelector("#theme-switcher");
themeSwitcher.addEventListener("click", () => {
  return
})

aboutUsButton.addEventListener("click", () => toggleModal(aboutModal));
aboutModal.addEventListener("click", (e) => {
  if (e.target.id == "About") {
    toggleModal(aboutModal)
  }
});

function toggleModal(modal) {
  modal.style.display = modal.style.display == "" ? "flex" : ""
}
