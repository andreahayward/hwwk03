// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = 'abcdefghijklmnopqrstuvwxyz';
var	uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var	number = '0123456789';
var symbol = '*;<>()[]{}#$?!^|';
//var length = '8-100'
;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
	var length = prompt("How long would you like your password to be?");
	var lowercase = confirm("Do you want to use lowercase letters?");
	var uppercase = confirm("Do you want to use uppercase letters?");
	var number = confirm("Do you want to use numbers?");
	var symbol = confirm("Do you want to use symbols?");



	var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);