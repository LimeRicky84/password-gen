var lengthEl = document.getElementById('pword')
var lowercaseEl = document.getElementById("lowercase")
var uppercaseEl = document.getElementById('uppercase')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')
var passDisplayEl = document.getElementById('password')
var passLength = +lengthEl.value
var hasUpper = uppercaseEl.checked
var hasNumber = numberEl.checked
var hasSymbol = symbolEl.checked

const characterCodes = Array.from(Array(26)).map( (_, i) => i +97);

const randLowerCase = characterCodes.map(code => String.fromCharCode(code))
const randUpperCase = randLowerCase.map(letter => letter.toUpperCase())
const randNumbers = [1,2,3,4,5,6,7,8,9,0]
const randSymbols = ['!','@','#','$','%','&','*']

// console.log(passLength, hasUpper, hasNumber, hasSymbol)  
// console.log(randLowerCase, randUpperCase, randSymbols, randNumbers)

var generateBtn = document.querySelector("#generate");

function generatePassword(passLength, hasUpper, hasNumber, hasSymbol){

  var password = ""

  let availableChars = randLowerCase
  if (hasUpper) availableChars = availableChars.concat(randUpperCase);
  if (hasNumber) availableChars = availableChars.concat(randNumbers);
  if (hasSymbol) availableChars = availableChars.concat(randSymbols);
  
  
  for(let i=0; i < passLength; i++){
  var mathIndex = availableChars[Math.floor(Math.random() * passLength)]
  password = availableChars[mathIndex];
  }; 
  return password;
}
console.log(generatePassword())
generateBtn.addEventListener('click', (Event) => {
    Event.preventDefault()
    var finalPassword = generatePassword(passLength.value)
    passDisplayEl.innerText = finalPassword
  })