// DESCRIPTION
// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.
// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

// MY SOLUTION
function rot13(message){
  //your code here
  // create an array of all letters
  let upperCaseCode = Array.from(Array(26)).map((e,i) => i + 65)
  let upperCase = upperCaseCode.map(num => String.fromCharCode(num))
  let lowerCaseCode = Array.from(Array(26)).map((e,i) => i + 97)
  let lowerCase = lowerCaseCode.map(num => String.fromCharCode(num))
  let letters = upperCase.concat(lowerCase)

  // split string into array
  return message.split('').map(e => {
    if(!(letters.includes(e))){
      // if element isn't a letter, let it remain unchanged
      return e
    } else if(upperCase.slice(0,13).includes(e) || lowerCase.slice(0,13).includes(e)){
      // if an element is in the first half of the alphabet, change it to the letter 13 characters away
      return String.fromCharCode(e.charCodeAt(0) + 13)
    } else {
      // if an element is in the second half of the alphabet, change it to the letter 13 characters before it
      return String.fromCharCode(e.charCodeAt(0) - 13)
    }
  }
  // turn the new array into a string
  ).join('')
}
