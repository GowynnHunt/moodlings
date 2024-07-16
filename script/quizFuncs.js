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
export function getQuizArray(questions) {
  return questions.map(getQuestionHtml);
}
