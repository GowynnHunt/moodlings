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

export function getQuestion(idx) {
  return questions[idx];
}

export function getQuestionValue(question, idx) {
  return question.answers[idx];
}

export function questionConstructor(questionObj) {
  const node = document.createElement("form");

  function getAnswerHtml(questionObj) {
    return questionObj.answers.map((answer, idx) => {
      return `
        <label>
          <input type="radio" name="answers" value="${idx}" />${answer}
        </label>`;
    });
  }

  //example
  node.innerHTML = `
    <p>${questionObj.question}</p>
    ${getAnswerHtml(questionObj)}
  `;

  nodeQuiz.appendChild(node);
}

questionConstructor(questions[0]);
