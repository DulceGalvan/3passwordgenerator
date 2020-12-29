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
var uppercaseCheck
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var wantCharacters;
var wantNumbers;
var wantLowercase;
var wantUppercase

function writePassword(){
   passLenght = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passLenght<8){
      alert("Password length must be a number between 8-128 characters");
      writePassword()

    } else if (passLenght>128){

      alert("Password length must be between 8-128 characters");
      writePassword()

    } else if (isNaN(passLenght)){

      alert("Password length must be between 8-128 characters");
      writePassword()
    } else { 

      wantCharacters = confirm("Do you want special characters?")
      wantNumbers = confirm("Do you want numbers?")
      wantUppercase = confirm("Do you want uppercase letter?")
      wantLowercase = confirm("Do you want lowercase letters?")

    }

}


