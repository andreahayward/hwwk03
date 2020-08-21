// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = "abcdefghijklmnopqrstuvwxyz";
var	uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var	number = "0123456789";
var symbol = "*;<>()[]{}#$?!^|";

;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
	var pwchar = "";
	var length = prompt("How long would you like your password to be?");
	if(length >8 && length < 128) {
		password.length = length; 
	
	uppercase = confirm("Do you want to use uppercase letters?");
	lowercase = confirm("Do you want to use lowercase letters?");
	number = confirm("Do you want to use numbers?");
	symbol = confirm("Do you want to use symbols?");
	}


	else {
		alert("Please select a password between 8 and 128 characters!");
	}
	if (uppercase === true){
		pwchar += uppercase;
	}
	if (lowercase === true) {
		pwchar += lowercase;
	}
	if (number === true) {
		pwchar += number;
	}
	if (symbol === true) {
		pwchar += symbol;
	}
	else {
		alert("Cannot generate password!");
	}

	var result = "";
   for ( var i = 0; i < length; i++ ) {
      result += pwchar.charAt(Math.floor(Math.random() * pwchar.length));
   }
   return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);