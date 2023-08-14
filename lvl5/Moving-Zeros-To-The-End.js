// DESCRIPTION
// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
// moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

// MY SOLUTION
function moveZeros(arr) {
  arr.forEach((el, i, arr) => {
    // counter to make sure it doesn't get stuck in an infinite loop when it reaches 0s at end of array
    let counter = 1
    
    if(arr[i] === 0) {
      while(arr[i] === 0 && counter <= arr.length) {
        arr.splice(i, 1)
        arr.push(0)
        counter++
      }
    }
  })
  
  return arr
}
