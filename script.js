// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define Generate Password function
function generatePassword() {

  //Create variable to hold password
  var password = "";

  // 1. Prompt the user for password criteria
  //    a. Password length
  var len = prompt("How many characters would you like your password to contain?");
  if(len < 8 || len > 128) {
    alert("The length of your password must be between 8 and 128 characters. Please try again.");
    return;
  }
  
  //    b. Lowercase, Uppercase, numbers, special characters
  var lower = confirm("Click OK to confirm including lowercase characters.");
  var upper = confirm("Click OK to confirm including uppercase characters.");
  var nums = confirm("Click Ok to confirm including numeric characters.");
  var specialChars = confirm("Click Ok to confirm including special characters.");


  //Arrays holding the different combinations
  var lowerOnly = "abcdefghijklmnopqrstuvwxyz";
  var upperOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numsOnly = "123456789";
  var specialOnly = "";
  var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // 2. Validate the input
  if(lower === true && upper === false && nums === false && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerOnly.length);
      password += lowerOnly.substring(rand, rand + 1);
    }
  } else if(lower === true && upper === true && nums === false && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerUpper.length);
      password += lowerUpper.substring(rand, rand + 1);
    }
  }

  // } else if () {

  // }



  // 3. Display password to the page.
  return password;
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
