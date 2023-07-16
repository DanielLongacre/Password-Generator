// Assignment Code
var generateBtn = document.querySelector("#generate");

//Define Generate Password function
function generatePassword() {
  console.log("Button has been clicked!");

  // 1. Prompt the user for password criteria
  //    a. Password length
  //    b. Lowercase, Uppercase, numbers, special characters
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
