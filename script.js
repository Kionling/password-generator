// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerc="abcdefghijklmnopqrstuvwxyz";
var upperc="ABCDEFGHIGJKLMNOPQRSTUVWXYZ";
var numc = "0123456789";
var specialc ="!@#$%^&*()+?-_+=~`";
var opc = ""
var password = ""




var lengthpw = prompt("Type password length from 8 to 128", "8") * 1;
var lowUpNumSpecial = prompt("Type the type of characters you want (Lowercase, uppercase, numerical, or special)", "lowercase");

if(lowUpNumSpecial==="lowercase"){
  opc = lowerc 
}
if (lowUpNumSpecial === "uppercase"){
  opc = upperc
}
if (lowUpNumSpecial === "numerical"){
opc = numc
}
if (lowUpNumSpecial === "special"){
  opc = specialc 
}
if (opc === ""){
  alert("You have incorrect criteria entry.")
}
else{







//alert(lengthpw)

for(var i = 0; i < lengthpw; i++){

  var num = (Math.random() * opc.length).toFixed(0)

  //alert(num)

   password += opc[num]
   //alert(password)

}
 // alert("This is the generated password " + password)

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
