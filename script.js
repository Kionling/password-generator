// Assignment Code
var generateBtn = document.querySelector("#generate");

var lowerc="abcdefghijklmnopqrstuvwxyz";
var upperc="ABCDEFGHIGJKLMNOPQRSTUVWXYZ";
var numc = "0123456789";
var specialc ="!@#$%^&*()+?-_+=~`";
var opc = ""
var password = ""

function generatePassword(){





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
//giving error parameters 

if (opc === "" || lengthpw < 8 || lengthpw > 128){
  alert("You have incorrect criteria entry.\n\n Check the enteries you have entered..\nlength: " + lengthpw + "\nType of characters is incorrect: " + lowUpNumSpecial  )
  l
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
 return password
} 




//need to create variables for all types of characters (Num, special, uppercase, lowercase)
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  //Resets values so it doesn't repeat
  passwordText.value = ""
  passwordText.value = password;

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
