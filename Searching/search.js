//Divide and Conquer

//Given a sorted array of integers and a num, write a function that returns the index where the value passed to the func is located. if not found, return -1

function search(arr, num) {
  let min = 0;
  let max = arr.length - 1;

  while (min <= max) {
    let midPoint = Math.floor((min + max) / 2);
    let curr = arr[midPoint];
    if (curr < num) {
      min = midPoint + 1;
    } else if (curr > num) {
      max = midPoint - 1;
    } else {
      return midPoint;
    }
  }
  return -1;
}

console.log(search([1, 2, 3, 4, 5, 6, 27, 44, 66, 89], 44));
