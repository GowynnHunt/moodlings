import { questions } from "./quiz.js";

const DOG = {
  Sunny: 0,
  Rainy: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Charlie: 0,
};

const dogQuiz = document.querySelector("#corgi-btn");
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

dogQuiz.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
  blurNodes(".container");
});

modalClose.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
  unBlurNodes(".container");
});
