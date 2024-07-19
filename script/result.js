import { score, tieBreaker } from "./data.js";

export function getResult(choices) {
  // Counts dog names from strings and merges it into a score object
  const userScore = choices.reduce((score, dogString) => {
    for (const dog of dogString.split(", ")) {
      score[dog] += 1;
    }
    return score;
  }, score);

  // Find highest score in object
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
    tieBreaker();
  }
}
