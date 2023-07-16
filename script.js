// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define Generate Password function
function generatePassword() {

  // 1. Prompt the user for password criteria
  //    a. Password length
  var len = prompt("How many characters would you like your password to contain?");
  console.log(len);
  if(len < 8 || len > 128) {
    alert("The length of your password must be between 8 and 128 characters. Please try again.");
    return;
  }
  
  //    b. Lowercase, Uppercase, numbers, special characters
  var specialChars = confirm("Click Ok to confirm including special characters.");
  if(specialChars === false) {
    alert("Password must include special characters. Please try again.");
    return;
  }



  // 2. Validate the input




  // 3. Display password to the page.
  return "Generated Password will go here!";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
