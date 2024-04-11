const darkModeToggle = document.querySelector('[data-js="dark-mode-toggle"]');
const body = document.body;

darkModeToggle.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
});
