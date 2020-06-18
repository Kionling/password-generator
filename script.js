// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerc="abcdefghijklmnopqrstuvwxyz";
var upperc="ABCDEFGHIGJKLMNOPQRSTUVWXYZ";
var numc = "0123456789";
var specialc ="!@#$%^&*()+?-_+=~`";



var password = ""
var lengthpw = prompt("Type password length from 8 to 128", "8") * 1;
var lowUpNumSpecial = prompt("Type the type of characters you want (Lowercase, uppercase, numerical, or special)", "lowercase");
for(var i = 0; i < lengthpw.length; i++){
  if(lowUpNumSpecial==="lowercase"){
    password = 
  }
  if (lowUpNumSpecial === "uppercase"){

  }
  if (lowUpNumSpecial === "numerical"){

  }
  if (lowUpNumSpecial === "special"){

  }
}
  








//need to create variables for all types of characters (Num, special, uppercase, lowercase)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
