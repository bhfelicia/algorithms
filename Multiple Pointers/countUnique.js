//Multiple pointers

//write a function that accepts a sorted array and counts unique values in array

function countUnique(arr) {
  //alter array to only store unique values in array and take out

  //pointer at beginning and index 1
  if (arr.length < 1) return 0;
  let pointOne = 0;
  let secondPoint = 1;

  while (secondPoint < arr.length) {
    if (arr[pointOne] === arr[secondPoint]) {
      secondPoint++;
    } else {
      pointOne++;
      arr[pointOne] = arr[secondPoint];
    }
  }
  return pointOne + 1;
}

console.log(countUnique([-1, 1, 1, 1, 2, 3, 4, 5]));
