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
    passwordLength = prompt(
      "Sorry you must choose a password that has 8-128 characters.Please try again."
    );

    console.log("Password length" + passwordLength);
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
}
