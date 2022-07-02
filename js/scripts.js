const darkModeButton = document.querySelector(".js-dark-mode");
const topNavBar = document.querySelector(".js-navbar");
const modalContent = document.querySelector(".modal-content");
const modalImage = modalContent?.querySelector("img");
const logo = document.querySelector(".logo");
const headings = [
  ...document.querySelectorAll("h1, .lead, label.col-form-label"),
];
const footerLinks = [...document.querySelectorAll(".js-links-container a")];
darkModeButton.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  darkModeButton.classList.toggle("text-dark");
  topNavBar.classList.toggle("navbar-light");
  topNavBar.classList.toggle("navbar-dark");
  logo.classList.toggle("dark-mode");
  headings.forEach(e => {
    e.classList.toggle("text-white");
  });
  footerLinks.forEach(e => {
    e.classList.toggle("text-black-50");
    e.classList.toggle("text-white-50");
  });
});
