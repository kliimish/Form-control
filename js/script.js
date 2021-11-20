`use strict`;
const form = document.querySelector(`#form`);
const name = document.querySelector(`#name`);
const lastName = document.querySelector(`#lastName`);
const userName = document.querySelector(`#userName`);
const email = document.querySelector(`#email`);
const pass1 = document.querySelector(`#pass1`);
const pass2 = document.querySelector(`#pass2`);
const submit = document.querySelector(`#submit`);

const getFieldname = (input) => input.id;

const showError = function (input, message) {
  const control = input.parentElement;
  control.className = "control error";
  const small = control.querySelector("small");
  small.innerText = message;
};

const allCool = function (input) {
  input.classList = `all--done`;
};

const checkLenght = function (input, min, max) {
  if (input.length > max) {
    showError(`${getFieldname(input)}:`, `should be less than ${max} chars`);
  } else if (input.length < min) {
    showError(`${getFieldname(input)}: `, `Should be more than ${min} chars`);
  }
};
const checkRequired = function (arr) {
  arr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `Field Required`);
    }
  });
};

const checkPW = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, `Passwords don't match!<br>`);
  }
};

form.addEventListener(`submit`, function (e) {
  e.preventDefault();
  checkRequired([name, lastName, userName, pass1, pass2, email]);
  checkLenght(name, 3, 12);
  checkLenght(lastName, 3, 20);
  checkLenght(userName, 3, 20);
  checkLenght(pass1, 3, 15);
  checkPW(pass1, pass2);
});
