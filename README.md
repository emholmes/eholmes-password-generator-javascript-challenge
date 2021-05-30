# Javascript Challenge: Password Generator

This repository contains the code necessary to run a password generator. 

View the password generator here: https://emholmes.github.io/eholmes-password-generator-javascript-challenge/ (deployed application)

After clicking the "Generate Password" button, you will be prompted with the following questions: 
1. How many characters would you like your password to be? 
This number must be between 8 and 128, inclusive. 
2. Can your password contain lowercase characters?
3. Can your password contain uppercase characters?
4. Can your password contain numeric characters?
5. Can your password contain special characters?

** You must select at least one character type to generate a password.

Once all prompts are answered, the generatePassword function will push one of each allowed character to an array, and then randomly pick the remaining characters. 
After all characters are selected, the array will be shuffled and displayed on the screen. 

Use this password generator to create as many passwords as you need. 

Deployed application: https://emholmes.github.io/eholmes-password-generator-javascript-challenge/


![Screenshot of loaded page](./assets/images/password-gen-start.png)
![Screenshot of password length prompt](./assets/images/password-gen-chars.png)
![Screenshot of password lowercase chars prompt](./assets/images/password-gen-lowerchars.png)
![Screenshot of password uppercase chars prompt](./assets/images/password-gen-upperchars.png)
![Screenshot of password numeric chars prompt](./assets/images/password-gen-numchars.png)
![Screenshot of password special chars prompt](./assets/images/password-gen-specialchars.png)
![Screenshot of final screen with password](./assets/images/password-gen-finalscreen.png)