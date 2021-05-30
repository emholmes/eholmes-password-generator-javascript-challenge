// Assignment Code
var generateBtn = document.querySelector("#generate");

// global variables
var allowLowercase;
var allowUppercase;
var allowNumericChar;
var allowSpecialChar;

// random number generator function
var randomNumber = function(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
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

// prompt user for a password length between 8 and 128 characters
var getPasswordLength = function() {
  var passwordLength = window.prompt("How many characters would you like your password to be? (min: 8, max: 128)");
  passwordLength = parseInt(passwordLength);  
  // validate user entry is within 8 - 128 range
  if (passwordLength < 8 || passwordLength > 128 || !passwordLength) {
    // if outside range, reprompt user with getPasswordLength
    return getPasswordLength();
  }
  return passwordLength;
}

// ask user for character types to include in password
var confirmCharOptions = function() {
  var charOptionsObject = {
    allowLowercase: window.confirm("Can your password contain lowercase characters?"),
    allowUppercase: window.confirm("Can your password contain uppercase characters?"), 
    allowNumericChar: window.confirm("Can your password contain numbers?"),
    allowSpecialChar: window.confirm("Can your password contain special characters?")
  }
  // validate user selected at least one character type
  if (!charOptionsObject.allowLowercase && !charOptionsObject.allowUppercase && !charOptionsObject.allowNumericChar && !charOptionsObject.allowSpecialChar) {
    // if not, alert user and reprompt wtih confirmCharOptions
    alert("Please select at least one character type.");
    return confirmCharOptions();
  }
  return charOptionsObject;
}

// shuffle array before displaying on screen
var shufflePassword = function(newPasswordArray) {
  //shuffling the newPasswordArray array
  passwordLength = newPasswordArray.length - 1;

  for(var i = passwordLength; i > 0; i--){
    var j = Math.floor(Math.random() * i);
    var tempPasswordArray = newPasswordArray[i];
    newPasswordArray[i] = newPasswordArray[j];
    newPasswordArray[j] = tempPasswordArray;
  }
  
}

var generatePassword = function() {
  // initialize newPasswordArray as empty array
  var newPasswordArray = [];

  var passwordLength = getPasswordLength();

  var charOptions = confirmCharOptions();

  if (charOptions.allowLowercase) {
    newPasswordArray.push(getLowerChar());
  }

  if (charOptions.allowUppercase) {
    newPasswordArray.push(getUpperChar());
  }

  if (charOptions.allowNumericChar) {
    newPasswordArray.push(getNumericChar());
  }

  if (charOptions.allowSpecialChar) {
    newPasswordArray.push(getSpecialChar());
  }

  // add remaining characters to newPasswordArray to meet passwordLength requirements
  while (newPasswordArray.length < passwordLength) {
    switch(randomNumber(1, 4)) {
      case 1:
        if (charOptions.allowLowercase) {
          newPasswordArray.push(getLowerChar());
        }
        break;
      case 2: 
      if (charOptions.allowUppercase) {
        newPasswordArray.push(getUpperChar());
      }
        break;
      case 3:
        if (charOptions.allowNumericChar) {
          newPasswordArray.push(getNumericChar());
        }
        break;
      case 4: 
        if (charOptions.allowSpecialChar) {
          newPasswordArray.push(getSpecialChar());
        }
        break;
      default: 
        if (charOptions.allowSpecialChar) {
          newPasswordArray.push(getSpecialChar());
        }
        break;
    };
  }

  shufflePassword(newPasswordArray);

  // join shuffled password array into string & return
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
