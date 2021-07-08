//write a function which accepts a sorted array of integers that finds the first pair where the sum is 0 and returns the values that sum to zero as an array or undefined if no pair exists

function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-1, 0, 1, 2]));
