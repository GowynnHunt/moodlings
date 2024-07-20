import { score, tieBreaker } from "./data.js";
import { modalDisplay } from "./modal.js";
import { getQuestionForm } from "./quiz.js";

let tieChoice;
// const test = [
//   "Sunny, Rainy, Charlie, Charlie",
//   "Rainy, George",
//   "Maisie, Sunny, George",
//   "George, Odin, Odin",
//   "Sunny, Maisie",
//   "Odin, Maisie",
//   "Charlie, Rainy",
// ];
// getResult(test);

modalDisplay("results");

const finishBtn = document.querySelector("#tieBreaker .finish");
finishBtn.addEventListener("click", finishHandler);

const results = document.querySelector("#result-text");

export function getResult(choices) {
  // Counts dog names from strings and merges it into a score object
  const userScore = choices.reduce((score, dogString) => {
    for (const dog of dogString.split(", ")) {
      score[dog] += 1;
    }
    return score;
  }, score);

  console.table(userScore);

  // Find highest score number in object
  const highestScore = Object.values(userScore).reduce((acc, value) => {
    return acc > value ? acc : value;
  }, 0);

  // Check for tie
  const tieArr = [];
  for (const score in userScore) {
    if (userScore[score] === highestScore) {
      tieArr.push(score);
    }
  }

  if (tieArr.length > 1) {
    console.log(`These are the tied Dogs: ${tieArr}`);
    startTieBreaker(getTieBreaker(tieArr));
  } else {
  }
}

function getTieBreaker(tieArr) {
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

  const newTieBreaker = {
    question: tieBreaker.question,
    answers,
    values,
  };

  return newTieBreaker;
}

function startTieBreaker(myTieBreaker) {
  const forms = document.querySelector("#tieBreaker .forms");
  forms.addEventListener("click", tieChoiceHandler);

  const tiebreakerForm = getQuestionForm(myTieBreaker);
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
