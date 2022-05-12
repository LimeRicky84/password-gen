var lengthEl = document.getElementById('pword')
var lowercaseEl = document.getElementById("lowercase")
var uppercaseEl = document.getElementById('uppercase')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')
var newPassword = document.getElementById('password')
var passLength = +lengthEl.value
var hasUpper = uppercaseEl.checked
var hasLower = lowercaseEl.checked
var hasNumber = numberEl.checked
var hasSymbol = symbolEl.checked

const characterCodes = Array.from(Array(26)).map( (_, i) => i +97);

const randLowerCase = characterCodes.map(code => String.fromCharCode(code))
const randUpperCase = randLowerCase.map(letter => letter.toUpperCase())
const randNumbers = [1,2,3,4,5,6,7,8,9,0]
const randSymbols = ['!','@','#','$','%','&','*']

console.log(passLength, hasUpper, hasLower, hasNumber, hasSymbol)  
console.log(randLowerCase, randUpperCase, randSymbols, randNumbers)

var generateBtn = document.querySelector("#generate");

function generatePassword(){
  
  const availableChars = [
    ...(hasLower ? randLowerCase : []),
    ...(hasUpper ? randUpperCase : []),
    ...(hasNumber ? randNumbers : []),
    ...(hasSymbol ? randSymbols : []),
  ];
  
  // console.log(availableChars)
  
    generatePassword(passLength, hasUpper, hasLower, hasNumber, hasSymbol)
  let password = ""

  // if(availableChars.passLength ===0){
  // return 'No Password. Check one or more boxes';
  // }
  
  for(let i=0; i < passLength; i++) {
  var mathIndex = Math.floor(Math.random() * generatePassword.passLength)
  finalPassword += availableChars[mathIndex]
  }; 
  return password
}

generateBtn.addEventListener('click', function() {
  var newPassword = generatePassword(passLength)
  newPassword.text(newPassword)
})