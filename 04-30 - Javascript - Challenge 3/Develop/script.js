var lengthEl = document.getElementById('pword')
var lowercaseEl = document.getElementById("lowercase")
var uppercaseEl = document.getElementById('uppercase')
var numberEl = document.getElementById('number')
var symbolEl = document.getElementById('symbol')

var randomize = [
randLowerCase,
randUpperCase,
randNumbers,
randSymbols,
]

let i = 0; 

do {
  if (i === randomize.length - 1) {
    console.log(randLowerCase())
  }  
  i++;
} while (i< lengthEl.value)
  

  // call the function
  
  console.log(lengthEl.value)


var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword(length, hasUpper, hasLower, hasNumber, hasSymbol) {

  var passLength = +lengthEl.value
  var hasUpper = uppercaseEl.checked
  var hasLower = lowercaseEl.checked
  var hasNumber = numberEl.checked
  var hasSymbol = symbolEl.checked
  // var password = generatePassword(typesInput, typesArray);
  // var passwordText = document.querySelector("#password");
  
  console.log(passLength, hasUpper, hasLower, hasNumber, hasSymbol)
  // passwordText.value = password;

  let generatedPassword = ""

  // var typesInput = lower + upper + number + symbol; 
  var typesArray = [{hasLower}, {hasUpper}, {hasNumber}, {hasSymbol}].filter(item => Object.values(item)[0])

  if(typesArray ===0){
    return 'No Password. Check one or more boxes';
  }

  for(let i=0; i < length; i+=typesInput) {
      typesArray.forEach(type => {
        const funcName = Object.keys(type)[0];
        generatedPassword += randomize[funcName]();
        
      });
    
    var finalPassword = generatedPassword.slice(length)
    return finalPassword
  }

  // console.log(generatedPassword)
} 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function randLowerCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 97)
}

function randUpperCase(){
  return String.fromCharCode(Math.floor(Math.random() * 26) + 65)
}

function randNumbers(){
  return String.fromCharCode(Math.floor(Math.random() * 10) + 48)
}

function randSymbols(){
  const symbols = '!@#$%^&*'
  return symbols[Math.floor(Math.random() * symbols.length)]
}





