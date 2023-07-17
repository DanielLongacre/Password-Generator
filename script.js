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


  //Strings holding the different combinations
  var lowerOnly = "abcdefghijklmnopqrstuvwxyz";
  var upperOnly = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var numsOnly = "123456789";
  var specialOnly = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerUpper = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerNums = "abcdefghijklmnopqrstuvwxyz123456789";
  var lowerSpecial = "abcdefghijklmnopqrstuvwxyz!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var upperNums = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  var upperSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var numsSpecial = "123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerUpperNumeric = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789";
  var lowerUpperSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerNumericSpecial = "abcdefghijklmnopqrstuvwxyz123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var upperNumericSpecial = "ABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
  var lowerUpperNumericSpecial = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ123456789!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";


  // 2. Validate the input
  //None-------------------------------------------------------------------------------
  if(lower === false && upper === false && nums === false && specialChars === false) {
    alert("You must choose at least one of the conditions. Please try again.");
    password = "Error: Please try again";
    }
  //Singles-------------------------------------------------------------------------------
  else if(lower === true && upper === false && nums === false && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerOnly.length);
      password += lowerOnly.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === true && nums === false && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * upperOnly.length);
      password += upperOnly.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === false && nums === true && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * numsOnly.length);
      password += numsOnly.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === false && nums === false && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * specialOnly.length);
      password += specialOnly.substring(rand, rand + 1);
    }
  //Doubles-------------------------------------------------------------------------------
  } else if(lower === true && upper === true && nums === false && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerUpper.length);
      password += lowerUpper.substring(rand, rand + 1);
    }
  } else if(lower === true && upper === false && nums === true && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerNums.length);
      password += lowerNums.substring(rand, rand + 1);
    }
  } else if(lower === true && upper === false && nums === false && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerSpecial.length);
      password += lowerSpecial.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === true && nums === true && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * upperNums.length);
      password += upperNums.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === true && nums === false && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * upperSpecial.length);
      password += upperSpecial.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === false && nums === true && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * numsSpecial.length);
      password += numsSpecial.substring(rand, rand + 1);
    }
  //Triples-------------------------------------------------------------------------------
  } else if(lower === true && upper === true && nums === true && specialChars === false) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerUpperNumeric.length);
      password += lowerUpperNumeric.substring(rand, rand + 1);
    }
  } else if(lower === true && upper === true && nums === false && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerUpperSpecial.length);
      password += lowerUpperSpecial.substring(rand, rand + 1);
    }
  } else if(lower === true && upper === false && nums === true && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerNumericSpecial.length);
      password += lowerNumericSpecial.substring(rand, rand + 1);
    }
  } else if(lower === false && upper === true && nums === true && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * upperNumericSpecial.length);
      password += upperNumericSpecial.substring(rand, rand + 1);
    }
  //ALL-------------------------------------------------------------------------------
  } else if(lower === true && upper === true && nums === true && specialChars === true) {
    for(var i = 0; i < len; i++) {
      var rand = Math.floor(Math.random() * lowerUpperNumericSpecial.length);
      password += lowerUpperNumericSpecial.substring(rand, rand + 1);
    }
  }


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
