const closeBtn = document.querySelectorAll(".modal-close");
closeBtn.forEach((button) => button.addEventListener("click", closeModal));

function blurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(2.5px)";
  }
}

function unBlurNodes(selector) {
  const nodes = document.querySelectorAll(selector);
  for (const node of nodes) {
    node.style.filter = "blur(0)";
  }
}

export function openModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "flex";
  blurNodes(".blur");
}

export function closeModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "none";
  unBlurNodes(".blur");
}

// Returns an array of the child nodes of the ".modal-content" div
function getModalNodes() {
  const collection = document.querySelector(".modal-content").children;
  const nodeArr = [];

  for (let i = 0; i < collection.length; i++) {
    nodeArr.push(collection[i]);
  }

  return nodeArr;
}

// Only displays desired Modal content
export function modalDisplay(content) {
  for (const node of getModalNodes()) {
    if (node.id === content) {
      node.style.display = "block";
    } else {
      node.style.display = "none";
    }
  }

  openModal();
}
