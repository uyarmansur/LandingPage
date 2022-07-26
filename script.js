const toggle = document.getElementById("toggle");
const open = document.getElementById("open");
const close = document.getElementById("close");
const modal = document.getElementById("modal");
const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");

toggle.addEventListener("click", () => {
  document.body.classList.toggle("show-nav");
});
open.addEventListener("click", () => {
  modal.classList.add("show-modal");
});
close.addEventListener("click", () => {
  modal.classList.remove("show-modal");
});
window.addEventListener("click", (e) => {
    e.target==modal?modal.classList.remove("show-modal") : false
})
form.addEventListener("submit", function (e) {
  checkRequired([username, email, password, password2]);
  checkLength(username, 3, 15);
  checkLength(password, 6, 25);
  passwordMatch(password, password2);
  e.preventDefault();
});

function checkRequired(inputArr) {
  inputArr.forEach(function (input) {
    if (input.value === "") {
      showError(input, `${input.id} is required!`);
    } else {
      showSuccess(input, `${input.id} is accepted!`);
    }
  });
}

function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input, message) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
  const small = formControl.querySelector("small");
  small.innerText = message;
}

function passwordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Passwords do not match!");
  }
}
function checkLength(input, min, max) {
  if (input.value.length < min) {
    showError(input, `${input.id} must be at least ${min} charachters!`);
  } else if (input.value.length > max) {
    showError(input, `${input.id} must be less than ${max} charachters!`);
  } else {
    showSuccess(input, `${input.id} is accepted!`);
  }
}
