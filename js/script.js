// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var passwordLength;
var allowLowercase;
var allowUppercase;
var allowNumericChar;
var allowSpecialChar;

// random number generator function
var randomNumber = function(min, max) {
  var number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

// function for each character option: lowercase, uppercase, numeric and special
var getLowerChar = function() {
  return String.fromCharCode([randomNumber(97, 122)]);
}

var getUpperChar = function() {
  return String.fromCharCode([randomNumber(65, 90)]);
}

var getNumericChar = function() {
  return randomNumber(0, 9);
}

var getSpecialChar = function() {
  var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";
  return specialCharacters[randomNumber(0, (specialCharacters.length - 1))];
}


var generatePassword = function() {
  // initialize newPasswordArray as empty array
  var newPasswordArray = [];
  
  // prompt user for a password length between 8 and 128 characters
  var getPasswordLength = function() {
    passwordLength = window.prompt("How many characters would you like your password to be? (min: 8, max: 128)");
    passwordLength = parseInt(passwordLength);  
    // validate user entry is within 8 - 128 range
    if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
      // if outside range, reprompt user with getPasswordLength
      return getPasswordLength();
    }
  }
  getPasswordLength();

  // ask user for character types to include in password
  // and add at least one of each character type allowed 
  var confirmCharOptions = function() {
    debugger;
    allowLowercase = window.confirm("Can your password contain lowercase characters?");
    if (allowLowercase) {
      newPasswordArray.push(getLowerChar());
    }
    allowUppercase = window.confirm("Can your password contain uppercase characters?");
    if (allowUppercase) {
      newPasswordArray.push(getUpperChar());
    }
    allowNumericChar = window.confirm("Can your password contain numbers?");
    if (allowNumericChar) {
      newPasswordArray.push(getNumericChar());
    }
    allowSpecialChar = window.confirm("Can your password contain special characters?");
    if (allowSpecialChar) {
      newPasswordArray.push(getSpecialChar());
    }
    // validate user selected at least one character type
    if (!allowLowercase && !allowUppercase && !allowNumericChar && !allowSpecialChar) {
      // if not, alert user and reprompt wtih confirmCharOptions
      alert("Please select at least one character type.");
      return confirmCharOptions();
    }
  }
  confirmCharOptions();


  while (newPasswordArray.length < passwordLength) {
    switch(randomNumber(1, 4)) {
      case 1:
        if (allowLowercase) {
          newPasswordArray.push(getLowerChar());
        }
        break;
      case 2: 
      if (allowUppercase) {
        newPasswordArray.push(getUpperChar());
      }
        break;
      case 3:
        if (allowNumericChar) {
          newPasswordArray.push(getNumericChar());
        }
        break;
      case 4: 
        if (allowSpecialChar) {
          newPasswordArray.push(getSpecialChar());
        }
        break;
      default: 
        if (allowSpecialChar) {
          newPasswordArray.push(getSpecialChar());
        }
        break;
    };
  }

  //shuffling the newPasswordArray array
  var passwordLength = newPasswordArray.length - 1;

  for(var i = passwordLength; i > 0; i--){
    var j = Math.floor(Math.random() * i);
    var tempPasswordArray = newPasswordArray[i];
    newPasswordArray[i] = newPasswordArray[j];
    newPasswordArray[j] = tempPasswordArray;
  }
  return newPasswordArray.join("");
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password + "\n Characters: " + password.length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
