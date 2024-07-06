const DOG = {
  Sunny: 0,
  Rainy: 0,
  George: 0,
  Maisie: 0,
  Odin: 0,
  Charlie: 0,
};

const dogQuiz = document.querySelector("#corgi-btn");
const modalClose = document.querySelector(".modal-close");

dogQuiz.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "flex";
});

modalClose.addEventListener("click", () => {
  document.querySelector(".modal").style.display = "none";
});
