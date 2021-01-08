function getrandom(arr) {

  var randIndex = Math.floor(Math.random() * arr.length);
  var randElement = arr[randIndex];
  return randElement;

}


//function copyToclipboard() {

//}



//Variables 
var passLenght;
var wantCharacters;
var wantNumbers;
var wantLowercase;
var wantUppercase;
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "-", "+", "=", "{", "}", "[", "]", ";", ":", "'", "`", "~", "<", ",", ">", ".", "?", "/", "|"];

function generatePassword() {
  passLenght = parseInt(prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): "));

  if (passLenght < 8 || passLenght > 128 || (isNaN(passLenght))) {
    alert("Password length must be a number between 8-128 characters");
    generatePassword()

  } else if (passLenght > 8 || passLenght < 128)

    wantSpecialcharacters = confirm("Do you want special characters?")
  wantNumbers = confirm("Do you want numbers?")
  wantUppercase = confirm("Do you want uppercase letter?")
  wantLowercase = confirm("Do you want lowercase letters?")


  if (wantSpecialcharacters === false && wantNumbers === false && uppercase === false && wantLowercase === false) {
    alert("You must select at least one character")
    generatePassword()
  }

  var storePassword = [];
  var allCharacters = [];
  var chosenCharacters = [];

  if (wantSpecialcharacters) {
    allCharacters=allCharacters.concat(specialCharacters);
    chosenCharacters.push(getrandom(specialCharacters));
  }

  if (wantNumbers) {
    allCharacters=allCharacters.concat(numbers);
    chosenCharacters.push(getrandom(numbers));

  }

  if (wantUppercase) {
    allCharacters=allCharacters.concat(uppercase);
    chosenCharacters.push(getrandom(uppercase));

  }

  if (wantLowercase) {
    allCharacters=allCharacters.concat(lowercase);
    chosenCharacters.push(getrandom(lowercase));

  }
  for (var i = 0; i < passLenght; i++) {
    var possibleCharacter = getrandom(allCharacters);
    storePassword.push(possibleCharacter);

  }
  for (var i = 0; i < chosenCharacters.length; i++) {
    storePassword[i] = chosenCharacters[i];

  }
  console.log(storePassword)
  return storePassword.join(" ");

}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  console.log(password)
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






