// Assignment Code
var generateBtn = document.querySelector("#generate");



var lengthpw=prompt("Type password length from 8 to 128", "8")
var lowUpNumSpecial = prompt("Type the type of characters you want (Lowercase, uppercase, numerical, or special)", "lowercase")




//need to create variables for all types of characters (Num, special, uppercase, lowercase)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
