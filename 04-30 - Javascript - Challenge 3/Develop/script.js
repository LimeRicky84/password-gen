// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function lowerCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function upperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function numbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function symbols(){
  const symbols = '!@#$%^&*'
  return symbols[Math.floor(Math.random() * symbols.length)]
}

console.log(lowerCase())
console.log(upperCase())
console.log(numbers())
console.log(symbols())
console.log(lowerCase())

const lowercaseEl = document.getElementById('lowercase')
const uppercaseEl = document.getElementById('uppercase')
const numberEl = document.getElementById('number')
const symbolEl = document.getElementById('symbol')
const hasUpper = uppercaseEl.checked
const hasLower = uppercaseEl.checked
const hasNumber = uppercaseEl.checked
const hasSymbol = uppercaseEl.checked

console.log(hasUpper, hasLower, hasNumber, hasSymbol)
