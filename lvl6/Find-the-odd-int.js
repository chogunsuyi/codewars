// DESCRIPTION:
// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

// Examples
// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

// MY SOLUTION

function findOdd(A) {
  //happy coding!

  let theElement
  
  A.forEach(el => {
    let count = A.filter(item => item == el)
    if (count.length % 2 == 1) theElement = el
  })
  
  return theElement;
}
