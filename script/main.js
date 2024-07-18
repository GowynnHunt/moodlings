import { openModal, closeModal } from "./modal.js";

const dogBtn = document.querySelector("#dog-btn");
const modalClose = document.querySelector(".modal-close");

dogBtn.addEventListener("click", openModal);
modalClose.addEventListener("click", closeModal);
