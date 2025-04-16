const root = document.querySelector(':root');
const rootStyles = getComputedStyle(root);

// Toggles modal if the modal exists
function toggleModal(modal) {
  if (modal == null || modal == undefined) {
    console.log(`That Modal doesn't exist yet.\nIt's value is ${modal}.`);
    return;
  }
  modal.style.display = modal.style.display == "" ? "flex" : "";
  modal.classList.toggle("fade");
  modal.firstElementChild.classList.toggle("bouncy");
}

// Clicking outside of a modal closes it
document.querySelectorAll("modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.id == modal.id) {
      toggleModal(modal);
    }
  });
});

// Footer links open respective modal
document.querySelectorAll("footer > a").forEach((a) => {
  if (a.hasAttribute("href") && a.getAttribute("href") != "") {
    a.addEventListener("click", () => {
      toggleModal(document.querySelector(a.getAttribute("href")));
    });
  }
});

// Modal Header links change color when activated
// const links = document.querySelectorAll(".modal-header a");
// links.forEach((link) => link.addEventListener("click", () => {
//   // Clear other highlighted links
//   links.forEach((link) => (link.style.backgroundColor = "transparent"));
//   // Highlight clicked link
//   link.style.backgroundColor = rootStyles.getPropertyValue("--accent");
// }))
