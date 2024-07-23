import { score, tieBreaker, results } from "./data.js";
import { modalDisplay } from "./modal.js";
import { getQuestionForm } from "./quiz.js";

let tieArr = [];
let tieObject = {};
let tieChoice;
let winner;

const finishBtn = document.querySelector("#tieBreaker .finish");
finishBtn.addEventListener("click", finishHandler);

const resultNode = document.querySelector("#result-text");

function getResult(choices) {
  // Counts dog names from strings and merges it into a score object
  const userScore = choices.reduce((score, dogString) => {
    for (const dog of dogString.split(", ")) {
      score[dog] += 1;
    }
    return score;
  }, score);

  // console.table(userScore);

  // Find highest score number in object
  const highestScore = Object.values(userScore).reduce((acc, value) => {
    return acc > value ? acc : value;
  }, 0);

  tieArr = [];
  // Check for tie
  for (const score in userScore) {
    if (userScore[score] === highestScore) {
      tieArr.push(score);
    }
  }

  if (tieArr.length > 1) {
    console.log(`These are the tied Dogs: ${tieArr}`);
    startTieBreaker();
  } else {
    winner = tieArr[0];
    displayResult(winner);
  }
}

// Sets tieObject based on dogs that the user tied
function getTieObject(tieArr) {
  // Find indexes of all dogs included in tie
  const idxArr = tieArr.map((dog) => {
    return tieBreaker.values.findIndex((value) => value === dog);
  });

  // Filter out answers whose index isn't included in the idxArr
  const answers = tieBreaker.answers.filter((answer, idx) => {
    return idxArr.includes(idx);
  });

  // Filter out values who are not included in the tieArr
  const values = tieBreaker.values.filter((value) => {
    return tieArr.includes(value);
  });

  tieObject = {
    question: tieBreaker.question,
    answers,
    values,
  };
}

function startTieBreaker() {
  const forms = document.querySelector("#tieBreaker .forms");
  forms.addEventListener("click", tieChoiceHandler);

  getTieObject(tieArr);
  const tiebreakerForm = getQuestionForm(tieObject);
  forms.replaceChildren(tiebreakerForm);

  tieChoice = null;

  modalDisplay("tieBreaker");
}

function tieChoiceHandler(event) {
  if (event.target.tagName === "INPUT") {
    tieChoice = event.target.value;
    tieButtonHandler();
  }
}

function tieButtonHandler() {
  if (tieChoice) {
    finishBtn.style.display = "block";
  } else {
    finishBtn.style.display = "none";
  }
}

function finishHandler() {
  winner = tieObject.values[tieChoice];
  displayResult(winner);
}

// Takes winner string, gets result text from data.js, appends it to
// #result-text
function displayResult(winner) {
  const text = results[winner];

  const image = document.createElement("img");
  image.setAttribute("src", `../images/${winner}.jpg`);

  const node = document.createElement("p");
  node.className = "answer";
  node.textContent = text;

  resultNode.replaceChildren(image, node);
  modalDisplay("results");
}

export { getResult, displayResult };

displayResult("Odin");
