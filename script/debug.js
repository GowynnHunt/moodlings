let choices = [];
let winners = [];
let userScore = {};
let score = {
  Charlie: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Rainy: 0,
  Sunny: 0,
};
const duplicates = {
  0: 0,
  1: 0,
  2: 0,
  3: 0,
  4: 0,
  5: 0,
  6: 0,
};

function resetObject(object) {
  for (const dog in object) {
    object[dog] = 0;
  }
}

// Records the raw number of times a dog shows up into the console
export function getTestScoreObject(score, dogQuizQuestions, iterations) {
  let choices = [];

  for (let i = 0; i < iterations; i++) {
    // Randomly get choice from each question object
    for (const qObj of dogQuizQuestions) {
      choices.push(qObj.values[Math.floor(Math.random() * qObj.values.length)]);
    }

    // Reduce all loops to one object for count
    score = choices.reduce((score, dogString) => {
      for (const dog of dogString.split(", ")) {
        score[dog] += 1;
      }
      return score;
    }, score);

    // Empty choices out for the next loop
    choices = [];
  }

  console.table(score);
}
// In the quiz, you should not be able to end with a score >= 3 in more
// than one dog. This function will return an object that tells the
// reader how many duplicates there were in testing it.
export function getDuplicatesObject(dogQuizQuestions, iterations) {
  resetObject(duplicates);
  for (let i = 0; i < iterations; i++) {
    // Randomly get choice from each question object
    for (const qObj of dogQuizQuestions) {
      choices.push(qObj.values[Math.floor(Math.random() * qObj.values.length)]);
    }

    // Find score from array of strings
    score = choices.reduce((score, dogString) => {
      for (const dog of dogString.split(", ")) {
        score[dog] += 1;
      }
      return score;
    }, score);

    // Check score for dogs >= 3
    winners = [];
    for (const dog in score) {
      if (score[dog] >= 3) {
        winners.push(dog);
      }
    }

    // Add 1 to the amount of winners in duplicates
    duplicates[winners.length]++;

    // Reset choices and score for next loop
    choices = [];
    resetObject(score);
  }
  console.table(duplicates);
}
