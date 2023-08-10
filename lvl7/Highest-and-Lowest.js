// DESCRIPTION
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

//MY SOLUTION
function highAndLow(numbers){
  // ...
  
  let arr = numbers.split(' ').sort((a,b)=> b-a)
  
  return `${arr[0]} ${arr[arr.length - 1]}`
}
