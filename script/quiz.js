import { dogQuizQuestions } from "./dogQuiz.js";
import { create } from "./utils.js";

let isQuiz = false;
let htmlArray;

function getQuizObj(quizDataObj, name, numOfQuestions, num) {
  const question = quizDataObj.question;
  const answerArr = quizDataObj.answers;

  // Card Controls aka Header Links
  const cardControls = create("div", {
    class: "card-controls",
  });
  for (let index = 1; index < numOfQuestions + 1; index++) {
    const a = create("a", {
      textContent: index,
    });
    cardControls.appendChild(a);
  }

  // .modal-content generation
  const modalContent = create("div", {
    class: "modal-content",
    children: [
      create("div", {
        class: "modal-header",
        children: [create("h2", { textContent: name }), cardControls],
      }),
      create("div", {
        class: "modal-cards",
        children: [
          create("div", {
            class: "card",
            children: [
              create("h3", {
                textContent: `Question ${num}/${numOfQuestions}`,
              }),
              create("p", {
                textContent: question,
              }),
            ],
          }),
        ],
      }),
    ],
  });

  return modalContent;
}

function getQuizHtmlArray(quizQuestionArr) {
  const numOfQuestions = quizQuestionArr.length - 1;
  const name = quizQuestionArr[0].name;

  const htmlArray = [];

  for (let num = 1; num < quizQuestionArr.length; num++) {
    htmlArray.push(getQuizObj(quizQuestionArr[num], name, numOfQuestions, num));
  }

  return htmlArray;
}

function openQuiz(node) {
  const modal = document.querySelector("#Quiz");
  modal.replaceChildren(node);
  if (modal.style.display != "flex") {
    modal.style.display = "flex";
  }
}

// Quiz functionality
function dogQuiz() {
  if (!isQuiz) {
    htmlArray = getQuizHtmlArray(dogQuizQuestions);
  }
  openQuiz(htmlArray[0]);
}

document.querySelector("#DogQuizBtn").addEventListener("click", dogQuiz);
