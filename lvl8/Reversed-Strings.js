function solution(str){
  let arr = str.split('');
  let reverseArr = arr.map((_, i) => arr[arr.length - i - 1])
  return reverseArr.join('')
}
