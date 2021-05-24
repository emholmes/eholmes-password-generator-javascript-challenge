// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  // var passwordText = document.querySelector("#password");

  //passwordText.value = password;

  var passwordLength = window.prompt("How many characters would you like your password to be? (min: 8, max: 128)");

  var allowLowercase = window.confirm("Can your password contain lowercase characters?");
    if (allowLowerCase) {
    }

  var allowUppercase = window.confirm("Can your password contain uppercase characters?");
  var allowNumericChar = window.confirm("Can your password contain numbers?");
  var allowSpecialChar = window.confirm("can your password contain special characters?");

  

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
