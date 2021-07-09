//Sliding window

//Given an array of integers and a number, write a function which finds the max sum of a subarray with the length of the number passed to the function and returns that sum

function maxSubarraySum(arr, num) {
  let maxSum = 0;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  console.log(maxSum);
  let tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

console.log(maxSubarraySum([100, 200, 300], 2));
