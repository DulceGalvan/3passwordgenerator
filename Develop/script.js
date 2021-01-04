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

//Variables 
var passLenght;
var wantCharacters;
var wantNumbers;
var wantLowercase;
var wantUppercase;
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*()_-+={}[];:'`~<,>.?/|";

function writePassword() {
  passLenght = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

  if (passLenght < 8 || passLenght > 128 || (isNaN(passLenght))) {
    alert("Password length must be a number between 8-128 characters");
    writePassword()

  } else if (passLenght > 8 || passLenght < 128)

    wantCharacters = confirm("Do you want special characters?")
  wantNumbers = confirm("Do you want numbers?")
  wantUppercase = confirm("Do you want uppercase letter?")
  wantLowercase = confirm("Do you want lowercase letters?")


  if (wantCharacters === false && wantNumbers === false && uppercase === false && wantLowercase === false) {
    alert("You must select at least one character")
    writePassword()
  }

  var storePassword = [];
  var allCharacters = [];
  var chosenCharacters = [];

  if (wantCharacters) {
    allCharacters = allCharacters.concat(specialCharacters);
    chosenCharacters.push(getrandom(specialCharacters));

    console.log(allCharacters)
    console.log(chosenCharacters)
  }

  if (wantNumbers) {
    allCharacters = allCharacters.concat(numbers);
    chosenCharacters.push(getrandom(numbers));

    console.log(allCharacters)
    console.log(chosenCharacters)
  }

  if (wantUppercase) {
    allCharacters = allCharacters.concat(uppercase);
    chosenCharacters.push(getrandom(uppercase));

    console.log(allCharacters)
    console.log(chosenCharacters)
  }

  if (wantLowercase) {
    allCharacters = allCharacters.concat(lowercase);
    chosenCharacters.push(getrandom(lowercase));

    console.log(allCharacters)
    console.log(chosenCharacters)
  }

}

function getrandom(arr) {

  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}




