// Assignment Code
var generateBtn = document.querySelector("#generate");

var passwordLength;
var confirmLower;
var confirmUpper;
var confirmNumber;
var confirmSpecialChar;
var userChoices;

var lowerCase = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

// variables to upper case and make sure to have the arrays for the password for the user to choose from.

var blankUpper = [];
var toUpper = function (x) {
  return x.toUpperCase();
};

upperCase = lowerCase.map(toUpper);

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

var special = [
  "!",
  "#",
  "$",
  "%",
  "&",
  "'",
  "(",
  ")",
  "*",
  "+",
  ",",
  "-",
  ".",
  "/",
  ":",
  ";",
  " < ",
  "=",
  " > ",
  " ? ",
  "@",
  "[",
  "\\",
  "]",
  " ^ ",
  "_",
  "`",
  "{",
  "|",
  "}",
  "~",
];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// start generate password function. Needs to be called upon and ask for input from user.

function generatePassword() {
  passwordLength = prompt(
    "Password must contain 8-128 characters. How many characters would you like your password to be?"
  );

  if (!passwordLength) {
    alert("Required Value");
  } else if (passwordLength < 8 || passwordLength > 128) {
    passwordLength = alert(
      "Sorry you must choose a password that has 8-128 characters. Please try again."
    );
  } else {
    confirmLower = confirm(
      "Would you like your password to contain lower case letters. If YES, please hit OK. If no, please hit cancel."
    );

    confirmNumber = confirm(
      "Would you like your password to contain numbers? If YES, please hit OK. If no, please hit cancel."
    );

    confirmSpecialChar = confirm(
      "Would you like your password to contain special characters? If YES, please hit OK. If no, please hit cancel."
    );

    confirmUpper = confirm(
      "Would you like your password to contain uppercase letters? If YES, please hit OK. If not please hit cancel."
    );
  }
  // if else statements for not meeting password criteria.
  if (!confirmLower && !confirmUpper && !confirmNumber && !confirmSpecialChar) {
    userChoices = alert(
      "You must choose one of the 4 criteria. (Uppercase, Lowercase, Number, Special Characters)."
    );

    // there are 4 true options.
  } else if (
    confirmLower &&
    confirmNumber &&
    confirmSpecialChar &&
    confirmUpper
  ) {
    userChoices = lowerCase.concat(upperCase, numbers, special);
    console.log(userChoices);
  }
  // there are 3 true options
  else if (confirmLower && confirmNumber && confirmUpper) {
    userChoices = lowerCase.concat(upperCase, numbers);
  } else if (confirmLower && confirmUpper && confirmSpecialChar) {
    userChoices = lowerCase.concat(upperCase, special);
  } else if (confirmLower && confirmNumber && confirmSpecialChar) {
    userChoices = lowerCase.concat(numbers, special);
  } else if (confirmUpper && confirmNumber && confirmSpecialChar) {
    userChoices = upperCase.concat(numbers, special);

    // two true options.
  } else if (confirmLower && confirmUpper) {
    userChoices = lowerCase.concat(upperCase);
  } else if (confirmLower && confirmNumber) {
    userChoices = lowerCase.concat(numbers);
  } else if (confirmLower && confirmSpecialChar) {
    userChoices = lowerCase.concat(special);
  } else if (confirmUpper && confirmNumber) {
    userChoices = upperCase.concat(numbers);
  } else if (confirmUpper && confirmSpecialChar) {
    userChoices = upperCase.concat(special);
  } else if (confirmNumber && confirmSpecialChar) {
    userChoices = numbers.concat(special);
    // one true option
  } else if (confirmLower) {
    userChoices = lowerCase;
  } else if (confirmUpper) {
    userChoices = blankUpper.concat(upperCase);
  } else if (confirmNumber) {
    userChoices = numbers;
  } else if (confirmSpecialChar) {
    userChoices = special;
  }

  // empty variable for password length

  var passwordBlank = [];

  // need a loop for random selection from arrays

  for (var i = 0; i < passwordLength; i++) {
    var allChoices =
      userChoices[Math.floor(Math.random() * userChoices.length)];
    passwordBlank.push(allChoices);
  }

  // join password together and then return it.

  var password = passwordBlank.join("");
  console.log("Your password is: " + password);
  return password;
}
