//Recursion

//write a function productOfArray that takes an array and returns the product of all the values in the array

function productOfArray(arr) {
  if (arr.length < 1) return 0;
  let product = 1;
  function helper(arr) {
    if (arr.length < 1) return product;
    product *= arr[0];
    helper(arr.slice(1));
  }
  helper(arr);
  return product;
}

console.log(productOfArray([2, 3, 4]));
