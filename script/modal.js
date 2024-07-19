import { startQuiz } from "./quiz.js";

const modal = document.querySelector(".modal");
const modalContent = document.querySelector(".modal-content");

export function blurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(2.5px)";
  }
}

export function unBlurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(0)";
  }
}

export function openModal() {
  modal.style.display = "flex";
  blurNodes(".container");
  this.id === "dog-btn" ? startQuiz() : null;
}

export function closeModal() {
  modal.style.display = "none";
  unBlurNodes(".container");
}

export function modalDisplay(...nodes) {
  modalContent.replaceChildren(nodes);
}

export function getModalHeading(heading) {
  const div = document.createElement("div");
  div.className = "modal-header";

  const heading = document.createElement("h1");
  heading.textContent = heading;
  heading.className = "heading-shadow";

  const close = document.createElement("button");
  close.className = "modal-close";
  close.textContent = `&times;`;

  return div;
}
