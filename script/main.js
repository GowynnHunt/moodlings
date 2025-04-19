const root = document.querySelector(":root");
const rootStyles = getComputedStyle(root);

// Toggles modal if the modal exists
function toggleModal(modal) {
  if (modal == null || modal == undefined) {
    console.log(`That Modal doesn't exist yet.\nIt's value is ${modal}.`);
    return;
  }
  modal.style.display = modal.style.display == "" ? "flex" : "";
  modal.classList.toggle("fade");
  modal.firstElementChild.classList.toggle("bouncy");
}

// Clicking outside of a modal closes it
document.querySelectorAll("modal").forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.id == modal.id) {
      toggleModal(modal);
    }
  });
});

// Footer links open respective modal | Strict adherence to href
document.querySelectorAll("footer > a").forEach((a) => {
  if (a.hasAttribute("href") && a.getAttribute("href") != "") {
    a.addEventListener("click", () => {
      toggleModal(document.querySelector(a.getAttribute("href")));
    });
  }
});

// Dynamically highlights card links depending on which modal its in
const cardControls = document.querySelectorAll(".card-controls");
cardControls.forEach((linkGroup) => {
  // For each <a> tag
  for (let i = 0; i < linkGroup.children.length; i++) {
    const link = linkGroup.children[i];

    // Add event listener listener that loops back through current
    // linkGroup's children to clear their highlights before applying
    // highlight to clicked link
    link.addEventListener("click", () => {
      // Clear highlights from other tags
      for (let i = 0; i < linkGroup.children.length; i++) {
        const link = linkGroup.children[i];
        link.style.backgroundColor = "transparent";
      }
      // Add highlight to clicked tag
      link.style.backgroundColor = rootStyles.getPropertyValue("--accent");
    });
  }
});

// Change theme using
let currentTheme = "rose-pine-dark";
function switchTheme() {
  // TODO: Build available theme detection alongside a getter for the
  // default css variables
  const themeVariables = ["bg", "bga", "fg", "headings", "accent", "accenta"];
  const themes = ["rose-pine-dark", "rose-pine-dawn", "nightfox"];

  let pIdx = themes.indexOf(currentTheme);
  let nIdx = pIdx;

  // Rotate next theme's index
  if (pIdx + 1 != themes.length) {
    nIdx++;
  } else {
    nIdx = 0;
  }

  // Change each theme variable to new theme
  themeVariables.forEach((cssVar) => {
    root.style.setProperty(
      `--${cssVar}`,
      `var(--${themes.at(nIdx)}-${cssVar})`,
    );
  });

  // Update theme state
  currentTheme = themes.at(nIdx);

  // Updates previously selected card control link color
  document.querySelectorAll(".card-controls a").forEach((a) => {
    if (a.style.backgroundColor == `var(--${themes.at(pIdx)}-accent)`) {
      a.style.backgroundColor = `var(--${themes.at(nIdx)}-accent)`;
    }
  });
}

document
  .querySelector("#theme-switcher")
  .addEventListener("click", switchTheme);
