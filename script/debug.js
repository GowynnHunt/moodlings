export function getTestScoreObject(score, dogQuizQuestions, iterations) {
  let choices = [];

  for (let i = 0; i < iterations; i++) {
    // Randomly get choice from each object
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

    choices = [];
  }

  console.table(score);
}
