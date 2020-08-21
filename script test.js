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
	
	var pwuppercase = confirm("Do you want to use uppercase letters?");
	var pwlowercase = confirm("Do you want to use lowercase letters?");
	var pwnumber = confirm("Do you want to use numbers?");
	var pwsymbol = confirm("Do you want to use symbols?");
	}

	else {
		alert("Please select a password between 8 and 128 characters!");
	}
	// Else if for 4 negative options
    if (!pwuppercase && !pwlowercase && !pwnumber && !pwsymbol) {
        pwchar = alert("You must choose a criteria!");

    }
    // First if statement that uses user input prompts to determine choices
    // Else if for 4 positive options
    else if (pwuppercase && pwlowercase && pwnumber && pwsymbol) {

        pwchar = symbol.concat(number, uppercase, lowercase);
    }
    // Else if for 3 positive options
    else if (pwsymbol && pwnumber && pwuppercase) {
        pwchar = symbol.concat(number, uppercase);
    }
    else if (pwsymbol && pwnumber && pwlowercase) {
        pwchar = symbol.concat(number, lowercase);
    }
    else if (pwsymbol && pwlowercase && pwuppercase) {
        pwchar = symbol.concat(lowercase, uppercase);
    }
    else if (pwnumber && pwlowercase && pwuppercase) {
        pwchar = number.concat(lowercase, uppercase);
    }
    // Else if for 2 positive options 
    else if (pwsymbol && pwnumber) {
        pwchar = symbol.concat(number);

    } else if (pwsymbol && pwlowercase) {
        pwchar = symbol.concat(lowercase);

    } else if (pwsymbol && pwuppercase) {
        pwchar = symbol.concat(uppercase);
    }
    else if (pwlowercase && pwnumber) {
        pwchar = lowercase.concat(number);

    } else if (pwlowercase && pwuppercase) {
        pwchar = lowercase.concat(uppercase);

    } else if (pwnumber && pwuppercase) {
        pwchar = number.concat(uppercase);
    }
    // Else if for 1 positive option
    else if (pwsymbol) {
        pwchar = symbol;
    }
    else if (pwnumber) {
        pwchar = number;
    }
    else if (pwlowercase) {
        pwchar = lowercase;
    }
    else if (pwuppercase) {
        pwchar = uppercase;
    }

	var result = "";
   for ( var i = 0; i < length; i++ ) {
      result += pwchar.charAt(Math.floor(Math.random() * pwchar.length));
   }
   return result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);