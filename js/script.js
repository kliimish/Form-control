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
  const control = input.parentElement;
  control.className = "control all--done";
};

const checkLenght = function (input, min, max) {
  if (input.value.length > max) {
    showError(input, `Should be less than ${max} letters`);
  } else if (input.value.length < min) {
    showError(input, `Should be more than ${min} letters`);
  } else {
    allCool(input);
  }
};

function checkEmail(input) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value.trim())) {
    allCool(input);
  } else {
    showError(input, "Email is not valid");
  }
}

const checkRequired = function (arr) {
  arr.forEach((input) => {
    if (input.value.trim() === "") {
      showError(input, `Field Required`);
    } else {
      allCool(input);
    }
  });
};

const checkPW = (pass1, pass2) => {
  if (pass1.value !== pass2.value) {
    showError(pass2, `Passwords don't match!`);
    showError(pass1, _);
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
  checkEmail(email);
});
