import { questions } from "./questions.js";

const DOG = {
  Sunny: 0,
  Rainy: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Charlie: 0,
};

const dogBtn = document.querySelector("#corgi-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");

function blurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(2.5px)";
  }
}

function unBlurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(0)";
  }
}

function openModal() {
  modal.style.display = "flex";
  blurNodes(".container");
}

function closeModal() {
  modal.style.display = "none";
  unBlurNodes(".container");
}

dogBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

// Not sure if I want this behavior on second thought
// modal.addEventListener("click", (event) => {
//   if (event.target.className === "modal") {
//     closeModal();
//   }
// });
