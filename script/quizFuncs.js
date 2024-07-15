import { questions } from "./questions.js";

const nodeQuiz = document.querySelector("#quiz");

export const score = {
  Charlie: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Rainy: 0,
  Sunny: 0,
};

// Constructs
export function questionConstructor(questionObj) {
  const node = document.createElement("form");
  const question = `<p class="question">${questionObj.question}</p>`;
  const answers = getAnswersHtml(questionObj);

  function getAnswersHtml(questionObj) {
    const array = questionObj.answers.map((answer, idx) => {
      return `<label class="answer"><input type="radio" name="answers" value="${idx}" />${answer}</label>`;
    });
    return array.join("\n");
  }

  node.innerHTML = `<div class="question-container">${question}\n${answers}</div>`;

  nodeQuiz.appendChild(node);
}

questionConstructor(questions[0]);
