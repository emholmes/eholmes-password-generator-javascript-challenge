// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  var newPassword = [];

  var getPasswordLength = function() {
    var passwordLength = window.prompt("How many characters would you like your password to be? (min: 8, max: 128)");
    if (passwordLength < "8" && passwordLength > "128") {
      return getPasswordLength();
    }
  }
  getPasswordLength();

  var allowLowercase = window.confirm("Can your password contain lowercase characters?");
  var allowUppercase = window.confirm("Can your password contain uppercase characters?");
  var allowNumericChar = window.confirm("Can your password contain numbers?");
  var allowSpecialChar = window.confirm("Can your password contain special characters?");

  var randomNumber = function(max, min) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  //go through and select at least one of each allowed character
  //
  //select lowercase letter - ascii codes 97 - 122
  if (allowLowercase) {
    var lowerCaseChar = String.fromCharCode([randomNumber(122, 97)]);
    newPassword.push(lowerCaseChar);
  }
  
  if (allowUppercase) {
    var upperCaseChar = String.fromCharCode([randomNumber(90, 65)]);
    newPassword.push(upperCaseChar);
  }

  if (allowNumericChar) {
    var numericChar = randomNumber(9, 0);
    newPassword.push(numericChar);
  }

  if (allowSpecialChar) {
    var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
    var specialChar = specialCharacters[randomNumber(27, 0)];
    newPassword.push(specialChar);
  } 

  passwordText.textContent = newPassword.join("");


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
