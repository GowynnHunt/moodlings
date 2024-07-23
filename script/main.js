import { startQuiz } from "./quiz.js";
import { displayResult } from "./result.js";

const dogBtn = document.querySelector("#dog-btn");
dogBtn.addEventListener("click", startQuiz);

const catBtn = document.querySelector("#cat-btn");
catBtn.addEventListener("click", () => displayResult("Penny"));
