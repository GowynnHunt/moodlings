import { score, results, dogQuizQuestions } from "./data.js";
import { getQuizArray } from "./quizFuncs.js";

let quizArray = [];
let idx = 0;

const dogBtn = document.querySelector("#dog-btn");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".modal-close");
const quiz = document.querySelector("#quiz");

const previous = document.querySelector("#previous");
const next = document.querySelector("#next");
const finish = document.querySelector("#finish");

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

  quizArray = getQuizArray(dogQuizQuestions);
  quiz.replaceChildren(quizArray[0]);
}

function closeModal() {
  modal.style.display = "none";
  unBlurNodes(".container");
}

function nextQuizQuestion() {
  if (quizArray[idx + 1] === undefined) {
    return;
  } else {
    idx += 1;
    quiz.replaceChildren(quizArray[idx]);
  }
}

function previousQuizQuestion() {
  if (quizArray[idx - 1] === undefined) {
    return;
  } else {
    idx -= 1;
    quiz.replaceChildren(quizArray[idx]);
  }
}

dogBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);

previous.addEventListener("click", previousQuizQuestion);
next.addEventListener("click", nextQuizQuestion);
// finish.addEventListener("click", finishQuiz);
