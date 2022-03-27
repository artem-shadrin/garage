import auth from "./components/auth.js";

document.addEventListener("DOMContentLoaded", () => {
  const containerEl = document.querySelector(".auth__content");
  const loginEl = document.querySelector(".login");
  const registartionEl = document.querySelector(".registration");
  const navBack = () => {
    const resetForm = () => {
      containerEl.querySelectorAll("form").forEach((form) => form.reset());
    };
    resetForm();
    containerEl.className = "auth__content";
    loginEl.classList.remove("is-hidden");
    registartionEl.classList.add("is-hidden");
  };
  //  btn Back
  document
    .querySelectorAll(".auth__back-button")
    .forEach((btn) => btn.addEventListener("click", navBack));
  auth(containerEl);
});
