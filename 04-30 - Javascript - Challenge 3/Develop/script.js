
// variables pulled from HTML
var lengthEl = document.getElementById('pword')
var passDisplayEl = document.getElementById('password')

const characterCodes = Array.from(Array(26)).map( (_, i) => i +97);
const randLowerCase = characterCodes.map(code => String.fromCharCode(code))
const randUpperCase = randLowerCase.map(letter => letter.toUpperCase())
const randNumbers = ['1','2','3','4','5','6','7','8','9','0']
const randSymbols = ['!','@','#','$','%','&','*']

var generateBtn = document.querySelector("#generate");

// this function checks whether attribute boxes are checked,
// generates the desired password, and returns it to the page
function generatePassword(){

  const hasUpper = document.getElementById('uppercase').checked
  const hasNumber = document.getElementById('number').checked
  const hasSymbol = document.getElementById('symbol').checked
  let passLength = lengthEl.value
  let finalPassword = ""
  let availableChars = []

  availableChars = availableChars.concat(randLowerCase)
  if (hasUpper){
    availableChars = availableChars.concat(randUpperCase);
  } 
  if (hasNumber){
    availableChars = availableChars.concat(randNumbers);
  }
  if (hasSymbol){
    availableChars = availableChars.concat(randSymbols);
  }


  for(let i=0; i < passLength; i++){
    let generatedPassword = availableChars[Math.floor(Math.random() * availableChars.length)]  
    finalPassword += generatedPassword.slice(0,passLength)
    passDisplayEl.innerText = finalPassword
  }; return  

}
// generate button functions
generateBtn.addEventListener('click', (Event) => {
  
    Event.preventDefault()
    console.log('clicked')
    generatePassword()

  })


