// Assignment Code
var generateBtn = document.querySelector("#generate");

var generatePassword = function() {
  var newPassword = [];
  var passwordLength;
  var getPasswordLength = function() {
    passwordLength = window.prompt("How many characters would you like your password to be? (min: 8, max: 128)");
    passwordLength = parseInt(passwordLength);  
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
      return getPasswordLength();
    }
  }
  getPasswordLength();

  var allowLowercase;
  var allowUppercase;
  var allowNumericChar;
  var allowSpecialChar;

  var confirmCharOptions = function() {
    allowLowercase = window.confirm("Can your password contain lowercase characters?");
    allowUppercase = window.confirm("Can your password contain uppercase characters?");
    allowNumericChar = window.confirm("Can your password contain numbers?");
    allowSpecialChar = window.confirm("Can your password contain special characters?");

    if (!allowLowercase && !allowUppercase && !allowNumericChar && !allowSpecialChar) {
      alert("Please selet at least one character type.");
      return confirmCharOptions();
    }
  }

  confirmCharOptions();

  var randomNumber = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  
  //create function for each character option
  var getLowerChar = function() {
    if (allowLowercase) {
      var lowerCaseChar = String.fromCharCode([randomNumber(97, 122)]);
      newPassword.push(lowerCaseChar);
    }
  }
  
  var getUpperChar = function() {
    if (allowUppercase) {
      var upperCaseChar = String.fromCharCode([randomNumber(65, 90)]);
      newPassword.push(upperCaseChar);
    }
  }

  var getNumericChar = function() {
    if (allowNumericChar) {
      var numericChar = randomNumber(9, 0);
      newPassword.push(numericChar);
    }
  }

  var getSpecialChar = function() {
    if (allowSpecialChar) {
      var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
      var specialChar = specialCharacters[randomNumber(0, specialCharacters.length)];
      newPassword.push(specialChar);
    }
  }
  
  getLowerChar();
  getUpperChar();
  getNumericChar();
  getSpecialChar();

  while (newPassword.length < passwordLength) {
    switch(randomNumber(1, 4)) {
      case 1:
        getLowerChar();
        break;
      case 2: 
        getUpperChar();
        break;
      case 3:
        getNumericChar();
        break;
      case 4: 
        getSpecialChar();
        break;
      default: 
        getSpecialChar();
        break;
    };
  }

  return newPassword.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
