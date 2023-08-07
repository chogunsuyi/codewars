function getCount(str) {
  let sum = 0
  let arr = str.split('')
  
  arr.forEach(letter => {
    if (letter == 'a' || letter == 'e' || letter == 'i' || letter == 'o' || letter == 'u')
        sum++
  })
  
  return sum;
}
