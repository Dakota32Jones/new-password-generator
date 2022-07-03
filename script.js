// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Various Arrays user can select from

var number = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = [
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "=",
  "+",
  "<",
  ">",
  "/",
  "?",
];
var alphaLower = [
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
var alphaUpper = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

// Declare variables

var confirmLength = "";
var confrimSpecialCharacter;
var confirmNumericCharacter;
var confirmUpperCase;
var confirmLowerCase;

// Add prompt for user to confirm how many characters they would like in their password.

function generatePassword() {
  var confirmLength = prompt(
    "How many characters would you like your password to contain?"
  );

  // make sure to loop the prompt if the answers are outside of the criteria.

  while (confirmLength <= 7 || confirmLength >= 129) {
    alert(
      "Password length must be between 8-128 characters. Please try again."
    );
    var confirmLength = prompt(
      "How many characters would you like your password to contain?"
    );
  }
}

// make an alert to repeat back to the user how many characters they will have in their password.

alert(`Your password will have ${confirmLength} characters`);
