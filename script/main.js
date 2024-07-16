import { score, results, dogQuizQuestions } from "./data.js";
import { getQuizArray } from "./quizFuncs.js";
import { getTestScoreObject } from "./debug.js";

// getTestScoreObject(score, dogQuizQuestions, 1000);

let quizArray = [];
let choices = [];
let userScore = {};
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

function startQuiz() {
  modal.style.display = "flex";
  blurNodes(".container");

  quizArray = getQuizArray(dogQuizQuestions);
  choices = [];
  idx = 0;
  quizButtonHandler();
  quiz.replaceChildren(quizArray[0]);
}

function exitQuiz() {
  modal.style.display = "none";
  unBlurNodes(".container");
}

function nextQuizQuestion() {
  idx++;
  quizButtonHandler();
  quiz.replaceChildren(quizArray[idx]);
}

function previousQuizQuestion() {
  idx--;
  quizButtonHandler();
  quiz.replaceChildren(quizArray[idx]);
}

function finishQuiz() {
  exitQuiz();
  userScore = choices.reduce((score, dogString) => {
    for (const dog of dogString.split(", ")) {
      score[dog] += 1;
    }
    return score;
  }, score);
  console.log(userScore);
}

function quizButtonHandler() {
  if (
    !choices.includes(undefined) &&
    choices.length === dogQuizQuestions.length
  ) {
    finish.style.display = "block";
  }

  if (idx === 0) {
    previous.style.display = "none";
  } else {
    previous.style.display = "block";
  }

  if (quizArray[idx + 1] === undefined) {
    next.style.display = "none";
  } else {
    next.style.display = "block";
  }
}

function quizHandler(event) {
  if (event.target.tagName === "INPUT") {
    choices[idx] = dogQuizQuestions[idx].values[event.target.value];
    quizButtonHandler();
  }
}

dogBtn.addEventListener("click", startQuiz);
modalClose.addEventListener("click", exitQuiz);

quiz.addEventListener("click", quizHandler);

previous.addEventListener("click", previousQuizQuestion);
next.addEventListener("click", nextQuizQuestion);
finish.addEventListener("click", finishQuiz);
