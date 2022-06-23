var lengthEl = document.getElementById('pword')

var passDisplayEl = document.getElementById('password')


const characterCodes = Array.from(Array(26)).map( (_, i) => i +97);

const randLowerCase = characterCodes.map(code => String.fromCharCode(code))
const randUpperCase = randLowerCase.map(letter => letter.toUpperCase())
const randNumbers = [1,2,3,4,5,6,7,8,9,0]
const randSymbols = ['!','@','#','$','%','&','*']

  

var generateBtn = document.querySelector("#generate");

function generatePassword(){

  const hasUpper = document.getElementById('uppercase').checked
  const hasNumber = document.getElementById('number').checked
  const hasSymbol = document.getElementById('symbol').checked
  let passLength = lengthEl.value
  console.log(passLength)
  var generatedPassword = ""

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

  console.log(passLength, hasUpper, hasNumber, hasSymbol)
  console.log(availableChars)
  for(let i=0; i < passLength; i++){
    let generatedPassword = availableChars[Math.floor(Math.random() * availableChars.length)]
    
    console.log(generatedPassword)
    let finalPassword = generatedPassword.slice(0,passLength)
    // console.log(finalPassword)
    passDisplayEl.innerText = finalPassword
  }; return  
  // console.log(finalPassword)
  passDisplayEl.innerText = finalPassword
  
}
// console.log(generatePassword())
generateBtn.addEventListener('click', (Event) => {
  
    Event.preventDefault()
    console.log('clicked')
    generatePassword()
  
  
  })


