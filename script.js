const form = document.querySelector("form");
const email = document.querySelector("#email");
const container = document.querySelector(".form-container");
const button = document.querySelector("button");
const error = document.querySelector("small");

form.addEventListener("submit", checkEmail);
button.addEventListener("click", checkEmail);

function checkEmail(e) {
  e.preventDefault();

  const emailValue = email.value.trim();

  if (emailValue === "") {
    container.classList.add("error");
    error.textContent = "This field cannot be empty";
  } else if (!isEmail(emailValue)) {
    container.classList.add("error");
    error.textContent = "Please provide a valid email";
  } else {
    container.classList.remove("error");
  }

  email.value = "";
}

function isEmail(email) {
  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email);
}
