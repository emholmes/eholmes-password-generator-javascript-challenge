// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

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

  var randomNumber = function(max) {
    return Math.floor(Math.random() * (max - 1));
  }

  //select lowercase letter
  var alphabet = "abcdefghijklmnopqrstuvwxyz";
  var lowerLetter = alphabet[randomNumber(26)];
  console.log(lowerLetter);

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
