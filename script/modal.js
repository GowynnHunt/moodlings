import { startQuiz } from "./quiz.js";

const modal = document.querySelector(".modal");

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
