export const questions = [
  {
    question: "Choose your ideal vacation locale.",
    answers: [
      "A warm, sunny town with lots of charm and local residents. There's Currently a festival taking place and you get to experience the small town way of life for a while.",
      "A secluded cabin in the woods that has lots of land to roam, fish, and hunt on for you to enjoy nature to its fullest extent",
      "You already have the perfect vacation location, called home, a safe place where you won’t encounter any new surprises that may startle you.",
    ],
    values: ["Sunny, Rainy", "Charlie, George", "Maisie, Odin"],
  },
  {
    question:
      "If a stranger came up to you in a grocery store and asked for help reaching an item on the top shelf, how would you respond?",
    answers: [
      "Kindly agree to help the stranger and enthusiastically get the item down for them without a second thought.",
      "Be slightly annoyed at the fact that a stranger has approached you while you are in public, but pretend like it doesn’t bother you and help them anyway.",
      "You’re a little startled, but would do anything to appease the stranger so you can feel assured that you aren’t going to get hurt.",
      "Scream loudly, cause a scene, poop your pants, and run away before the stranger can attack you.",
    ],
    values: ["Sunny, Charlie", "Rainy, George", "Maisie", "Odin"],
  },
  {
    question: "If you had any super power, what would it be?",
    answers: [
      "Invisibility",
      "Flying",
      "The ability to teleport items straight to you",
      "Riding a motorcycle",
    ],
    values: ["Odin", "Maisie, Sunny", "George, Rainy", "Charlie"],
  },
  {
    question:
      "If you were taking a walk outside on a nature trail, what would be the most exciting part of your walk?",
    answers: [
      "Being able to take in the natural beauty of the world around you and enjoying the sights and sounds of being outside.",
      "Coming across a cycling group enjoying the trail that invites you to tag along on their extra tandem bike.",
      "Finding an open field along the trail where you could toss a frisbee with your buddy or play catch with an old friend.",
      "Forget the trail, lets get lunch instead",
    ],
    values: ["Sunny, Maisie", "Charlie", "George, Odin", "Rainy"],
  },
  {
    question:
      "You are out at a restaurant and you notice the food that your partner ordered looks so much better than the food that you got. How do you respond?",
    answers: [
      "Look at your partner lovingly and continuously ask them for small bites of their food under the guise of “just wanting to try it” until suddenly you’ve eaten over half their meal.",
      "Politely ask to try a bite of their meal and offer some of your own meal for them to try as well so you each get to experience something delicious.",
      "Ignore your partner’s meal, the carpet that the table is sitting on looks even more enticing, so you take your fork and knife and start eating the carpet instead, garnering strange looks from your date.",
    ],
    values: ["Sunny, Maisie, Rainy", "Charlie, George", "Odin"],
  },
  {
    question:
      "You are at work, and you notice that your coworker has come in 30 minutes late for the 12th shift in a row. You see him get called into your boss’ office. How would you react?",
    answers: [
      "Feel personally victimized that your coworker is getting reprimanded and go around the office to seek attention and affirmation from your colleagues to make you feel better.",
      "Ignore your coworker when he finishes talking to your boss, you are annoyed that he has been late so often and you are tired of picking up his slack.",
      "Strike up a conversation with your coworker and buy him a coffee to try to cheer him up after what may have been a difficult conversation.",
      "Holy Crap! You forgot you had coworkers! When he returns from his conversation,you immediately call security because you feel unsafe in your workplace.",
    ],
    values: ["Charlie", "Rainy, George", "Sunny, Maisie", "Odin"],
  },
  {
    question:
      "You find yourself wanting to adopt another pet. How would you go about this process?",
    answers: [
      "Go to a local pet adoption agency and find the friendliest animal they have and bring it home with me.",
      "Go into the local forest and come back with whatever animal has decided to bond with you that you didn’t hunt for food.",
      "Find a litter of puppies, go to them and start throwing balls in every direction you can muster. Take home the puppies that go get the balls and bring them back to you.",
    ],
    values: ["Sunny, Maisie", "Charlie, Rainy", "George, Odin"],
  },
];

export const score = {
  Charlie: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Rainy: 0,
  Sunny: 0,
}

export function getQuestion(idx) {
  return questions[idx];
}

export function getQuestionValue(question, idx) {
  return question.answers[idx];
}

export function updateScore(dogs, reset) {
  function resetScore() {
    for (dog of score) {
      dog = 0;
    }
  }

  if (reset) {
    resetScore();
    return;
  }
}
