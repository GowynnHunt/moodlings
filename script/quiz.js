import { dogQuizQuestions, results, score, tieBreaker } from "./data.js";
import { closeModal, modalDisplay, getModalHeading } from "./modal.js";

let choices = [];
let quizArray = [];
let userScore = {};
let idx = 0;

// Returns a button container with three buttons. Each has an event
// listener with a function mapped to its name and purpose.
function getQuizButtons() {
  const div = document.createElement("div");
  div.className = "modal-buttons";

  const previousBtn = document.createElement("button");
  previousBtn.textContent = "Previous";
  previousBtn.addEventListener("click", previousQuizQuestion);

  const nextBtn = document.createElement("button");
  nextBtn.textContent = "Next";
  nextBtn.addEventListener("click", nextQuizQuestion);

  const finishBtn = document.createElement("button");
  finishBtn.textContent = "Finish";
  finishBtn.addEventListener("click", finishQuiz);

  const buttonArray = [previousBtn, nextBtn, finishBtn];

  for (const button of buttonArray) {
    button.setAttribute("type", "button");
    button.className = "plain-box-shadow";
    div.appendChild(button);
  }

  return div;
}

const modalheading = document.querySelector(".modal h1");
const quiz = document.querySelector("#quiz");

quiz.addEventListener("click", quizChoiceHandler);

previous.addEventListener("click", previousQuizQuestion);
next.addEventListener("click", nextQuizQuestion);
finish.addEventListener("click", finishQuiz);

// Constructs and returns a question form from a question object
function getQuestionHtml(questionObj) {
  const node = document.createElement("form");
  const question = `<p class="question">${questionObj.question}</p>`;

  const answers = questionObj.answers
    .map((answer, idx) => {
      return `<label class="answer"><input type="radio" name="answers" value="${idx}" />${answer}</label>`;
    })
    .join("\n");

  node.innerHTML = `<div class="question-container">${question}\n${answers}</div>`;

  return node;
}

// Returns an array of HTML Forms of questions and answers
function getQuizArray(questions) {
  return questions.map(getQuestionHtml);
}

// Handles appearance of quiz buttons
function quizButtonHandler() {
  // If a choice has been defined for every question, display
  // the finish button else make it vanish
  if (
    !choices.includes(undefined) &&
    choices.length === dogQuizQuestions.length
  ) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }

  // No previous button on first question
  if (idx === 0) {
    previousBtn.style.display = "none";
  } else {
    previousBtn.style.display = "block";
  }

  // No next button on last question
  if (quizArray[idx + 1] === undefined) {
    nextBtn.style.display = "none";
  } else {
    nextBtn.style.display = "block";
  }
}

// Begins quiz in Modal
export function startQuiz() {
  modalheading.textContent = "The Quiz!";
  quizArray = getQuizArray(dogQuizQuestions);
  choices = [];
  idx = 0;
  quizButtonHandler();
  quiz.replaceChildren(quizArray[0]);
}

// Handles finish button function
function finishQuiz() {
  closeModal();
  userScore = choices.reduce((score, dogString) => {
    for (const dog of dogString.split(", ")) {
      score[dog] += 1;
    }
    return score;
  }, score);
  console.table(userScore);
}

// Adds user choices to array
function quizChoiceHandler(event) {
  if (event.target.tagName === "INPUT") {
    choices[idx] = dogQuizQuestions[idx].values[event.target.value];
    quizButtonHandler();
  }
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
