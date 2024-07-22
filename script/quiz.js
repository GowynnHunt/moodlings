import { dogQuizQuestions, score } from "./data.js";
import { modalDisplay } from "./modal.js";
import { getResult } from "./result.js";

let choices = [];
let quizArray = [];
let idx = 0;

// Selectors for elements in the modal-body
const forms = document.querySelector("#quiz .forms");
forms.addEventListener("click", quizChoiceHandler);

const previousBtn = document.querySelector("#quiz .previous");
previousBtn.addEventListener("click", previousQuizQuestion);

const nextBtn = document.querySelector("#quiz .next");
nextBtn.addEventListener("click", nextQuizQuestion);

const finishBtn = document.querySelector("#quiz .finish");
finishBtn.addEventListener("click", finishQuiz);

// Constructs and returns a question form from a question object
function getQuestionForm(questionObj) {
  const form = document.createElement("form");
  form.className = "question-container";

  const question = document.createElement("p");
  question.className = "question";
  question.textContent = `${questionObj.question}`;

  const answers = questionObj.answers.map((answer, idx) => {
    const label = document.createElement("label");
    label.className = "answer";

    const input = document.createElement("input");
    input.setAttribute("type", "radio");
    input.setAttribute("name", "answers");
    input.setAttribute("value", idx);

    label.appendChild(input);

    const textNode = document.createTextNode(answer);
    label.appendChild(textNode);

    return label;
  });
  // .join("\n");

  form.appendChild(question);
  answers.forEach((answer) => form.appendChild(answer));

  return form;
}

// Returns an array of HTML Forms of questions and answers
function getQuizArray(questions) {
  return questions.map(getQuestionForm);
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
function startQuiz() {
  // Reset score
  for (const dog in score) {
    score[dog] = 0;
  }
  // Reset user choices
  choices = [];

  // Reset global idx
  idx = 0;

  // Get question forms
  quizArray = getQuizArray(dogQuizQuestions);

  quizButtonHandler();
  forms.replaceChildren(quizArray[0]);
  modalDisplay("quiz");
}

// Adds user choices to array
function quizChoiceHandler(event) {
  if (event.target.tagName === "INPUT") {
    choices[idx] = dogQuizQuestions[idx].values[event.target.value];
    quizButtonHandler();
  }
}

// Quiz Button Section //
function nextQuizQuestion() {
  idx++;
  quizButtonHandler();
  forms.replaceChildren(quizArray[idx]);
}

function previousQuizQuestion() {
  idx--;
  quizButtonHandler();
  forms.replaceChildren(quizArray[idx]);
}

function finishQuiz() {
  getResult(choices);
}

export { getQuestionForm, startQuiz };
